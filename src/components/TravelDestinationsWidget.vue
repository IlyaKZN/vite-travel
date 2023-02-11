<template>
  <section class="container">
    <h2 class="title">
      Направления путешествий
    </h2>

    <p class="description">
      Ознакомьтесь с самыми популярными направлениями путешествий
    </p>

    <div class="cards-container">
      <div
      class="main-card"
      :style="{ backgroundImage: `url(${RussiaImg})` }">
        <h3 class="main-card-name">
          Россия
        </h3>

        <p class="main-card-description">
          Текст Текст Текст Текст Текст Текст Текст
        </p>
      </div>

      <TravelDestinationCard
      v-for="(card, index) in travelDestinationsData"
      :key="index"
      :card-data="card"/>
    </div>

    <button class="button">
      Все направления
    </button>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TravelDestinationCard from './TravelDestinationCard.vue';
  import RussiaImg from '../assets/travel-destinations/Russia.png';
  import BaikalImg from '../assets/travel-destinations/Baikal.png';
  import KareliaImg from '../assets/travel-destinations/Karelia.png';

  export default defineComponent({
    name: 'TravelDestinationsWidget',
    components: { TravelDestinationCard },
    setup() {
      const travelDestinationsData = [
        {
          name: 'Байкал',
          description: 'Огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире',
          image: BaikalImg,
        },
        {
          name: 'Карелия',
          description: 'Уникальный по своей природе, культуре и истории регион России, который имеет самую протяженную границу с Европейским союзом',
          image: KareliaImg,
        },
      ];

      return {
        travelDestinationsData,
        RussiaImg,
      };
    }
  });
</script>

<style lang="scss">
  @import '@/styles/variables.scss';

  .container {
    width: 100%;
    margin-bottom: 125px;
  }

  .title {
    margin: 0;
    color: $primaryColor;
    font-size: 50px;
    line-height: 62px;
    font-weight: 700;
  }

  .description {
    margin: 14px 0 30px 0;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }

  .cards-container {
    margin-bottom: 48px;
    width: 100%;
    display: grid;
    gap: 34px;
    grid-auto-rows: 300px;
    grid-template-columns: 1fr 1fr;
  }

  .main-card {
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 30px 40px;
    background-size: cover;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .main-card-name {
    margin: 0 0 8px 0;
    font-size: 35px;
    line-height: 43px;
    color: white;
    font-weight: 600;
  }

  .main-card-description {
    margin: 0;
    font-size: 15px;
    font-family: 18px;
    color: white;
    font-weight: 400;
  }

  .button {
    margin: 0 auto;
    padding: 15px 40px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    background: none;
    border: 1px solid $primaryColor;
    border-radius: 18px;
    font-family: Inter, sans-serif;
    outline: none;
    cursor: pointer;
    display: block;
  }
</style>
