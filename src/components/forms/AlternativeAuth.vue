<template>
  <div class="alternative-auth">
    <p class="alternative-auth__transition-text">
      или
    </p>

    <a
    aria-label="link to vk authorization"
    class="alternative-auth__link-vk"
    href="/"/>

    <a
    aria-label="link to google authorization"
    class="alternative-auth__link-google"
    href="/">
      <img
      alt="Логотип Google"
      class="alternative-auth__google-logo"
      :src="googleLogo">
      Продолжить с Google
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import googleLogo from '@/assets/google-logo.png';

  export default defineComponent({
    name: 'AlternativeAuth',
    setup() {
      return {
        googleLogo,
      };
    },
  });
</script>

<style lang="scss">
  .alternative-auth {
    width: 100%;
  }

  .alternative-auth__container {
    line-height: 0;

    display: flex;
    flex-direction: column;
    gap: 10px;
    gap: 10px;

    width: 100%;
    height: 29px;
  }

  .alternative-auth__transition-text {
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;

    display: flex;
    gap: 42px;
    align-items: center;

    margin-bottom: 10px;

    &::before,
    &::after {
      display: block;

      width: 100%;

      content: '';

      border-top: 1px solid rgba(0, 0, 0, 0.25);
    }

  }

  %link {
    color: #000;
    text-decoration: none;

    width: 100%;
    height: 56px;
    padding: 0;

    cursor: pointer;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    outline: none;
  }

  .alternative-auth__link-vk {
    @extend %link;
    display: inline-block;

    width: 100%;

    background-color: #376fff;
    background-image: url('../../assets/vk-logo-white.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px;
  }

  .alternative-auth__link-google {
    @extend %link;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;

    box-sizing: border-box;
    display: flex;
    gap: 14px;
    align-items: center;
    justify-content: center;

    background-color: #fff;
  }

  .alternative-auth__google-logo {
    height: 29px;
  }
</style>
