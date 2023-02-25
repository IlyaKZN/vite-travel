<template>
  <form
  @submit.prevent="signIn"
  class="form">
    <h1 class="form__title">
      Добро пожаловать<br>в <span class="form__span">We</span>Travel
    </h1>

    <div class="form__inputs-area">
      <BaseInput
      v-model="username"
      label="Имя пользователя/ Номер телефона"
      name="email"/>

      <BaseInput
      v-model="password"
      label="Пароль"
      name="password"
      type="password"/>
    </div>

    <div class="form__checkbox-container">
      <input
      class="form__checkbox"
      name="remember"
      type="checkbox"
      id="remember">

      <label for="remember">Запомнить меня</label>

      <RouterLink
      class="form__forgot-password-link"
      :to="{ name: 'main' }">
        Забыли пароль?
      </RouterLink>
    </div>

    <BaseButton type="submit">
      Продолжить
    </BaseButton>

    <div class="form__description-container">
      <p class="form__description">
        Новый пользователь?
      </p>

      <RouterLink
      class="form__link form__link--signin"
      :to="{ name: 'signIn' }">
        Зарегистрироваться
      </RouterLink>
    </div>

    <AlternativeAuth/>

    <p class="form__agreement">
      Авторизуясь, вы соглашаетесь с
      <RouterLink
      class="form__terms-link"
      :to="{ name: 'main' }">
        Лицензионным соглашением
      </RouterLink> и

      <RouterLink
      class="form__terms-link"
      :to="{ name: 'main' }">
        Политикой конфиденциальности
      </RouterLink>.
    </p>
  </form>
</template>

<script lang="ts">
  import {
    defineComponent, ref, watch, onMounted,
  } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import BaseInput from '../ui-kit/Input.vue';
  import BaseButton from '../ui-kit/Button.vue';
  import AlternativeAuth from './AlternativeAuth.vue';
  import useAuthApi from '@/core/hooks/useAuthApi';
  import useUserStore from '@/store/useUserStore';

  export default defineComponent({
    name: 'SignInForm',
    components: {
      BaseInput,
      BaseButton,
      AlternativeAuth,
    },
    setup() {
      const username = ref('');
      const password = ref('');

      const authApi = useAuthApi();
      const router = useRouter();

      const userStore = useUserStore();
      const { currentUser } = storeToRefs(userStore);

      function redirect() {
        router.push({ name: 'main' }).catch(console.error);
      }

      onMounted(() => {
        if (currentUser.value) redirect();
      });

      watch(currentUser, () => {
        if (currentUser.value) redirect();
      });

      async function signIn() {
        const response = await authApi.signIn({
          username: username.value,
          password: password.value,
        });

        if (!response) return;

        const { accessToken, user } = response;

        localStorage.setItem('accessToken', accessToken);

        userStore.$patch({ currentUser: user });
      }

      return {
        username,
        password,
        signIn,
      };
    },
  });
</script>

<style>
  @import './index.scss';
</style>
