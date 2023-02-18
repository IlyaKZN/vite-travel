<template>
  <div class="carousel-container">
    <h2 class="carousel__title">
      Виды туризма
    </h2>
    <Carousel :itemsToShow="3.7">
      <Slide
      v-for="slide in slidesData"
      :key="slide.name">
        <div class="carousel__item">
          <img
          @click="followLink(slide.link)"
          @keypress="followLink(slide.link)"
          alt="image"
          class="carousel__item-link"
          :src="slide.image">
          <p class="carousel__item-name">
            {{ slide.name }}
          </p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import {
    Carousel, Slide,
  } from 'vue3-carousel';

  type TSlidesData = {
    image: string,
    name: string,
    link: string,
  }[];

  export default defineComponent({
    name: 'CarouselComponent',
    components: {
      Carousel,
      Slide,
    },
    props: {
      slidesData: {
        type: Array as PropType<TSlidesData>,
        default: () => [],
      },
    },
    methods: {
      followLink(link: string) {
        this.$router.push(link).catch(console.error);
      },
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .carousel-container {
    margin-bottom: 88px;
    width: 100%;
  }

  .carousel__title {
    font-size: 50px;
    font-weight: 700;
    line-height: 62px;
    color: $primaryColor;

    margin: 60px 0 30px 15px;
  }

  .carousel {
    width: 100%;
  }

  .carousel__item {
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

    border: 5px solid #fff;
  }

  .carousel__item-link {
    display: block;

    width: 100%;
    height: 266px;

    cursor: pointer;

    background-color: rgb(128, 128, 128);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    object-fit: cover;
  }

  .carousel__item-name {
    text-align: start;
    font-size: 18px;
    line-height: 22px;
  }
</style>
