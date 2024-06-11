<template>
  <!-- //parallax__scrollTop -->
  <div class="parallax__progress">
    <progress ref="progressBar" max="100" value="0"></progress>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const progressBar = this.$refs.progressBar;

    gsap.to(progressBar, {
      value: 100,
      ease: "none",
      scrollTrigger: {
        scrub: 0.3
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

/* parallax__progress */
.parallax__progress progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  appearance: none;
  width: 100%;
  height: 5px;
  border: none;
  background: transparent;
  &::-webkit-progress-bar {
    background: transparent;
  }
  &::-webkit-progress-value {
    background: linear-gradient(to left, $premary-800, $premary-600, $premary-100);
    background-color: $premary-600;
    background-attachment: fixed;
  }
  &::-moz-progress-bar {
    background: linear-gradient(to left, $premary-800, $premary-600, $premary-100);
    background-color: $premary-600;
    background-attachment: fixed;
  }
}

</style>