<template>
  <button
  :class="`base-button base-button--${styleType}`"
  :type="type">
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
      styleType: {
        type: String as PropType<'primary' | 'outlined'>,
        default: 'primary',
      },
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .base-button {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;

    box-sizing: border-box;

    width: 100%;
    padding: 15px 20px;

    cursor: pointer;

    border-radius: 18px;
    outline: none;

    transition: all 0.15s;
  }

  .base-button--primary {
    color: #fff;

    background-color: $primaryColor;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
      opacity: 0.85;
    }
  }

  .base-button--outlined {
    color: $primaryColor;

    background-color: transparent;
    border: 1px solid $primaryColor;

    &:hover {
      text-shadow: 0.5px 0.5px 0 rgba(#000, 0.5);

      box-shadow: 0 0 2px rgba(#000, 0.5);
    }
  }
</style>
