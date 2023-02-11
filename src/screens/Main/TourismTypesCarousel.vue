<template>
  <section class="tourism-types-container">
    <h2 class="tourism-types-title">
      Виды туризма
    </h2>

    <CarouselComponent
    :items-data="slidesData"
    :component="TourismTypeItem"/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import CarouselComponent from '@/components/CarouselComponent.vue';
  import TourismTypeItem from './TourismTypeItem.vue';

  export default defineComponent({
    name: 'TourismTypesCarousel',
    components: {
      CarouselComponent,
    },
    setup() {
      const slidesData = [
        {
          image: 'Kayaking.png',
          name: 'Каякинг',
          link: '/test',
        },
        {
          image: 'Mountain.png',
          name: 'Горный',
          link: '/test',
        },
        {
          image: 'OnFoot.png',
          name: 'Пеший',
          link: '/test',
        },
        {
          image: 'Cycling.png',
          name: 'Велотуризм',
          link: '/test',
        },
      ];

      return {
        TourismTypeItem,
        slidesData,
      };
    },
    methods: {
      followLink(link: string) {
        this.$router.push(link);
      },
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables.scss';

  .tourism-types-title {
    margin: 60px 0 30px 15px;
    color: $primaryColor;
    font-size: 50px;
    line-height: 62px;
    font-weight: 700;
  }

  .tourism-types-container {
    margin-bottom: 88px;
    width: 100%;
  }

  .carousel {
    width: 100%;
  }

  .carousel-item {
    width: 100%;
    border-radius: 20px;
  }

  .carousel__slide {
    width: 100%;
    margin-right: 14px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }

  .carousel-item-link {
    display: block;
    height: 266px;
    width: 100%;
    background-color: grey;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    cursor: pointer;
    object-fit: cover;
  }

  .carousel-item-name {
    text-align: start;
    font-size: 18px;
    line-height: 22px;
  }
</style>
