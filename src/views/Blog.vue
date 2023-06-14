<template lang="html">
  <div>
    <div class="top-spacer"></div>

    <ul style="list-style-type: none; padding: 0">
      <li class="post-li" v-for="(post, index) in posts" :key="post.id" :data-emoji="generateRandomEmoji(index)">
        <div><router-link :to="'/blog/' + post.name" class="post"><h1>{{ post.name.replaceAll("_", " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) }}<br class="on-mobile"><span class="normal date">{{ format_date(post.date) }}</span></h1></router-link>
        <br class="on-mobile">
          <div class="tag-container-container" :class="{ hide_tags: !postHasTags(post.tags) }">
            <div class="tag-container">
              <div v-for="tag in post.tags" :key="tag" class="tag" @click="toggleTag(tag)" :class="{ active: isActive(tag) }">{{ tag }}</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="top-spacer"></div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
    filter_by: "",
    emojis:[
      '🔥', '👍', '🙌', '🎉',
      '🎶', '🌟', '🙏',
      '💃', '🔴', '🎊',
      '✨', '🚀', '💙', '😃', '🎁',
      '🌈', '🌞', '👑', '💥', '😀', '💜',
      '🎈', '💛', '🌺', '🎵', '🌹', '🌷', '💚', '💐',
      '🌸', '🌼', '🌻', '🍀', '🌴','☀️', '💫', '🌍',
      '💨', '🌊', '🌙', '⭐', '🌠', '🍂', '🍁', '🌬️', '🌫️',
      '🌧️', '🌦️', '☁️', '⛅', '🌥️', '🌪️', '🌡️', '🔆', '🔅', '❄️',
      '🌨️', '☃️', '⛄', '🌌', '🪐', '🌎', '🌏', '🌕', '🌖', '🌗',
      '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌛', '🌜', '🌄',
      '🌅', '🌞', '☄️', '🎆', '🎇', '🌇', '🌆', '🌃', '🌉', '🌁',
      '🎎', '🎏', '🎐', '🧧', '🎀', '🎗️', '🏮', '🎑', '🎋', '🎍',
      '🎄', '🎅', '🤶', '🧑‍🎄', '⛪',
    ]

    };
  },
  methods: {
    generateRandomEmoji(index) {
      let d = new Date();
      let n = d.getSeconds();
      let random_int = Math.floor(Math.random() * 31);
      index += 1
      let random_index = ((n * 31) * (31 * index) * random_int) % this.emojis.length;
      return this.emojis[random_index];
    },
    format_date(d) {
      let date = d.split("T")[0];
      let parts = date.split("-");
      return parts[1] + "/" + parts[2] + "/" + parts[0];
    },
    toggleTag(tag) {
      if (this.filter_by === tag) {
        this.filter_by = '';
      } else {
        this.filter_by = tag;
      }
    },
    isActive(tag) {
      return this.filter_by == tag;
    },
    postHasTags(tag_list) {
      if (tag_list.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    SpotifyOff() {
      let list_of_tags = ["coding"]
      console.log(this.filter_by)
      if (this.filter_by == "") {
        console.log(2)
        return false;
      } else if (!(this.filter_by in list_of_tags)) {
        console.log(1)
        return true;
      }  else {
        console.log(3)
        return false;
      }

    }
  },
  computed: {
    posts() {
      if (!this.filter_by) {
        return this.$root.$data.posts;
      }
      const filterText = this.filter_by.toLowerCase();

      let posts = this.$root.$data.posts;

      return posts.filter(post => {
        return post.tags.some(tag => tag.toLowerCase().includes(filterText));
      });
    },
  }
};
</script>

<style lang="css" scoped>
.hide_tags {
  display:none !important;
}

a:hover {
  text-decoration: underline;
  border-bottom: 2px dotted var(--bright);
}

a {
  border-bottom: 2px dotted white;
}

li {
  margin: 1em 0 ;
  display: flex;
  align-items: center;

}

li::before {
  content: attr(data-emoji);
  display: inline-block;
  width: 1em;
  font-size: 2em;
  margin-right: .5em;
}

li a {
  color: black;
}

.tag-container {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1em;
}

.tag {
  line-height: 1em;
  padding: .2em .8em .4em .8em;
  border-radius: 10px;
  margin: 0 .6em 0 0;
  color: var(--dark);
  border: 1px solid var(--dark);
}

.tag:hover,
.active {
  background-color: var(--dark);
  color: white;
  cursor: pointer;
}

.post {
  display: inline-block;
}

.date {
  margin: 0;
  font-size: 0.4em;
  font-weight: 800;
  padding: 0 .5em;
  color: var(--dark);
}

h1 {
  padding: 0;
  margin: 0;
}

h1:hover {
  font-style: italic;
}

.tag-container-container {
  display: inline-block;
  height: 100%;
}

.spotify_off {
  display: none !important;
}

.on-mobile {
  display: none !important;
}

@media only screen and (max-width: 600px) {
  li::before {
    content: unset !important;
  }
  li {
    line-height: 2em;
    background-color: var(--grey);
    padding: .5em 1em;

  }
  .spotify_off {
    display: block !important;
  }
  .spotify_on {
    display: none !important;
  }
  .on-mobile {
    display: block !important;
  }

  .post h1 {
    padding-top: .3em;
  }

  a {
    border-bottom: unset;
  }

  .date {
    padding: 0;
  }

  a:hover {
    text-decoration: unset;
    border-bottom: unset;
  }

  .tag:hover, .active {
    background-color: unset;
    color: unset;
  }

  h1:hover {
    font-style: unset;
  }
}

</style>