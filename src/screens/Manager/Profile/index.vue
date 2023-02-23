<template>
  <section class="manager-profile-screen">
    <ProfileCard/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ProfileCard from './Card.vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'ProfileScreen',
    components: {
      ProfileCard,
    },
    setup() {
      const route = useRoute();

      return {
        route,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .manager-profile-screen {
    width: 100%;

    background-color: $color-screen-background;
  }
</style>
