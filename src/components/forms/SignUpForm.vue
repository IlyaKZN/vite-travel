<template>
  <form
  @submit.prevent="signUp"
  class="form">
    <h1 class="form__title">
      Создайте учетную<br> запись в <span class="form__span">We</span>Travel!
    </h1>

    <div class="form__inputs-area">
      <BaseInput
      v-model="username"
      name="username"
      placeholder="Имя пользователя"
      type="text"/>

      <BaseInput
      v-model="email"
      name="email"
      placeholder="Электронная почта"
      type="email"/>

      <BaseInput
      v-model="password"
      name="password"
      placeholder="Пароль"
      type="password"/>

      <BaseInput
      v-model="repeatedPassword"
      name="repeatedPassword"
      placeholder="Подтвердите пароль"
      type="password"/>

      <BaseInput
      v-model="birthDate"
      name="test"
      placeholder="Дата рождения"
      type="date"/>

      <BaseInput
      v-model="phoneNumber"
      name="test"
      placeholder="Номер телефона"
      type="text"/>
    </div>

    <BaseButton type="submit">
      Продолжить
    </BaseButton>

    <div class="form__description-container">
      <p class="form__description">
        У вас уже есть учетная запись?
      </p>

      <RouterLink
      class="form__link"
      to="/signin">
        Войти
      </RouterLink>
    </div>

    <AlternativeAuth/>

    <p class="form__agreement">
      Нажимая «Создать учетную запись», я подтверждаю,
      что ознакомился с положениями, указанными в статьях

      <RouterLink
      class="form__terms-link"
      to="/">
        Лицензионным соглашением
      </RouterLink> и

      <RouterLink
      class="form__terms-link"
      to="/">
        Политикой конфиденциальности
      </RouterLink>.
    </p>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import BaseInput from '../ui-kit/Input.vue';
  import BaseButton from '../ui-kit/Button.vue';
  import AlternativeAuth from './AlternativeAuth.vue';
  import useAuthApi from '@/core/hooks/useAuthApi';
  import useUserStore from '@/store/useUserStore';

  export default defineComponent({
    name: 'SignUpForm',
    components: {
      BaseInput,
      BaseButton,
      AlternativeAuth,
    },
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
      const repeatedPassword = ref('');
      const birthDate = ref<string>('');
      const phoneNumber = ref('');

      const authApi = useAuthApi();
      const userStore = useUserStore();

      async function signUp() {
        if (!birthDate.value) return;

        const user = await authApi.signUp({
          username: username.value,
          email: email.value,
          password: password.value,
          birthDate: new Date(birthDate.value),
          phoneNumber: phoneNumber.value,
        });

        userStore.$patch({ currentUser: user });
      }

      return {
        username,
        email,
        password,
        repeatedPassword,
        birthDate,
        phoneNumber,
        signUp,
      };
    },
  });
</script>

<style>
  @import './index.scss';
</style>
