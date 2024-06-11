<template>
  <div class="sub_banner">
    <div class="text_box">
      <h1>{{ bannerText }}</h1>
      <P>{{ bannerDesc }}</P>
    </div>
    <img :src=imageSrc alt="">
  </div>
</template>

<script>
export default {
  props:{
    BG: String
  }, 
  computed: {
    bannerText() {
      return this.$store.state.banner.bannerText;
    },
    bannerDesc() {
      return this.$store.state.banner.bannerDesc;
    },
    imageSrc() {
      // console.log(`assets/${this.BG}`)
      return require(`assets/${this.BG}`);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.sub_banner {
  width: 100%;
  height: 330px;
  overflow: hidden;
  position: relative;
  img{
    object-position: center bottom;
  }
  .text_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include center;
    flex-direction: column;
    gap: 30px;
    background-size: cover;
    background-position: center;
    color: $wh-color;
    h1 {
    font-size: $font-medium;
    font-weight: bold;
    }
    p {
      font-size: $font-Regular;
    }  
  }
}
</style>