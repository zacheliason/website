import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Design from "../views/Design.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";

import QuartoViewer from "../components/QuartoViewer.vue";
import DesignViewer from "../components/DesignViewer.vue";

//import Recipes from "../views/Recipes.vue";
//import RecipeViewer from "../components/RecipeViewer.vue";
import SpotifyStreamgraph from "../views/SpotifyStreamgraph.vue";
//import Cv from "../views/CV.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
//  {
//    path: "/recipes",
//    name: "Recipes",
//    component: Recipes
//  },
  {
    path: "/design",
    name: "Design",
    component: Design
  },
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/projects/spotify_streamgraph",
    name: "SpotifyStreamgraph",
    component: SpotifyStreamgraph
  },
  { path: "/projects/:id", component: QuartoViewer },
  { path: "/blog/:id", component: QuartoViewer },
  { path: "/design/:id", component: DesignViewer },
//  { path: "/recipes/:id", component: RecipeViewer },
//  { path: "/recipes/categories/:id", component: Recipes },
//  { path: "/recipes/authors/:id", component: Recipes },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
});

export default router;