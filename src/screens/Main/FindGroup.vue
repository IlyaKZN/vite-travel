<template>
  <section class="find-group">
    <h1 class="find-group__title">
      Новые люди - новые места
    </h1>

    <p class="find-group__description">
      легкий способ путешествовать и<br>
      заводить новые знакомства
    </p>

    <form class="find-group__form">
      <label
      class="find-group__input-label"
      for="#starting-point-input">Откуда</label>

      <input
      class="find-group__input"
      label="Откуда"
      type="text"
      id="#starting-point-input">

      <label
      class="find-group__input-label"
      for="#finishing-point-input">Куда</label>

      <input
      class="find-group__input"
      label="Куда"
      type="text"
      id="#finishing-point-input">

      <label
      class="find-group__input-label"
      for="#date-input">Когда</label>

      <input
      class="find-group__input"
      label="Когда"
      type="text"
      id="#date-input">

      <BaseButton
      @click="searchGroup"
      class="find-group__button"
      type="submit">
        Найти группу
      </BaseButton>
    </form>

    <RouterLink
    class="find-group__reference-link"
    to="/">
      Как это работает?
    </RouterLink>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BaseButton from '@/components/ui-kit/Button.vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'FindGroupWidget',
    components: {
      BaseButton,
    },
    setup() {
      const router = useRouter();

      function searchGroup() {
        router.push({ name: 'manager-groups' }).catch(() => {});
      }

      return {
        searchGroup,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables.scss';

  .find-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 80px);

    background-image: url('@/assets/MainPageGradient.svg');
    background-size: cover;
  }

  .find-group__title {
    font-size: 55px;
    font-weight: 700;
    line-height: 68px;
    color: white;
    text-transform: uppercase;

    margin: 0 0 20px;
  }

  .find-group__description {
    color: white;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;

    margin-bottom: 80px;
  }

  .find-group__form {
    font-family: Inter, sans-serif;

    display: flex;
    gap: 3px;
    align-items: center;
    justify-content: center;

    min-height: 187px;
    padding: 0 14px;

    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 35px;
  }

  .find-group__input-label {
    display: none;
  }

  .find-group__input {
    font-family: Inter, sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: green;

    box-sizing: border-box;

    width: 300px;
    padding: 20px 0 20px 15px;

    border: none;
    outline: none;

    &:first-of-type {
      border-radius: 20px 0 0 20px;
    }

    &:last-of-type {
      border-radius: 0 20px 20px 0;
    }
  }

  .find-group__button {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    color: white;
    letter-spacing: 0.8px;

    width: max-content;
    padding: 20px 35px;
    margin-left: 20px;

    cursor: pointer;

    background-color: $primaryColor;
    border: 0;
    border-radius: 20px;
    outline: none;
  }

  .find-group__reference-link {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #fff;

    margin-top: 23px;
  }
</style>
