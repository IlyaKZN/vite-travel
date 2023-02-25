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
      label="Имя пользователя"
      name="username"
      type="text"/>

      <BaseInput
      v-model="email"
      label="Электронная почта"
      name="email"
      type="email"/>

      <BaseInput
      v-model="password"
      label="Пароль"
      name="password"
      type="password"/>

      <BaseInput
      v-model="repeatedPassword"
      label="Подтвердите пароль"
      name="repeatedPassword"
      type="password"/>

      <BaseInput
      v-model="birthDate"
      label="Дата рождения"
      name="test"
      type="date"/>

      <BaseInput
      v-model="phoneNumber"
      label="Номер телефона"
      name="test"
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
  import { defineComponent, ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import BaseInput from '../ui-kit/Input.vue';
  import BaseButton from '../ui-kit/Button.vue';
  import AlternativeAuth from './AlternativeAuth.vue';
  import useAuthApi from '@/core/hooks/useAuthApi';
  import useUserStore from '@/store/useUserStore';
  import { useRouter } from 'vue-router';

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

      const router = useRouter();
      const authApi = useAuthApi();
      const userStore = useUserStore();
      const { currentUser } = storeToRefs(userStore);

      watch(currentUser, () => {
        if (currentUser.value) {
          router.push({ name: 'main' }).catch(console.error);
        }
      });

      function validate() {
        if (password.value !== repeatedPassword.value) {
          return false;
        }
        return true;
      }

      async function signUp() {
        if (!birthDate.value || !validate()) return;

        const response = await authApi.signUp({
          username: username.value,
          email: email.value,
          password: password.value,
          birthDate: new Date(birthDate.value),
          phoneNumber: phoneNumber.value,
        });

        if (!response) return;

        const { accessToken, user } = response;

        localStorage.setItem('accessToken', accessToken);

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
