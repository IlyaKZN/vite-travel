<template>
  <div class="travel-destinations-component">
    <h2 class="travel-destinations__title">
      Направления путешествий
    </h2>

    <p class="travel-destinations__description">
      Ознакомьтесь с самыми популярными направлениями путешествий
    </p>

    <div class="travel-destinations__cards-container">
      <div
      class="travel-destinations__main-card"
      :style="{ backgroundImage: `url(${RussiaImg})` }">
        <h3 class="travel-destinations__main-card-name">
          Россия
        </h3>

        <p class="travel-destinations__main-card-description">
          Текст Текст Текст Текст Текст Текст Текст
        </p>
      </div>

      <TravelDestinationCard
      v-for="(card, index) in travelDestinationsData"
      :cardData="card"
      :key="index"/>
    </div>

    <button class="travel-destinations__button">
      Все направления
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TravelDestinationCard from './TravelDestinationCard.vue';
  import RussiaImg from '@/assets/travel-destinations/Russia.png';
  import BaikalImg from '@/assets/travel-destinations/Baikal.png';
  import KareliaImg from '@/assets/travel-destinations/Karelia.png';

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
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .travel-destinations-component {
    width: 100%;
    margin-bottom: 125px;
  }

  .travel-destinations__title {
    font-size: 50px;
    font-weight: 700;
    line-height: 62px;
    color: $primaryColor;

    margin: 0;
  }

  .travel-destinations__description {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;

    margin: 14px 0 30px;
  }

  .travel-destinations__cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
    gap: 34px;

    width: 100%;
    margin-bottom: 48px;
  }

  .travel-destinations__main-card {
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 3;
    justify-content: flex-end;

    padding: 30px 40px;

    cursor: pointer;

    background-size: cover;
    border-radius: 35px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .travel-destinations__main-card-name {
    font-size: 35px;
    font-weight: 600;
    line-height: 43px;
    color: #fff;

    margin: 0 0 8px;
  }

  .travel-destinations__main-card-description {
    font-family: 18px;
    font-size: 15px;
    font-weight: 400;
    color: #fff;

    margin: 0;
  }

  .travel-destinations__button {
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;

    display: block;

    padding: 15px 40px;
    margin: 0 auto;

    cursor: pointer;

    background: none;
    border: 1px solid $primaryColor;
    border-radius: 18px;
    outline: none;
  }
</style>
