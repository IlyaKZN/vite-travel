<template>
  <span :class="[`material-icons-${type}`, {'material-icons': type === 'filled'}]">
    {{ icon }}
  </span>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'BaseIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
      type: {
        type: String as PropType<'outlined' | 'filled' | 'rounded' | 'sharp' | 'two-tone'>,
        default: 'filled',
      },
    },
  });
</script>

<style lang="scss">
</style>
