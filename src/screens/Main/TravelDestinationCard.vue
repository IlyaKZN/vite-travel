<template>
  <div
  class="travel-destination-card"
  :style="{backgroundImage: `url(${cardData.image})`}">
    <h3 class="travel-destination-card__name">
      {{ cardData.name }}
    </h3>
    <p class="travel-destination-card__description">
      {{ cardData.description }}
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  type TCard = {
    name: string;
    description: string;
    image: string;
  };

  export default defineComponent({
    name: 'TravelDestinationCard',
    props: {
      cardData: {
        type: Object as PropType<TCard>,
        required: true,
      },
    },
  });
</script>

<style lang="scss">
  .travel-destination-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 30px 40px;

    cursor: pointer;

    background-size: cover;
    border-radius: 35px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .travel-destination-card__name {
    font-size: 35px;
    font-weight: 600;
    line-height: 43px;
    color: #fff;

    margin: 0 0 8px;
  }

  .travel-destination-card__description {
    font-family: 18px;
    font-size: 15px;
    font-weight: 400;
    color: #fff;

    margin: 0;
  }
</style>
