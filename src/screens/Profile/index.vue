<template>
  <section class="profile-screen">
    <div class="profile-screen__content">
      <div class="profile-screen__menu">
        <ul class="profile-screen__menu-list">
          <li
          v-for="item in menuListData"
          class="profile-screen__menu-item"
          :key="item.text">
            <Icon
            class="profile-screen__icon"
            :icon="item.icon"/>

            <span>
              {{ item.text }}
            </span>
          </li>
        </ul>
      </div>

      <ProfileCard/>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '@/components/ui-kit/Icon.vue';
  import ProfileCard from './Card.vue';

  type TMenuListData = { [key in 'text' | 'icon']: string }[];

  export default defineComponent({
    name: 'ProfileScreen',
    components: {
      Icon,
      ProfileCard,
    },
    setup() {
      const menuListData: TMenuListData = [
        {
          icon: 'account_circle',
          text: 'Профиль',
        },
        {
          icon: 'add_circle',
          text: 'Создать группу',
        },
        {
          icon: 'groups',
          text: 'Группы',
        },
        {
          icon: 'groups',
          text: 'Мои подписчики',
        },
        {
          icon: 'settings',
          text: 'Настройки',
        },
        {
          icon: 'logout',
          text: 'Выход',
        },
      ];

      return {
        menuListData,
      };
    },
  });
</script>

<style lang="scss">
@use '@/styles/variables.scss' as *;

.profile-screen {
  width: 100%;
  padding-top: 20px;

  background-color: $color-screen-background;
}

.profile-screen__content {
  display: flex;
  gap: 20px;

  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
}

.profile-screen__menu {
  width: 271px;
  padding: 20px 24px;

  background-color: #fff;
  border-radius: 18px;
  box-shadow: 0 1px 20px 0 #00000008;

}

.profile-screen__menu-list {
  list-style-type: none;

  gap: 8px;
  display: flex;
  flex-direction: column;

  padding: 0;
}

.profile-screen__menu-item {
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  display: flex;
  gap: 8px;
  align-items: center;

  width: 100%;
  height: 50px;
  padding-left: 34px;

  cursor: pointer;
  user-select: none;

  background-color: $color-app-background;
  border-radius: 18px;
}

.profile-screen__icon {
  font-size: 25px;
}
</style>
