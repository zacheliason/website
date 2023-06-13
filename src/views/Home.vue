<template>
    <div class="home">
        <div class="top-spacer"></div>
        <h1>Hi! My name is Zach and I just finished an undergrad in Bioinformatics. I enjoy coding solutions to real-world problems—particularly in <router-link to="/">cancer immunology</router-link> and <router-link to="/">genomics</router-link> research. {{ earth }}</h1>
        <h1>See more <router-link to="/about">here »</router-link></h1>
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
