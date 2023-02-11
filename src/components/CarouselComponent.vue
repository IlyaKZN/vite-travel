<template>
  <div class="carousel">
    <div
    ref="carouselList"
    class="carousel__item-list"
    :class="{ dragging: isDragging }"
    name="carouselList"
    @mousedown="isDragging = true"
    @mousemove="dragging"
    @mouseup="isDragging = false">
      <component
      :is="component"
      v-for="(item, index) in itemsData"
      :key="index"
      class="carousel__item"
      :item-data="item"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, DefineComponent, ref, PropType } from 'vue';

  export default defineComponent({
    name: 'CarouselComponent',
    props: {
      itemsData: {
        type: Array,
        required: true,
      },
      component: {
        type: Object as PropType<DefineComponent>,
        required: true,
      }
    },
    setup() {
      const carouselList = ref<HTMLDivElement | null>(null);
      const isDragging = ref(false);

      function dragging (event: MouseEvent) {
          if(!isDragging.value || !carouselList.value) return;
          carouselList.value.scrollLeft -= event.movementX;
      }

      return {
        dragging,
        isDragging,
        carouselList,
      };
    }
  });
</script>

<style lang="scss">
.carousel {
  position: relative;
  overflow-x: hidden;
  width: 100%;
  background: #fff;
  border-radius: 13px;
}

.carousel__item-list {
  display: flex;
  width: 100%;
  gap: 12px;
  list-style: none;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.carousel__item-list.dragging {
  scroll-behavior: auto;
  cursor: grab;
}
.carousel__item {
  cursor: pointer;
  font-size: 1.18rem;
  white-space: nowrap;
  background: #f5f4fd;
  min-width: 200px;
  border-radius: 30px;
  border: 1px solid #d8d5f2;
}

.dragging .carousel__item {
  user-select: none;
  pointer-events: none;
}
</style>