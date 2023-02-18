<template>
  <form
  @submit.prevent="submitForm"
  class="form">
    <h1 class="title">
      Добро пожаловать<br>в <span class="span">We</span>Travel
    </h1>
    <div class="inputs-field">
      <BaseInput
      v-model="email"
      name="email"
      placeholder="Электронная почта/ Номер телефона"
      type="email"/>
      <BaseInput
      v-model="password"
      name="password"
      placeholder="Пароль"
      type="password"/>
    </div>
    <div class="checkbox-container">
      <input
      class="checkbox"
      name="remember"
      type="checkbox"
      id="remember">
      <label for="remember">Запомнить меня</label>
      <RouterLink
      class="forgot-password-link"
      to="/">
        Забыли пароль?
      </RouterLink>
    </div>
    <BaseButton type="submit">
      Продолжить
    </BaseButton>
    <div class="description-container">
      <p class="description">
        Новый пользователь?
      </p>
      <RouterLink
      class="signup-link"
      to="/signin">
        Зарегистрироваться
      </RouterLink>
    </div>
    <AlternativeAuth/>
    <p class="agreement">
      Авторизуясь, вы соглашаетесь с
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
    name: 'SignInForm',
    components: {
      BaseInput,
      BaseButton,
      AlternativeAuth,
    },
    methods: {
      submitForm() {
        console.log('Форма отправлена');
      },
    },
    data() {
      return {
        name: '',
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
    text-align: center;

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

  %link {
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    text-decoration: none;

    margin-left: 2px;
  }

  .signup-link {
    @extend %link;
    color: $secondaryColor;
  }

  .forgot-password-link {
    @extend %link;
    color: $primaryColor;
  }

  .agreement {
    font-size: 9px;
    line-height: 11px;
    text-align: center;

    margin: 25px 0 0;
  }

  .terms-link {
    color: $secondaryColor;
    text-decoration: none;
    font-weight: 600;
  }

  .checkbox {
    position: absolute;
    z-index: -1;

    opacity: 0;
  }

  .checkbox+label {
    font-size: 15px;
    line-height: 18px;

    display: inline-flex;
    align-items: center;

    user-select: none;
  }

  .checkbox+label::before {
    display: inline-block;
    flex-grow: 0;
    flex-shrink: 0;

    width: 1em;
    height: 1em;
    margin-right: 0.5em;

    cursor: pointer;
    content: '';

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25em;
  }

  .checkbox:checked+label::before {
    background-color: $primaryColor;
  }

  .checkbox-container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 24px;
  }
</style>
