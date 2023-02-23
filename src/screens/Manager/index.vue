<template>
  <section class="manager-screen">
    <div class="manager-screen__content">
      <div class="manager-screen__menu">
        <ul class="manager-screen__menu-list">
          <li
          v-for="item in menuListData"
          @click="item.callback"
          :key="item.text">
            <RouterLink
            class="manager-screen__menu-link"
            :class="{ 'manager-screen__menu-link--active': item.routeNames?.includes(route.name as string) }"
            :to="{ name: item.routeNames ? item.routeNames[0] : '' }">
              <Icon
              class="manager-screen__icon"
              :icon="item.icon"/>

              <span>
                {{ item.text }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <router-view/>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '@/components/ui-kit/Icon.vue';
  import useLogout from '@/hooks/useLogout';
  import { useRoute } from 'vue-router';

  type TMenuListData = {
    icon: string,
    text: string,
    routeNames?: string[],
    callback?: () => void
  }[];

  export default defineComponent({
    name: 'ManagerScreen',
    components: {
      Icon,
    },
    setup() {
      const route = useRoute();
      const logout = useLogout();

      const menuListData: TMenuListData = [
        {
          icon: 'account_circle',
          text: 'Профиль',
          routeNames: ['manager-profile', 'manager-editor'],
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
          callback: logout,
        },
      ];

      return {
        menuListData,
        route,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .manager-screen {
    width: 100%;
    padding: 20px 0 34px;

    background-color: $color-screen-background;
  }

  .manager-screen__content {
    display: flex;
    gap: 20px;

    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }

  .manager-screen__menu {
    min-width: 271px;
    height: min-content;
    padding: 20px 24px;

    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 1px 20px 0 #00000008;
  }

  .manager-screen__menu-list {
    list-style-type: none;

    gap: 8px;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;
  }

  .manager-screen__menu-link {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: rgba(#000, 0.65);
    text-decoration: none;

    display: flex;
    gap: 8px;
    align-items: center;

    width: 100%;
    height: 50px;
    padding-left: 34px;

    cursor: pointer;
    user-select: none;

    border-radius: 18px;

    &:hover {
      background-color: rgba($color-app-background, 0.65);
    }
  }

  .manager-screen__menu-link--active {
    background-color: $color-app-background;

    &:hover {
      background-color: $color-app-background;
    }
  }

  .manager-screen__icon {
    font-size: 28px;
  }
</style>
