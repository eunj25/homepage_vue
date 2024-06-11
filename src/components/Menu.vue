<template>
  <nav class="menu" :class="{ active: isMenuActive }">
    <ul>
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <a 
          @click="scrollToSection(menuItem.ref)" 
          :class="{ active: activeSection === menuItem.ref }">
          {{ menuItem.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isMenuActive: false,
      activeSection: null
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToSection(sectionRef) {
      this.$emit("scroll-to-section", sectionRef)
    },
    handleScroll() {
      this.isMenuActive = window.scrollY > 400;

      const scrollPosition = window.scrollY + 100;
      for (const menuItem of this.menuItems) {
        const section = this.$refs[menuItem.ref];
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          this.activeSection = menuItem.ref;
          break;
        }
      }
    },
    menuClick(sectionRef) {
      this.activeSection = sectionRef;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

nav.menu {
  padding: 17px $padding-sub;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
  background-color: $wh-color;
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  ul {
    @include between;
    font-weight: bold;
    li a {
      cursor: pointer;
      &:hover {
        color: $premary-600;
      }
      &.active {
        color: $premary-600;
        font-weight: bold;
      }
    }
  }
}
</style>