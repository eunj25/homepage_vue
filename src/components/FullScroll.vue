<template>
  <div class="full_box">
    <div class="scroll_box" ref="scrollBox">
      <div class="home_title">
        <span>BIZ STRATEGY</span>
        <h1>
          NTAS는 지속적인 수익 확보가 가능한 핵심 사업을 발굴하고 <br>
          독자적인 기술을 접목한 다양한 서비스 상용화를 통해 기술적인 우위 실현합니다.
        </h1>
        <nav id="parallax__nav" ref="nav">
          <ul>
            <li><a class="active" :class="{ active: activeLink === 'part01' }" @click="scrollTo('part01')">01</a></li>
            <li><a :class="{ active: activeLink === 'part02' }" @click="scrollTo('part02')">02</a></li>
            <li><a :class="{ active: activeLink === 'part03' }" @click="scrollTo('part03')">03</a></li>
            <li><a :class="{ active: activeLink === 'part04' }" @click="scrollTo('part04')">04</a></li>
          </ul>
        </nav>
      </div>

      <section 
        v-for="(section, index) in sections" 
        :key="index" 
        :id="'part0' + (index + 1)" 
        class="full banner">
        <div class="home_desc">
          <div class="icon">
            <img :src="require(`assets/icon0${index + 1}.png`)" alt="">
          </div>
          <div class="desc">
            {{ section.desc }}
          </div>
        </div>
        <img :src="require(`assets/main_img_0${index + 1}.png`)" class="BG" alt="">
      </section>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  data() {
    return {
      activeLink: 'part01',
      sections: [
        {
          desc: "우리가 제공하는 기술을 통해 고객이 이루고자 하는 본연의 가치를 실현할 수 있도록 지원" 
        },
        {
          desc: "디지털 환경의 변화에 따른 비즈니스 프로세스 혁신 가속화를 위한 ‘4차 산업 혁신 전략 기술 제품 및 서비스’ 제공" 
        },
        { 
          desc: "No.1 초자동화(Hyper Automation) 전문 기술 서비스 기업" 
        },
        { 
          desc: "초자동화 기술을 지원하는 자체 서비스 플랫폼 보유 사업자" 
        }
      ]
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = this.$refs.scrollBox;
    const navItems = this.$refs.nav.querySelectorAll('a');
    const sections = this.$el.querySelectorAll('.full.banner');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        start: 'top top',
        end: () => `+=${horizontal.offsetWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        markers: false,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

/* full_box */
.full_box {
  overflow: hidden;
  position: relative;
  .scroll_box {
    position: relative;
    transform: rotate(0);
    width: 400%;
    display: flex;
    flex-wrap: nowrap;
    img {
      height: 100%
    }
    .home_title {
      position: absolute;
      top: 20%;
      left: 3%;
      z-index: 999;
      color: $wh-color;
      h1 {
        font-size: 2.8rem;
        line-height: 1.5em;
      }
      ul {
        display: flex;
        gap: 2.5vw;
        li {
          padding-top: 1.5vw;
          a {
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px; 
            height: 30px;
            text-align: center;
            &.active {
              background: #fff;
              color: #000;
              border-radius: 50%;
            }
          }
        }
      }
    }
    .full.banner {
      width: 100%;
      color: $wh-color;
      transform: rotate(0);
      transition: 0.25s;
      .BG {
        height: 100vh
      }
      .home_desc {
        position: absolute;
        bottom: 10%;
        left: 12%;
        border-bottom: 1px solid #f9f9f980;
        padding: 48px 30px;
        width: 75%;
        font-size: $font-medium;
        line-height: 1.5em;
        z-index: 1;
        .desc {
          font-weight: 300;
        }
        .icon {
          width: 60px;
          margin-bottom: 1vw;
        }
      }
    }
  }
}

</style>
