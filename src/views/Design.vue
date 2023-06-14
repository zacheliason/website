<template>
  <div>
    <div class="top-spacer"></div>
    <div class="mosaic-gallery">
      <div class="mosaic-container">
        <router-link v-for="design in designs" :key="design.name" :to="'/design/' + design.name" class="design-item" :style="'background-image: url(/images/' + design.images[0] + ')'">
          <div class="design-info">
            <h3 class="design-name">{{ design.name }}</h3>
            <p class="date">{{ format_date(design.date) }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="bottom-spacer"></div>
  </div>
</template>

<script>
export default {
  name: "Design",
  methods: {
    format_date(d) {
      return d;
    },
  },
  computed: {
    designs() {
      return this.$root.$data.designs.filter(x => {
        return !x.name.startsWith("HIDE");
      });
    }
  }
};
</script>

<style>
.mosaic-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1em;
}

.design-item {
  position: relative;
  width: 100%;
  flex: 1 0 calc(var(--site-width) / 4); /* Set each item to occupy 33.33% of the container width (minus the gap) */
  height: calc(var(--site-width) / 3);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  z-index: 0;
}

.design-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.design-item:hover {
  background-color: var(--bright);
  color: white !important;
}

.design-item:hover::before {
  background-color: var(--bright);
  opacity: .8;
}

.design-info {
  position: relative;
  z-index: 1;
  padding: 1.2em 1.5em;
  opacity: 0;
  height: 100%; /* Ensure the content fills the entire height */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.design-name, .design-date {
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide any overflowing text */
  text-overflow: ellipsis; /* Display an ellipsis (...) when text overflows */
}

.design-name {
  font-family: "ibm-plex-serif", serif;
  font-style: italic;
  font-weight: 200;
  font-size: 2em;
  margin: 0;
}

.design-item:hover .design-info {
  opacity: 1;
}

.date {
  font-size: 0.8em;
  margin: 0;
  color: white;
}

@media (max-width: 768px) {
  .mosaic-container {
    position: relative;
    justify-content: center; /* Center the items */
  }

  .design-item {
    flex: 1 0 calc(var(--site-width));
    height: calc(var(--site-width) * 1.5);
  }

  .design-item::before {
    background-color: var(--bright);
    opacity: .8;
    height: 6em;
    bottom: 0;
    top: unset;
  }

  .design-info {
    color: white;
    opacity: 1;
  }

  .design-item:hover .design-info {
    opacity: unset;
  }

  .design-item:hover::before {
    background-color: unset;
    opacity: unset;
  }

  .design-item:hover {
    background-color: unset;
    color: unset;
  }
}
</style>

