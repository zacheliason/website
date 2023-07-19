/* eslint-disable */
<template>
  <div id="app">
    <div id="bar">
      <div id="bar-container">
        <div>
          <router-link :to="backpath" class="bar-h3">
            <h3>zacheliason{{ pathname }}</h3>
          </router-link>
        </div>
        <div id="right-box">
          <div @mouseover="emoji('projects')" @mouseleave="leaveemoji('projects')">
            <router-link to="/projects" id="emoji-projects" class="emoji">🤖</router-link>
          </div>

          <div @mouseover="emoji('design')" @mouseleave="leaveemoji('design')">
            <router-link to="/design" class="emoji" id="emoji-design">💿</router-link>
          </div>

          <div @mouseover="emoji('about')" @mouseleave="leaveemoji('about')">
            <router-link to="/about" class="emoji" id="emoji-about">🙇‍♂️</router-link>
          </div>

<!--
          <div @mouseover="emoji('blog')" @mouseleave="leaveemoji('blog')">
            <router-link to="/blog" class="emoji" id="emoji-blog">✍️</router-link>
          </div>
-->
        </div>
      </div>
    </div>

    <div id="mobile-bar">
      <router-link class="mobile-link" to="/"><div>🏠</div><div class="show-on-exact-active">home</div></router-link> |
      <router-link class="mobile-link" to="/projects"><div>🤖</div> <div class="show-on-active">projects</div></router-link> |
      <router-link class="mobile-link" to="/design"><div>💿</div> <div class="show-on-active">design</div></router-link> |
      <router-link class="mobile-link" to="/about">🙇‍♂️ <div class="show-on-active">about</div></router-link> |
      <router-link class="mobile-link" to="/blog">✍️ <div class="show-on-active">blog</div></router-link>
    </div>

    <div id="router-view" >
    <router-view />

    </div>

    <footer class="not-on-mobile">
      <div>
        <a target="_blank" href="https://www.instagram.com/zacheliason_/">instagram</a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/zacheliason/">github</a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/zacheliason/website">[site code]</a>
      </div>
    </footer>

    <footer class="on-mobile">
        <div>
            <a target="_blank" href="https://www.instagram.com/zacheliason_/">instagram</a>
        </div>
       <div>
        <a target="_blank" href="https://github.com/zacheliason/">github</a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/zacheliason/website">[site code]</a>
      </div>
    </footer>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "App",
  computed: {
    backpath() {
      let path = this.$route.path;
      path = path.split("/")
      path = path.slice(0, path.length - 1).join("/")
      if (path.length == 0) {
        path = "/"
      }
      path = path.replace("/categories","")
      path = path.replace("/authors","")
      return path
    },
    pathname() {
      let path = this.$route.path;
      path = path.replace("projects", "🤖");
      path = path.replace("design", "💿");
      path = path.replace("blog", "✍️");
      path = path.replace("about", "🙇‍♂️");
      path = path.replaceAll(" ", "_");

      return path;
    }
  },
  methods: {
    async emoji(key) {
      var el = document.getElementById("emoji-" + key);
      var temp = el.innerHTML;
      if (temp.indexOf(key) == -1) {
        el.innerHTML = el.innerHTML + " " + key;
      }
    },
    leaveemoji(key) {
      var el = document.getElementById("emoji-" + key);
      if (el.innerHTML.indexOf(key) != -1)
        el.innerHTML = el.innerHTML.split(" " + key)[0];
    }
  }
};
</script>

<style>
:root {
  --site-width: 60vw;
  --grey: #f5f5f5;
  --dark: #90a4ae;
  --bright: #f74825;
}

* {
  box-sizing: border-box;
}

.mono {
  font-family: ibm-plex-mono, mono;
}

#app {
  width: var(--site-width);
  margin: 0 auto;
}

strong {
  font-weight: bold;
}

h2 {
  font-family: ibm-plex-sans, sans !important;
}

h1 {
  margin-top: 0;
  font-family: ibm-plex-serif, serif;
  font-style: normal;
  font-weight: 200;
  font-size: 2.5em;
}

.date {
  color: var(--dark);
  font-weight: bolder;
  font-family: "ibm-plex-mono", mono;
}


h1 a:hover, .project:hover {
  color: var(--bright) !important;
  font-style: italic;
  border-bottom: 2px dotted var(--bright);
}

