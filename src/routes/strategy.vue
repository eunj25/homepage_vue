<template>
  <section class="sub_page strategy">
    <Banner
      BG="sub_banner_02.png"/>
    <Menu :menuItems="strategyMenu" @scroll-to-section="goToSection"/>

    <div class="contents strategy_inner">

      <!-- rpa -->
      <div class="content rpa" ref="section1">
        <Headline
          title= "RPA"
          description= "Digital Transformation 시대"
          paragraph= "로봇이 많은 양의 반복적인 업무를 수행하는 동안 직원은 혁신, 협업, 창조, 고객과의 상호작용 등 더 창의적이고 가치있는 업무에 집중할 수 있습니다. <br> 이를 통해 기업의 생산성, 효율성 및 복원력이 높아집니다. RPA는 일의 역사를 다시 쓰고 있습니다."
        />
        <div class="content_inner reveal reveal_BTT">
          <div class="title">Benefits</div>
          <div class="tab_menu">
            <div class="tab_btn">
              <span
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ active: activeTab === tab.id }"
                @click="changeTab(tab.id)"
                :data-text="tab.id">
                {{ tab.text }}
              </span>
            </div>
            <div 
              class="tab_item"
              v-for="tab in tabs"
              :key="tab.id"
              :class="{ active: activeTab === tab.id }"
              :id="tab.id">
              <h2>{{ tab.text }}</h2>
              <p>{{ tab.content }}</p>
            </div>    
          </div>
        </div>
        <div class="content_inner reveal reveal_BTT">
          <div class="title">산업별 기술 적용 사례</div>
          <div class="items_box">
            <div 
              class="item"
              v-for="(industry, index) in industries"
              :key="index">
              <h1>{{ industry.title }}</h1>
              <ul>
                <li 
                  v-for="(example, exampleIndex) in industry.examples"
                  :key="exampleIndex"> 
                  {{ example }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Uipath -->
      <div class="content Uipath" ref="section2">

        <Headline
          title="UiPath"
          description="AI 기반 업무 자동화 솔루션, UiPath RPA를 통해 놀라운 업무 혁신을 경험해보세요."
          paragraph="UiPath RPA는 업무 자동화 분야를 선도하는 최고의 RPA 솔루션입니다. 소프트웨어 로봇 또는 봇(Bot)이 비즈니스 프로세스 내에서 단순, 반복, 규칙적인 업무를 자동화 합니다. RPA 봇(Bot)은 사람보다 훨씬 빠르게 업무를 수행하고 휴먼 에러를 최소화 하여 보다 정확한 결과를 도출합니다. 따라서 직원들은 인간의 기술이
          필요한 전략적이고 창의적인 업무에 집중할 수 있습니다. 또한 AI 기술과 연계한 지능형 Bot은 더욱 복잡한 업무를 자동화하여 기업에 더 많은 가치를 제공합니다.
          <br><br> 기업의 생산성 향상 뿐만 아니라 기업 문화와 고객 가치에 혁신을 일으키는 UiPath RPA, 지금 바로 경험해보세요."
        />

        <div class="content_inner reveal reveal_BTT">
          <div class="title">Benefits</div>
          <div class="benefits_box">
            <BenefitsItem :benefits="benefitsData"/>
          </div>

          <div class="video reveal reveal_BTT">
            <div>
              <div class="heading">
                <h3>UiPath RPA를 통한 비즈니스 프로세스 혁신</h3>
              </div>
            </div>
            <video autoplay loop poster="">
              <source :src="videoSource" type="video">
            </video>
          </div>
        </div>

        <div class="content_inner reveal reveal_BTT">
          <div class="title">Architecture</div>
          <div class="photo">
            <!-- <img :src="require('assets/architecture.svg')" alt=""> -->
          </div>
        </div>

      </div>

      <!-- ai-Uipath -->
      <div class="content ai" ref="section3">

        <Headline
          span="인공지능 기술융합"
          title="AI-Powered UiPath"
          description="드래그 앤 드롭으로 손쉽게 AI 기술을 적용해보세요."
          paragraph="가장 일반적인 AI 자동화 사용 사례를 통해 수십 개의 ML 모델을 사전 구축했습니다.<br>
            사전 구축된 모델, AI 솔루션 템플릿, 다양한 구현 옵션, 드래그 앤 드롭 인터페이스를 통해 보다 복잡한 업무까지 자동화 영역을 확대할 수 있습니다."
        />

        <div class="content_inner reveal reveal_BTT">
          <div class="title">Benefits</div>
          <div class="benefits_box">
            <BenefitsItem :benefits="benefitsData02"/>
          </div>
        </div>
        
        <div class="content_inner reveal reveal_BTT">
          <div class="title">Use Cases</div>
          <div class="case_box">
            <div>
              <img :src="require('assets/case01.png')" alt="">
              <span>AI 기술 접목 케이스 1</span>
            </div>
            <div>
              <img :src="require('assets/case02.png')" alt="">
              <span>AI 기술 접목 케이스 2</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- services -->
      <div class="content services" ref="section4">
        <div class="headline reveal reveal_BTT">
          <img :src="require('assets/services_text.png')" alt="">
          <p>NTAS는 인지 컴퓨팅 및 로봇 프로세스 자동화 기술을 기반으로
            혁신적인 성능 향상을 이끌어내는 서비스 플랫폼을 개발합니다.</p>
          </div>
          
          <div class="content_inner reveal reveal_BTT">
            <div class="title">Services</div>
            <div class="items_box">
              <ServiceItem :services="services"/>
          </div>
        </div>

        <div class="content_inner reveal reveal_BTT">
          <div class="title">other Services</div>
          <div class="items_box">
            <div class="items_box">
              <ServiceItem :services="otherServices"/>

            <!-- <service-item
              v-for="(service, index) in otherServices"
              :key="index"
              :platform="service.platform"
              :title="service.title"
              :description="service.description"
              :filePath="service.filePath">              
            </service-item> -->
          </div>
          </div>
        </div>
      </div>

      <!-- R&D -->
      <div class="content RD" ref="section5">
        <Headline
          title="R&D"
          description="NTAS 핵심요소기술 연구개발"
        />
        <div class="table_box reveal reveal_BTT">
          <table>
            <thead class="heading">
              <tr>
                <th style="width: 18%;">핵심 기술</th>
                <th>현재수준</th>
                <th style="width: 30%;">최종목표</th>
                <th style="width: 10%;">연계 R&D 유형</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(technology, index) in technologies"
                :key="index">
                <td>{{ technology.core }}</td>
                <td>{{ technology.currentLevel }}</td>
                <td>{{ technology.finalGoal }}</td>
                <td>{{ technology.linkedRnD }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Banner from '~/components/Banner'
import Menu from '~/components/Menu'
import Headline from '~/components/Headline'
import BenefitsItem from '~/components/BenefitsItem'
import ServiceItem from '~/components/ServiceItem'
import videoSource from '../assets/UiPath.mp4'

export default {
  components: {
    Banner,
    Menu,
    Headline,
    BenefitsItem,
    ServiceItem
    // 'service-item': ServiceItem
  },
  data() {
    return {
      strategyMenu: [
        { ref: 'section1', text: 'RPA'},
        { ref: 'section2', text: 'UiPath'},
        { ref: 'section3', text: '인공지능 기술융합'},
        { ref: 'section4', text: 'Services'},
        { ref: 'section5', text: 'R&D'}
      ],
      videoSource,
      industries: [
        {
          title: "금융",
          examples: [
            "신용등급변경 관리",
            "위험도 분석",
            "거래 예측",
            "고객 분석",
            "사기 탐지"
          ]
        },
        {
          title: "유통 및 전자상거래",
          examples: [
            "제품 추천",
            "가격 최적화",
            "수요 예측",
            "고객 세분화",
            "사기 탐지",
            "고객 서비스"
          ]
        },
        {
          title: "항공 및 여행",
          examples: [
            "수요 예측",
            "가격 최적화",
            "고객 경험",
            "고객 세분화"
          ]
        },
        {
          title: "마케팅 및 세일즈",
          examples: [
            "해지 율 분석",
            "가격최적화",
            "고객 세분화",
            "고객 LTV 분석",
            "상향 판매 분석",
            "고객 정서 분석"
          ]
        },
        {
          title: "병원 및 생명과학",
          examples: [
            "위험에 처한 환자 신원 확인",
            "청구 사기",
            "보험 비용 최적화",
            "진단 정확도 향상",
            "맞춤 의학",
            "새로운 분자 발견"
          ]
        },
        {
          title: "미디어 및 엔터테인먼트",
          examples: [
            "내용 분석",
            "콘텐츠 추천",
            "콘텐츠 메타 태그 지정"
          ]
        }
      ],
      activeTab: 'tab01',
      tabs: [
        { id: 'tab01', text: '디지털 혁신 가속', content: '전 세계 경영진 중 63%는 RPA가 디지털 혁신의 핵심 요소라고 응답했습니다.' },
        { id: 'tab02', text: '비용 절감', content: '내용입니다.' },
        { id: 'tab03', text: '복원력 향상', content: '내용입니다.' },
        { id: 'tab04', text: '정확도 향상', content: '내용입니다.' },
        { id: 'tab05', text: '규정 준수 향상', content: '내용입니다.' },
        { id: 'tab06', text: '생산성 향상', content: '내용입니다.' },
        { id: 'tab07', text: '직원의 가치 상승', content: '내용입니다.' },
        { id: 'tab08', text: '직원의 만족도 향상', content: '내용입니다.' }
      ],
      benefitsData: [
        {
          title: 'E2E Intelligent Automation 통한 <br>업무 효율성 향상 ',
          desc: 'RPA 봇은 반복적인 규칙 기반 업무에서 기업의 E2E 업무 프로세스 까지 기업의 전반적인 업무를 자동화 합니다. 이는 업무 처리 시간, 오류, 비용 등을 감소시키는 반면에 직원 생산성, 데이터의 정확성 및 일관성, 고객 경험 등을 향상시켜 업무 효율성을 극대화합니다.'
        },
        {
          title: '중앙 집중형 플랫폼을 통한 간편한 봇 운영',
          desc: 'UiPath Orchestrator를 통해 자동화 업무를 통합 관리합니다. 소스 배포, 업무 처리 예약, 모니터링 등의 기능을 활용하여 봇에 업무를 효율적으로 분배하고 정확히 업무를 수행하게 함으로써 업무 품질이 개선됩니다.'
        },
        {
          title: '지속적인 자동화 역량 강화',
          desc: ' UiPath RPA는 API, 웹 서비스 또는 기타 통합 방법을 사용하여 광범위한 외부 시스템, 애플리케이션 및 데이터베이스와 통합할 수 있습니다. 또한 AI Center를 통해 주기적으로 새 모델을 추가함에 따라 자동화 업무 영역을 계속해서 확장합니다.'
        },
        {
          title: 'AI 지능화 봇으로 자동화 영역 확장',
          desc: 'M/L, NLP, Computer Vision, Analytics 등 다양한 AI 기술을 접목하여 더욱 복잡한 업무를 자동화 하고, 이를 기반으로 비즈니스 인사이트를 도출합니다.'
        }
      ],
      benefitsData02: [
        {
          title: '즉시 사용 가능한 사전 구축 모델',
          desc: '문서, 언어, 이미지 또는 테이블 형식 데이터를 로봇이 이해할 수 있게 해주는 25개 이상의 사전 구축된 모델을 제공합니다.'
        },
        {
          title: '드래그 앤 드롭으로 AI 기술 적용',
          desc: '원하는 모델을 찾아 드래그 앤 드롭만 하면 비즈니스 프로세스에 ML 기술을 적용할 수 있습니다.'
        },
        {
          title: '비즈니스 맞춤형 모델 생성',
          desc: '데이터 및 비즈니스 요구사항에 맞게 모델을 조정해야 하는 경우 편집하여 맞춤형 모델을 구성할 수 있습니다.'
        },
        {
          title: '지속적으로 업데이트 되는 모델',
          desc: '기존 모델의 성능 개선 뿐만 아니라 지속적으로 새 모델을 추가합니다.'
        }
      ],
      services: [
        {
          platform: 'PLATFORM 01',
          title: '지능형 가상 비서 플랫폼',
          description: '국민, 기업, 공공기관 등의 업무 프로세스에 시간-비용-노동력 절감의 혁신을 가능하게 하는 클라우드 기반의 AI-자동화 SW 문화 조성 채널 플랫폼',
          filePath: '../file/test01.pdf'
        },
        {
          platform: 'PLATFORM 02',
          title: '로보어드바이저 플랫폼',
          description: '인간의 간섭을 최소한으로 한 금융 서비스 및 투자 관리를 온라인으로 제공하는 투자 자문(financial adviser) 서비스 플랫폼',
          filePath: '../file/test02.png'
        },
        {
          platform: 'PLATFORM 03',
          title: '초자동화 플랫폼',
          description: 'AI 기반 의사 결정을 목표로 하는 로봇 프로세스 자동화(AI-Powered RPA), 지능형 비즈니스 관리 소프트웨어(iBPMS) 및 AI 기술 도구 지원 플랫폼'
        },
      ],
      otherServices: [
        {
          platform: 'PLATFORM 01',
          title: 'Product Services and Training',
          description: '자동화 서비스 구축 및 지속적인 기술 업그레이를 통해 생산성을 높일 수 있습니다. 또한 자동화 기술 교육을 통해 자동화 솔루션의 가치를 극대화할 수 있습니다.'
        },
        {
          platform: 'PLATFORM 02',
          title: 'Managed Services',
          description: '자동화 서비스 운영 전문가의 도움을 받아 일상적인 업무 관리 부담을 덜고 환경의 취약 영역을 정확히 파악할 수 있습니다.'
        },
        {
          platform: 'PLATFORM 03',
          title: 'Consulting',
          description: '업무 자동화 관련 전문 지식이 부족한 경우 앤타스의 컨설턴트가 비즈니스 프로세스에서 자동화 업무 가능 영역을 파악하고 수행할 수 있도록 지원합니다.'
        },
      ],
      technologies: [
        { 
          core: '인공지능형 자동화 프로그램', 
          currentLevel: '업무 프로세스 자동화를 위한 규칙기반 기술개발', 
          finalGoal: '업무 프로세스 자동화를 위한 규칙기반 기술개발.pdf', 
          linkedRnD: 'NTAS 기술혁신' 
        },
        { 
          core: '이미지 인식기술과 OCR', 
          currentLevel: 'PDF, 이미지 등의 형태로 생성된 문서에 포함된 텍스트의 인식 정확도 향상', 
          finalGoal: '-', 
          linkedRnD: '상용 연계' 
        },
        { 
          core: '프로세스 분석 시스템', 
          currentLevel: '단순 반복 업무 프로세스 패턴 분석을 통한 업무 프로세스 완전 자동화', 
          finalGoal: '-', 
          linkedRnD: 'NTAS 기술혁신' 
        },
        { 
          core: '어플리케이션 객체인식 및 추적', 
          currentLevel: '사용자 친화적 사용자 인터페이스 및 사용자 경험 디자인 개발', 
          finalGoal: '업무 프로세스 전반에 적용 가능한 UI 개발.pdf', 
          linkedRnD: '상용 연계' 
        },
        {
          core: '로봇 프로세스 자동화', 
          currentLevel: '업무 프로세스 수행을 통해 스스로 학습하여 향상된 업무 능력을 적용하는 자가 학습 기능 구현', 
          finalGoal: '업무 프로세스 자가평가 기술 개발.pdf', 
          linkedRnD: '상용 연계'
        }
      ]
    }
  },
  methods: {
    goToSection(sectionRef) {
      const section = this.$refs[sectionRef];
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    },
    changeTab(tabId) {
      this.activeTab = tabId;
    }
  },
  mounted() {
    // 페이지 로드 시에 배너 텍스트 업데이트
    this.$store.dispatch('banner/updateBannerText', '사업분야');
    this.$store.dispatch('banner/updateBannerDesc', '앤타스는 고객님의 방문을 언제나 환영합니다.');
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.content_inner {
  padding-top: 9.60vw;
  .items_box h1 {
    font-size: $font-Regular;
    font-weight: bold;
    line-height: 1.5em;
    ul {
      list-style-type: disc;
      padding-left: 20px;
    }
  }
}
.rpa {
  .headline {
    margin-top: 0;
  }
  .items_box .item {
    min-width: calc(100%/4);
    height: 350px;
    padding: 2vw 8vw !important;
    flex-wrap: wrap !important;
  }
}
.Uipath {
  .video {
    margin: auto;
    height: calc(100vh/1.9);
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    margin-top: 2vw;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #111111a2;
    }
    .heading {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .photo {
      width: 70%;
      margin: auto;
    }
  }
}
.ai .case_box {
  @include between;
  gap: 4vw;
}
.ai .case_box > div {
  flex: 1;
  text-align: center;
  overflow: hidden;
  img {
    border-radius: 10px;
    margin-bottom: 1vw;
  }
}
.services {
  .headline {
    display: flex;
    flex-direction: column;
    // justify-content: start;
    // align-items: end;
    p {
      color: $grey-800;
      width: 30%;
    }
  }
}
.RD {
  margin-bottom: 0 !important;
}

</style>