<template>

  <!-- 진행바 -->
  <Progress />
  <!-- mouse -->
  <Mouse />

  <section class="full intro">
    <div class="intro_title">
      <h1>초자동화(HYPER AUTOMATION) 기술 리더</h1>
      <span>& Technologies Automation Services</span>
    </div>
    <div class="scroll_icon">
      <span>scroll</span>
      <img :src="require('assets/mouse.png')" alt="">
    </div>
    <div class="bg">
      <img :src="require('assets/company_img.jpg')" alt="">
    </div>
  </section>

  <!-- full banner -->
  <FullScroll />

  <section class="shortbanner">
    <div class="shortbanner_inner">
      <ShortBox 
        title="사업분야"
        desc="NTAS는 자동화 관련 기술 연구에 끊임없는 노력을 기울이고 있습니다."
        btn="자세히 보기" 
        BG="banner_01.png"
        btnBG=""
        :Page="'/company'"/>
      <ShortBox 
        title="인사제도"
        desc="경력과 성과에 따른 합리적인 평가, 앤타스의 인사제도를 안내합니다."
        btn="자세히 보기" 
        BG="banner_02.png"
        btnBG="btnLine"
        :Page="'/incruit'" />
    </div>
  </section>
  <section class="shortbanner contact">
    <ShortBox 
        desc="앤타스는 고객님의 방문을<br>언제나 환영합니다."
        btn="문의하기" 
        BG="banner_03.png"
        btnBG="btnWh"
        :Page="'/contact'" />
  </section>
</template>

<script>
import Progress from '~/components/Progress.vue'
import ShortBox from '~/components/ShortBox.vue'
import FullScroll from '~/components/FullScroll.vue'
import Mouse from '~/components/Mouse.vue'

export default {
  components: {
    Progress,
    ShortBox,
    FullScroll,
    Mouse
  },
  computed: {
    imageSrc() {
      return require(`assets/${this.BG}`);
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

@keyframes scale {
  0% {
    transform:  scale(1);
  }
  50% {
    transform:  scale(1.3);
  }
  100% {
    transform:  scale(1);
  }
}
@keyframes scroll {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    transform: translateY(-5%);
  }
  100% {
    opacity: 0.5;
  }
}

section.full {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

section.intro {
  .intro_title {
    color: #fff;
    font-size: $font-large;
    position: absolute;
    top: 35%;
    left: 10%;
    font-weight: bold;
    text-align: right;
    z-index: 1;
    text-shadow: 5px 5px 20px #5f5f5f77;
    span {
      font-size: $font-small;
      font-weight: normal;
      padding-top: 1.5vw;
      display: inline-block;
    }
  }
  .scroll_icon {
    position: absolute;
    bottom: 3%;
    right: 50%;
    animation: scroll 1s infinite linear;
    color: #fff;
    z-index: 1;
    img {
      margin: auto;
      padding-top: 10px;
    }
  }
  .bg {
    width: 100%;
    height: 100vh;
    position: relative;
    img {
      position: absolute;
      object-fit: cover;
      bottom: 0;
      animation: scale 100s infinite linear;
      width: auto;
    }
  }
}


/* shortbanner */
section.shortbanner {
  width: 100%;
  .shortbanner_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &.contact{
    &::v-deep {
      .short_box {
        flex: 1;
        p {
          font-size: $font-large;
          color: $wh-color;
          font-weight: 700;
          line-height: 160%;
        }
      }
    }
  }
}
</style>
