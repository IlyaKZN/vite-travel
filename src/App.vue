<template>
  <TheHeader/>

  <router-view/>

  <TheFooter v-if="showFooter"/>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';

  export default defineComponent({
    name: 'App',
    components: {
      TheHeader,
      TheFooter,
    },
    setup() {
      const route = useRoute();

      const showFooter = computed(() => {
        if (['main'].includes(route.name as string)) {
          return true;
        }
        return false;
      });

      return {
        showFooter,
      };
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
