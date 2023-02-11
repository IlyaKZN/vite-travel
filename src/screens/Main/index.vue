<template>
  <main class="main-screen">
    <FindGroup/>

    <div class="main-screen__layout">
      <TourismTypesCarousel/>

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
import TourismTypesCarousel from './TourismTypesCarousel.vue';
import TravelDestinationsWidget from '@/components/TravelDestinationsWidget.vue';
import NewsFeed from '@/components/NewsFeed.vue';
import MoreInfoAccordion from '@/components/MoreInfoAccordion.vue';

export default defineComponent({
  name: 'MainScreen',
  components: {
    FindGroup,
    TourismTypesCarousel,
    TravelDestinationsWidget,
    NewsFeed,
    MoreInfoAccordion,
  },
});
</script>

<style lang="scss">
  @import '@/styles/variables.scss';

  .main-screen__layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 925px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .main-screen__find-group-link {
    margin-bottom: 120px;
    height: 166px;
    display: flex;
    background-color: $primaryColor;
    background-image: url('@/assets/plane.svg');
    background-repeat: no-repeat;
    background-position: right;
    color: white;
    text-decoration: none;
    width: 100%;
    font-size: 50px;
    line-height: 62px;
    font-weight: 700;
    border-radius: 35px;
    align-items: center;
    padding-left: 100px;
    box-sizing: border-box;
    filter: drop-shadow(0 6px 5px rgba(0, 0, 0, 0.25));
  }
</style>
