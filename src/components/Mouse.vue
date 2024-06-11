<template>
  <div class="mouse__wrap">
    <div class="mouse__cursor"></div>
    <div class="mouse__cursor2"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const cursor = document.querySelector(".mouse__cursor");
    const cursor2 = document.querySelector(".mouse__cursor2");

    window.addEventListener("mousemove", e => {
      // gsap
      gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
      gsap.to(cursor2, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });
    });

    document.querySelectorAll(".mouse_on").forEach(span => {
      span.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        cursor2.classList.add("active");
      });
      span.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        cursor2.classList.remove("active");
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.mouse__wrap {
  cursor: none;
  .mouse__cursor {
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    z-index: 999999999999;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    user-select: none;
    pointer-events: none;
    transition: transform 0.3s;
    &.active {
      transform: scale(0);
    }
  }
  .mouse__cursor2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    z-index: 999999999999;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    user-select: none;
    pointer-events: none;
    transition: transform 0.3s;
    &.active {
      transform: scale(5);
      background-color: rgba(18, 164, 197, 0.329)
    }
  }
}

</style>