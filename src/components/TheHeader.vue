<template>
  <header class="header">
    <div class="header__content">
      <RouterLink
      to="/"
      class="logo"/>
      <nav class="header__navigation">
        <ul class="header__navigation-list">
          <li class="header__navigation-item">
            <RouterLink
            to="/signin"
            class="header__signin-link">
              Вход
            </RouterLink>
          </li>
          <li class="header__navigation-item">
            <RouterLink
            to="/signup"
            class="header__signup-link">
              Регистрация
            </RouterLink>
          </li>
        </ul>
      </nav>
      <button class="header__lang-button">
        ru
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
});
</script>

<style lang="scss">
  @import '@/styles/variables.scss';

  .header {
    height: 80px;
    width: 100%;
    background: $primaryColor;
  }

  .header__content {
    margin: 0 auto;
    max-width: 1140px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .logo {
    height: 62px;
    width: 222px;
    display: block;
    background-image: url('../assets/WeTravel.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .header__signin-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }

  .header__signup-link {
    color: $primaryColor;
    background-color: white;
    text-decoration: none;
    padding: 17px 41px;
    border-radius: 18px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }

  .header__navigation {
    margin-left: auto;
    margin-right: 40px;
  }

  .header__navigation-list {
    display: flex;
    list-style-type: none;
    gap: 48px;
  }

  .header__lang-button {
    border: none;
    background: none;
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>
