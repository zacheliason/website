<template>
  <div>
    <div class="top-spacer"></div>
    <div v-html="quarto_content"></div>
    <div class="bottom-spacer"></div>
  </div>
</template>

<script>

export default {
  name: "QuartoViewer",
  computed: {
    projects() {
        let projects = this.$root.$data.projects;
        let posts = this.$root.$data.posts;
        let all_together = projects.concat(posts);
        return all_together;
    },
    quarto_content() {
      let project = this.projects.find(p => p.name == this.$route.params.id);
      return project.content
    }
  },
};
</script>

<style>
.nav-link {
  font-family: ibm-plex-sans, sans !important;
  color: red;
}
a.active {
  color: black !important;
}
</style>

