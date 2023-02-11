<template>
  <section class="find-group">
    <h1 class="find-group__title">
      Новые люди - новые места
    </h1>

    <p class="find-group__description">
      легкий способ путешествовать и<br/>
      заводить новые знакомства
    </p>

    <form class="find-group__form">
      <label
      for="#starting-point-input"
      class="find-group__input-label">Откуда</label>
  
      <input
      id="#starting-point-input"
      class="find-group__input"
      placeholder="Откуда"
      type="text"/>

      <label
      for="#finishing-point-input"
      class="find-group__input-label">Куда</label>

      <input
      id="#finishing-point-input"
      class="find-group__input"
      placeholder="Куда"
      type="text"/>

      <label
      for="#date-input"
      class="find-group__input-label">Когда</label>

      <input
      id="#date-input"
      class="find-group__input"
      placeholder="Когда"
      type="text"/>

      <button
      class="find-group__button"
      type="submit">
        Найти группу
      </button>
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

export default defineComponent({
  name: 'FindGroupWidget',
});
</script>

<style lang="scss">
  @import '@/styles/variables.scss';

  .find-group {
    height: calc( 100vh - 80px );
    background-image: url('@/assets/MainPageGradient.svg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .find-group__title {
    margin: 0 0 20px;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 55px;
    line-height: 68px;
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
    min-height: 187px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0 14px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-family: Inter, sans-serif;
  }

  .find-group__input-label {
    display: none;
  }

  .find-group__input {
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    width: 300px;
    font-size: 18px;
    line-height: 22px;
    color: green;
    border: none;
    outline: none;
    font-family: Inter, sans-serif;

    &:first-of-type {
      border-radius: 20px 0px 0px 20px;
    }

    &:last-of-type {
      border-radius: 0px 20px 20px 0px;
    }
  }

  .find-group__button {
    margin-left: 20px;
    background-color: $primaryColor;
    color: white;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    padding: 20px 35px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-family: Inter, sans-serif;
    letter-spacing: 0.8px;
    outline: none;
  }

  .find-group__reference-link {
    margin-top: 23px;
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
</style>
