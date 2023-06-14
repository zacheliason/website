<template>
  <div>
    <div class="top-spacer"></div>
      <h1 class="design-name"> {{ design.name }} </h1>
      <p class="single-date"> {{ format_date(design.date) }} </p>
      <hr>

    <div class="parent container" ref="container">
      <div class="image-box">
        <img v-for="image in design.images" :src="'/images/' + image" />
        <div class="bottom-spacer not_on_mobile"></div>
      </div>

      <div class="description">
        <p> {{design.description}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignViewer",
  computed: {
    designs() {
        return this.$root.$data.designs;
    },
    design() {
      let design = this.designs.find(p => p.name == this.$route.params.id);
      return design
    }
  },
  mounted() {
    this.adjustContainerHeight();
    window.addEventListener('resize', this.adjustContainerHeight);
  },
  updated() {
    setTimeout(this.adjustContainerHeight, 200);
  },
  destroyed() {
    window.removeEventListener('resize', this.adjustContainerHeight);
  },
  methods: {
    adjustContainerHeight() {
      const container = this.$refs.container;
      if (container) {
        container.style.height = container.scrollHeight + 'px';
      }
    },
    format_date(d) {
      return d;
    },
  },
};
</script>

<style>
.design {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3em;
}
.images {
  display: grid;
  gap: 10px;
}

img {
 width: 100%;
 display:block;
 margin-bottom: 2em;
}

.single-date {
  margin: 0;
  font-family: ibm-plex-mono, monospace;
  font-weight: bold;
  color: var(--dark);
}

.design-name {
  margin: 0;
}

hr {
  border-bottom: 2px dotted var(--dark);
  border-top: 0 dotted white;
  margin: 1em 0 3em 0;
}

.parent {
  position: relative;
  height: 100vh;
}

.description {
  display: inline-block;
  position: sticky;
  top: 20%;
  right: 0;
  width: calc((1 * (100%/3)) - 1em);
  float: right;
  margin: 0;
}

.description p {
  margin: 0;
}

.image-box {
  display: inline-block;
  width: calc((2 * (100%/3)) - 1em);
  position: absolute;
}

/* Responsive CSS for mobile */
@media (max-width: 767px) {
  .description {
    position: unset;
    display:block;
    float: none;
    width: 100%;
    margin-bottom: 8vw;
  }

  img {
   margin-bottom: 5vw
  }

  .image-box {
    display: block;
    position: unset;
    width: 100%;
  }
}
</style>

