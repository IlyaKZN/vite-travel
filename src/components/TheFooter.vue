<template>
  <footer class="footer">
    <div class="social-networks-links-container">
      <a
      aria-label="link to vk.com"
      class="social-network-link"
      href="https://vk.com"
      :style="{ backgroundImage: `url(${vkLogo})` }"/>
      <a
      aria-label="link to web.telegram.org"
      class="social-network-link"
      href="https://web.telegram.org/"
      :style="{ backgroundImage: `url(${tgLogo})` }"/>
    </div>
    <div class="info-container">
      <RouterLink
      class="info-link"
      to="/">
        о нас
      </RouterLink>
      <RouterLink
      class="info-link"
      to="/">
        конфеденциальность
      </RouterLink>
      <RouterLink
      class="info-link"
      to="/">
        поддержка
      </RouterLink>
      <RouterLink
      class="info-link"
      to="/">
        правила
      </RouterLink>
    </div>
    <p class="signature">
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
    margin-bottom: 80px;
  }

  .social-networks-links-container {
    display: flex;
    gap: 55px;

    margin-bottom: 46px;
  }

  .social-network-link {
    display: block;

    height: 55px;
    width: 55px;

    background-size: cover;
    background-position: center;
  }

  .info-container {
    display: flex;
    gap: 70px;

    margin-bottom: 42px;
  }

  .info-link {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }

  .signature {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }
</style>
