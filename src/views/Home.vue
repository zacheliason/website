<template>
    <div class="home">
        <div class="top-spacer"></div>
        <h2>Hi! My name is Zach and I recently completed a Bachelor of Science (B.S.) degree in Bioinformatics. I enjoy applying deep-learning approaches to translational research and real-world problems—particularly in immunology and oncology. {{ earth }}</h2>
        <h2>See more <router-link to="/about">here »</router-link></h2>
        <div class="bottom-spacer"></div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      emojis: ["🌍", "🌎", "🌏"],
      currentIndex: 0,
    };
  },
  computed: {
    earth() {
      return this.emojis[this.currentIndex];
    },
    currentSeason() {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;

      if (currentMonth >= 3 && currentMonth <= 5) {
        return 'Spring';
      } else if (currentMonth >= 6 && currentMonth <= 8) {
        return 'Summer';
      } else if (currentMonth >= 9 && currentMonth <= 11) {
        return 'Autumn';
      } else {
        return 'Winter';
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.emojis.length;
    }, 1000);
  },
};
</script>

<style scoped>
</style>
