<template>
  <header class="header">
    <div class="header__content">
      <RouterLink
      class="logo"
      to="/"/>
      <nav class="header__navigation">
        <ul class="header__navigation-list">
          <li class="header__navigation-item">
            <RouterLink
            class="header__signin-link"
            to="/signin">
              Вход
            </RouterLink>
          </li>
          <li class="header__navigation-item">
            <RouterLink
            class="header__signup-link"
            to="/signup">
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
  @import '@/styles/variables';

  .header {
    height: 80px;
    width: 100%;

    background: $primaryColor;
  }

  .header__content {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
  }

  .logo {
    display: block;

    width: 222px;
    height: 62px;

    background-image: url('../assets/WeTravel.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .header__signin-link {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }

  .header__signup-link {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: $primaryColor;
    text-decoration: none;

    padding: 17px 41px;

    background-color: #fff;
    border-radius: 18px;
  }

  .header__navigation {
    margin-left: auto;
    margin-right: 40px;
  }

  .header__navigation-list {
    list-style-type: none;

    display: flex;
    gap: 48px;
  }

  .header__lang-button {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    color: #fff;
    text-transform: uppercase;

    cursor: pointer;

    background: none;
    border: 0;
  }
</style>
