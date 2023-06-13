<template>
  <div>
    <div class="top-spacer"></div>
      <h1 class="design-name"> {{ design.name }} </h1>
      <p class="single-date"> {{ format_date(design.date) }} </p>
      <hr>
    <div class="design">
    <div class="images">
      <img v-for="image in design.images" :src="'/images/' + image" />
    </div>
    <div class="description">
      <p>{{ design.description }}</p>
    </div>
    </div>
    <div class="bottom-spacer"></div>
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
  methods: {
    format_date(d) {
      let date = d.split("T")[0];
      let parts = date.split("-");
      return parts[1] + "/" + parts[2] + "/" + parts[0];
    },
  }
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


/* Responsive CSS for mobile */
@media (max-width: 767px) {
  .design {
    grid-template-columns: 1fr;
  }

  .images {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

