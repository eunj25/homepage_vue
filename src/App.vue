<template>
  <!-- 동일하게 출력됨 -->
  <HomeHeader v-if="currentHeader === 'HOME'" />  
  <Header v-else />  
  <!--  페이지가 바뀌는 건 해당 태그에서 출력이 됨  -->
  <RouterView /> 
  <Gototop />
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import HomeHeader from '~/components/HomeHeader'
import Footer from '~/components/Footer'
import Gototop from '~/components/Gototop'

export default {
  components: {
    Header,
    HomeHeader,
    Footer,
    Gototop
  },
  data() {
    return {
      currentHeader: 'HOME' // 기본적으로 표시할 헤더
    }
  },
  watch: {
    $route(to) {
      // console.log('Route name:', to.fullPath);
      if (to.fullPath === '/') {
        this.currentHeader = 'HOME'
      } 
      else {
        this.currentHeader = 'SUB'
      }
      // console.log('currentHeader:', this.currentHeader);
    }
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>