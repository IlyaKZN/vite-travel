<template>
  <header class="header">
    <div
    class="header__content"
    :class="{ 'header__content--wide': isWideHeader }">
      <RouterLink
      class="logo"
      :to="{ name: 'main' }"/>

      <nav class="header__navigation">
        <ul class="header__navigation-list">
          <RouterLink :to="{ name: 'users' }">
            <Icon icon="search"/>
          </RouterLink>

          <li
          v-if="!currentUser"
          class="header__navigation-item">
            <RouterLink
            class="header__signin-link"
            :to="{ name: 'signIn' }">
              Вход
            </RouterLink>
          </li>

          <li
          v-if="!currentUser"
          class="header__navigation-item">
            <RouterLink
            class="header__signup-link"
            :to="{ name: 'signUp' }">
              Регистрация
            </RouterLink>
          </li>

          <div
          v-else
          class="header__profile-preview">
            <span
            @click="isShowProfilePopup = !isShowProfilePopup"
            class="header__username">
              {{ currentUser.username }}
            </span>

            <div
            v-if="isShowProfilePopup"
            @click="isShowProfilePopup = false"
            class="header__profile-popup">
              <RouterLink
              class="header__profile-popup-item"
              :to="{ name: 'manager-profile', params: { id: currentUser._id } }">
                <Icon icon="account_circle"/>Профиль
              </RouterLink>

              <span
              @click="logout"
              class="header__profile-popup-item">
                <Icon icon="logout"/>Выйти
              </span>
            </div>
          </div>
        </ul>
      </nav>

      <button class="header__lang-button">
        ru
      </button>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import useUserStore from '@/store/useUserStore';
  import Icon from './ui-kit/Icon.vue';
  import useLogout from '../hooks/useLogout';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'TheHeader',
    components: {
      Icon,
    },
    setup() {
      const isShowProfilePopup = ref(false);
      const route = useRoute();

      const userStore = useUserStore();
      const { currentUser } = storeToRefs(userStore);
      const logout = useLogout();

      const isWideHeader = computed(() => {
        return route.name !== 'main';
      });

      return {
        currentUser,
        isShowProfilePopup,
        logout,
        isWideHeader,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .header {
    min-height: 80px;
    width: 100%;
    padding: 0 80px;

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

  .header__content--wide {
    max-width: 1532px;
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

  .header__username {
    font-size: 20px;
    color: #fff;

    cursor: pointer;
  }

  .header__profile-preview {
    position: relative;
  }

  .header__profile-popup {
    display: flex;
    flex-direction: column;
    gap: 3px;

    margin-top: 8px;
    overflow: hidden;

    position: absolute;
    left: 0;

    background-color: $primaryColor;
    border: 3px solid $primaryColor;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(#000, 0.5);
  }

  .header__profile-popup-item {
    color: #fff;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 6px;

    width: 100%;
    padding: 10px 20px;

    cursor: pointer;

    background-color: #a2c0f3;
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
