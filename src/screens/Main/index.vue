<template>
  <main class="main-screen">
    <FindGroup/>

    <div class="main-screen__layout">
      <CarouselComponent :slidesData="tourismTypesData"/>

      <TravelDestinationsWidget/>

      <RouterLink
      class="main-screen__find-group-link"
      to="/test">
        Найти группу
      </RouterLink>

      <NewsFeed/>

      <MoreInfoAccordion/>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import FindGroup from './FindGroup.vue';
  import TravelDestinationsWidget from './TravelDestinationsWidget.vue';
  import NewsFeed from './NewsFeed.vue';
  import MoreInfoAccordion from './MoreInfoAccordion.vue';
  import CarouselComponent from '@/components/CarouselComponent.vue';
  import cyclingImg from '@/assets/tourism-types/cycling.png';
  import kayakingImg from '@/assets/tourism-types/kayaking.png';
  import mountainImg from '@/assets/tourism-types/mountain.png';
  import onFootImg from '@/assets/tourism-types/onFoot.png';

  export default defineComponent({
    name: 'MainScreen',
    components: {
      FindGroup,
      TravelDestinationsWidget,
      NewsFeed,
      MoreInfoAccordion,
      CarouselComponent,
    },
    setup() {
      const tourismTypesData = [
        {
          image: cyclingImg,
          name: 'Каякинг',
          link: '/test',
        },
        {
          image: kayakingImg,
          name: 'Горный',
          link: '/test',
        },
        {
          image: mountainImg,
          name: 'Пеший',
          link: '/test',
        },
        {
          image: onFootImg,
          name: 'Велотуризм',
          link: '/test',
        },
      ];

      return {
        tourismTypesData,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .main-screen__layout {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 925px;
    margin: 0 auto;
  }

  .main-screen__find-group-link {
    font-size: 50px;
    font-weight: 700;
    line-height: 62px;
    color: #fff;
    text-decoration: none;

    box-sizing: border-box;
    display: flex;
    align-items: center;

    width: 100%;
    height: 166px;
    padding-left: 100px;
    margin-bottom: 120px;

    background-color: $primaryColor;
    background-image: url('@/assets/plane.svg');
    filter: drop-shadow(0 6px 5px rgba(0, 0, 0, 0.25));
    background-repeat: no-repeat;
    background-position: right;
    border-radius: 35px;
  }
</style>
