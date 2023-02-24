<template>
  <section class="users-screen">
    <div class="users-screen__content">
      <BaseInput
      v-model="searchValue"
      name="search"
      placeholder="Поиск"/>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import BaseInput from '@/components/ui-kit/Input.vue';

  export default defineComponent({
    name: 'UsersScreen',
    components: {
      BaseInput,
    },
    setup() {
      const searchValue = ref('');

      return {
        searchValue,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .users-screen {
    width: 100%;
    padding: 20px 0 34px;

    background-color: $color-screen-background;
  }

  .users-screen__content {
    box-sizing: border-box;
    display: flex;
    gap: 20px;

    width: 100%;
    max-width: 1080px;
    padding: 0 40px;
    margin: 0 auto;
  }
</style>