h3,
h2,
h4,
h5,
h6 {
  font-family: ibm-plex-mono, monol;
}

a:not(.emoji):hover {
  text-decoration: none;
  color: var(--bright);
}

.smallcaps {
  font-variant: small-caps;
}

footer {
  font-size: 0.8em;
  font-family: ibm-plex-mono, mono;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 9999 !important;
  height: 3em;
  text-align: center;
  mix-blend-mode: difference;
  width: var(--site-width);
  margin: 0 auto;
}

footer a {
  color: #6f5b51;
  mix-blend-mode: difference;
}

footer a:hover {
  color: #08b7da !important;
}

p {
  font-family: ibm-plex-sans, sans;
  font-style: normal;
  font-weight: 400;
}

body {
  background-color: white;
  font-family: ibm-plex-sans, sans-serif;
  margin: 0;
}

a {
  text-decoration: none !important;
  color: var(--dark);
}

#bar-container {
  margin: 0 auto;
  width: var(--site-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dark);
}

#bar-container h3 {
    font-size: 19px !important;
    opacity: 1;
    margin: 0;
}

#bar-container a {
    font-size: 20px !important;
    color: var(--dark);
}

#bar {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--grey);
  width: 100vw;
  height: 3em;
  margin: 0 auto;
  display: flex;
  z-index: 10;
  font-family: ibm-plex-mono, mono;
}

.page {
  height: 100%;
}

.top-spacer {
  height: 7.5vw;
}

.bottom-spacer {
  height: 8vw;
}

.v-flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.h-flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#right-box {
  width: var(--width);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.invisible {
  opacity: 0;
}

.on-mobile {
  display: none;
}

.mono {
  font-family: "ibm-plex-mono";
  color: var(--dark);
}

.emoji a:hover {
  color: var(--dark) !important;
}

.emoji.router-link-active{
  background-color: var(--bright) !important;
  border-radius: 0px;
  color: white !important;
}

.emoji {
  padding: 0.65em 0.5em .55em .5em;
  margin: 0 0.1em;
}

.emoji-text {
  display: none;
  width: 0;
  overflow: hidden;
}

#mobile-bar {
  display: none;
}

#router-view {
  margin: 0 auto;
  min-height: calc(100vh - 3em);
  width: var(--site-width);
  position: absolute;
  top: 3em;
}

h2, h4, h5, h6 {
  font-family: ibm-plex-serif, serif !important;
}

h2 {
  font-weight: 200;
}

.show-on-active, .show-on-exact-active {
  display: none;
}

a.bar-h3 h3{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(.5 * var(--site-width));
}

.mobile-link {
  display: flex;
  color: var(--dark);
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  a {
    color: var(--bright);
  }

  footer {
    font-size: unset;
    position: unset;
    bottom: 0;
    height: unset;
    text-align: center;
    width: 100%;
    mix-blend-mode: unset;
    background-color: var(--grey);
    padding: 1em;
    justify-content: space-between;
  }
  footer div{
  display: inline-block;
  flex:1;

  }


  #router-view {
    margin: unset;
    height: unset;
    width: unset;
    position: unset;
    top: unset;
    padding: 5%;
  }

  #app {
    width: 100vw;
  }

  #mobile-bar {
    background: var(--grey);
    padding: 5%;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--dark);
    font-size: 1.1em;
  }

  #mobile-bar a{
    padding: 0 1em;

  }


  #bar {
    display: none;
  }

  .on-mobile {
    display: block;
  }

  footer.on-mobile {
    display: flex;
  }

  .not-on-mobile {
    display: none;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  #mobile-bar h3 {
    margin-top: 0;
    margin-bottom: .5em;
  }

  h1 {
    font-size:2em !important;
  }

  .router-link-active .show-on-active {
    display: inline-block;
  }

  .router-link-exact-active .show-on-exact-active {
    display: inline-block;
  }


  a:not(.emoji):hover {
    text-decoration: unset;
    color: unset;
  }

  h1 a:hover, .project:hover {
    color: unset;
    font-style: unset;
    border-bottom: unset;
  }

  .emoji a:hover {
    color: unset;
  }

  footer a:hover {
    color: unset;
  }
}
</style>
