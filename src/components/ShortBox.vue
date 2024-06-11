<template>
  <div class="short_box">
    <img class="BG" :src=imageSrc alt="">
    <div class="item_box">
      <div class="short_title">
        <h2>{{ title }}</h2>
        <p v-html="desc"></p>
      </div>
      <div class="btn_box">
        <button 
          class="mouse_on"
          :class="buttonClass"
          @click="goToPage(Page)">
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    BG: String,
    Page: String,
    btn: String,
    btnBG: String
  },
  computed: {
    imageSrc() {
      return require(`assets/${this.BG}`);
    },
    buttonClass() {
      // console.log(`${this.btnBG}`)
      return `${this.btnBG}`;
    }
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.short_box {
  position: relative;
  flex: 1;
  background-size: 100%;
  background-position: center;
  background-attachment: 0.25s;
  .item_box {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10vw 9vw;
    .short_title {
      padding-bottom: 10vw;
      h2 {
        font-size: $font-medium;
        margin-bottom: 16px;
        font-weight: 700;
      }
      p {
        font-size: $font-small;
      }
    }
  }
}
</style>