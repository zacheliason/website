import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import projects from "./projects.json";
import designs from "./designs.json";
import posts from "./posts.json";

Vue.config.productionTip = false;
let data = {
  projects: projects.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  }),
  designs: designs.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  }),
  posts: posts.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  }),
  // spotify_streamgraph data objects
  importedJSON: [],
  artist_list: [],
  csv: "",
  top_artists: [],
  top_artists_keys: {},
  week_max: 0,
  new_width: 0,
  files_imported: []
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
