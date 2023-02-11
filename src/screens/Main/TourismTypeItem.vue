<template>
  <div class="tourism-type-item">
    <div
    class="tourism-type-item__image"
    :style="{ backgroundImage: `url(${itemData.image})` }"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  type TItemData = {
    image: string,
    name: string,
    link: string,
  }

  export default defineComponent({
    name: 'TourismTypeItem',
    props: {
      itemData: {
        type: Object as PropType<TItemData>,
        required: true,
      },
    },
    setup() {
      return {

      };
    }
  });
</script>

<style lang="scss">
  .tourism-type-item {
    width: 150px;
    height: 200px;
  }

  .tourism-type-item__image {
    width: 100%;
    height: 150px;
  }
</style>