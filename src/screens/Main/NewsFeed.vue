<template>
  <section class="news-feed">
    <h2 class="news-feed__title">
      Лента событий
    </h2>
    <p class="news-feed__description">
      Собрали для Вас самые интересные истории за последнее время
    </p>
    <Carousel :itemsToShow="3">
      <Slide
      v-for="(slide, index) in slidesData"
      :key="index">
        <div class="news-feed__carousel-item">
          <img
          @click="followLink(slide.link)"
          @keypress="followLink(slide.link)"
          alt="image"
          class="news-feed__carousel-item-link"
          :src="slide.image">
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {
    Carousel, Slide,
  } from 'vue3-carousel';
  import slideImg1 from '@/assets/feed/feed1.png';
  import slideImg2 from '@/assets/feed/feed2.png';
  import slideImg3 from '@/assets/feed/feed3.png';

  export default defineComponent({
    name: 'NewsFeed',
    components: {
      Carousel,
      Slide,
    },
    methods: {
      followLink(link: string) {
        this.$router.push(link).catch(console.error);
      },
    },
    data() {
      return {
        slidesData: [
          {
            image: slideImg1,
            link: '/test',
          },
          {
            image: slideImg2,
            link: '/test',
          },
          {
            image: slideImg3,
            link: '/test',
          },
          {
            image: slideImg1,
            link: '/test',
          },
          {
            image: slideImg2,
            link: '/test',
          },
          {
            image: slideImg3,
            link: '/test',
          },
        ],
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .news-feed {
    margin-bottom: 102px;
    width: 100%;
  }

  .news-feed__title {
    font-size: 50px;
    font-weight: 700;
    line-height: 62px;
    color: $primaryColor;

    margin: 0 0 8px;
  }

  .news-feed__description {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;

    margin: 0 0 47px;
  }

  .carousel {
    width: 100%;
  }

  .carousel-item {
    width: 100%;

    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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

  .news-feed__carousel-item-link {
    display: block;

    width: 100%;
    height: 428px;

    cursor: pointer;

    background-color: rgb(128, 128, 128);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    object-fit: cover;
  }

  .news-feed__carousel-item-name {
    text-align: start;
    font-size: 18px;
    line-height: 22px;
  }
</style>
