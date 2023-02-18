<template>
  <form
  @submit.prevent="submitForm"
  class="form">
    <h1 class="title">
      Создайте учетную<br> запись в <span class="span">We</span>Travel!
    </h1>
    <div class="inputs-field">
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

    <div class="description-container">
      <p class="description">
        У вас уже есть учетная запись?
      </p>

      <RouterLink
      class="link"
      to="/signin">
        Войти
      </RouterLink>
    </div>

    <AlternativeAuth/>

    <p class="agreement">
      Нажимая «Создать учетную запись», я подтверждаю,
      что ознакомился с положениями, указанными в статьях

      <RouterLink
      class="terms-link"
      to="/">
        Лицензионным соглашением
      </RouterLink> и

      <RouterLink
      class="terms-link"
      to="/">
        Политикой конфиденциальности
      </RouterLink>.
    </p>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BaseInput from '../ui-kit/Input.vue';
  import BaseButton from '../ui-kit/Button.vue';
  import AlternativeAuth from './AlternativeAuth.vue';

  export default defineComponent({
    name: 'SignUpForm',
    components: {
      BaseInput,
      BaseButton,
      AlternativeAuth,
    },
    methods: {
      submitForm() {
        console.log('submit');
      },
    },
    data() {
      return {
        username: '',
        email: '',
        password: '',
        repeatedPassword: '',
        birthDate: '',
        phoneNumber: '',
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 500px;
    padding: 50px 52px 70px;

    background-color: #fff;
    border-radius: 40px;
  }

  .title {
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;

    margin: 0 0 67px;
  }

  .span {
    color: #f0953d;
    font-style: italic;
    font-weight: 400;
  }

  .inputs-field {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    margin-bottom: 25px;
  }

  .description {
    font-size: 15px;
    line-height: 18px;
    font-weight: 300;

    margin: 0;
  }

  .description-container {
    display: flex;
    gap: 3px;
    align-items: center;
    justify-content: center;

    margin: 20px 0;
  }

  .link {
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: $secondaryColor;
    text-decoration: none;

    margin-left: 2px;
  }

  .agreement {
    font-size: 9px;
    line-height: 11px;
    text-align: center;

    margin: 34px 0 0;
  }

  .terms-link {
    color: $secondaryColor;
    text-decoration: none;
    font-weight: 600;
  }
</style>
