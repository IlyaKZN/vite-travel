<template>
  <TheHeader/>

  <router-view/>

  <TheFooter v-if="showFooter"/>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import useUserApi from './core/hooks/useUserApi';
  import useUserStore from './store/useUserStore';
  import useWebSocket from './core/hooks/useWebSocket';

  export default defineComponent({
    name: 'App',
    components: {
      TheHeader,
      TheFooter,
    },
    setup() {
      const route = useRoute();
      const userStore = useUserStore();
      const userApi = useUserApi();
      useWebSocket();

      const showFooter = computed(() => {
        if (['main'].includes(route.name as string)) {
          return true;
        }
        return false;
      });

      onMounted(async () => {
        const user = await userApi.getMe();

        if (!user) return;

        userStore.$patch({ currentUser: user });
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
