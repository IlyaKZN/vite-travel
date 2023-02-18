<template>
  <TheHeader/>

  <router-view/>

  <TheFooter/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';

  export default defineComponent({
    name: 'App',
    components: {
      TheHeader,
      TheFooter,
    },
  });

</script>

<style lang="scss">
  @import url('./vendor/fonts/index.css');

  body {
    font-family: Inter, sans-serif;

    margin: 0;
  }

</style>
