<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'BaseButton',
    props: {
      type: {
        type: String as PropType<'button' | 'submit' | 'reset'>,
        default: 'button',
      },
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .button {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;

    box-sizing: border-box;

    width: 100%;
    padding: 15px 20px;

    cursor: pointer;

    background-color: $primaryColor;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    outline: none;
  }
</style>
