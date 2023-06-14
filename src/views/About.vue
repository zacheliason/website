<template>
  <div>
    <div class="top-spacer"></div>
    <h1>Hi! My name is Zach and I just finished an undergrad in Bioinformatics. I enjoy coding solutions to real-world problems—particularly in <router-link to="/">cancer immunology</router-link> and <router-link to="/">genomics</router-link> research, although I have experience in ecology and statistics research as well. {{ earth }}</h1>
    <h1>I have significant experience in a variety of coding tools and languages (Python, PyTorch, R, C++, scripting/automation, database management, version control, web programming) and am proficient in design software (Adobe Illustrator, Photoshop, InDesign).</h1>
    <h1>I also enjoy finding time to be outside, making things with my hands, and (lately) writing.</h1>
    <h1>If you're an employer, feel free to look at my <a href="resume.pdf" target="_blank">resume</a> or <a href = "mailto: eliasonzach@gmail.com">reach out</a>!</h1>
    <h1>Friends and family, I look forward to your emails too 💌</h1>
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

