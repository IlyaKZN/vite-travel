<template>
  <footer class="footer">
    <div class="footer__links-container">
      <a
      aria-label="link to vk.com"
      class="footer__link"
      href="https://vk.com"
      :style="{ backgroundImage: `url(${vkLogo})` }"/>

      <a
      aria-label="link to web.telegram.org"
      class="footer__link"
      href="https://web.telegram.org/"
      :style="{ backgroundImage: `url(${tgLogo})` }"/>
    </div>

    <div class="footer__info-container">
      <RouterLink
      class="footer__info-link"
      to="/">
        о нас
      </RouterLink>

      <RouterLink
      class="footer__info-link"
      to="/">
        конфеденциальность
      </RouterLink>

      <RouterLink
      class="footer__info-link"
      to="/">
        поддержка
      </RouterLink>

      <RouterLink
      class="footer__info-link"
      to="/">
        правила
      </RouterLink>
    </div>
    <p class="footer__signature">
      © 2022 WeTravel — путешествуем вместе
    </p>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vkLogo from '@/assets/vk-logo.svg';
  import tgLogo from '@/assets/tg-logo.svg';

  export default defineComponent({
    name: 'TheFooter',
    setup() {
      return {
        vkLogo,
        tgLogo,
      };
    },
  });
</script>

<style lang="scss">
  .footer {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-top: 70px;
  }

  .footer__links-container {
    display: flex;
    gap: 55px;

    margin-bottom: 46px;
  }

  .footer__link {
    display: block;

    height: 55px;
    width: 55px;

    background-size: cover;
    background-position: center;
  }

  .footer__info-container {
    display: flex;
    gap: 70px;

    margin-bottom: 42px;
  }

  .footer__info-link {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }

  .footer__signature {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }
</style>
