<template>
  <section class="manager-profile-screen">
    <ProfileCard/>

    <div class="manager-profile__feed">
      <h3>Лента событий</h3>
    </div>
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
    display: flex;
    gap: 19px;

    width: 100%;

    background-color: $color-screen-background;
  }

  .manager-profile__feed {
    width: 100%;
    max-width: 756px;
    min-height: 742px;
    padding: 40px;

    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 1px 20px 0 #00000008;
  }
</style>
