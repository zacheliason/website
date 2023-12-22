<template>
  <div>
    <div class="top-spacer"></div>
    <h2>Hi! My name is Zach and I recently completed a Bachelor of Science (B.S.) degree in Bioinformatics. I enjoy applying deep-learning approaches to translational research and real-world problems—particularly in immunology and oncology. I also have experience in epidemiology, ecology, and public health research.</h2>
    <h2>I have significant experience using a variety of coding tools and languages (Python, AI/ML, PyTorch, R, C++, scripting/automation, database management, version control, web programming), domain knowledge in biology and genetics, and am proficient in design software (Adobe Illustrator, Photoshop, InDesign).</h2>
    <h2>I enjoy finding time to be outside, making things with my hands, and (lately) writing.</h2>
    <h2>If you're an employer, feel free to look at my <a href="resume.pdf" target="_blank">CV</a> or <a href = "mailto: eliasonzach@gmail.com">reach out</a>. {{ earth }}</h2>
    <div class="bottom-spacer"></div>
  </div>
</template>

<script>
export default {
  name: "About",
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

