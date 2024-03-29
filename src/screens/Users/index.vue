<template>
  <main class="users-screen">
    <div class="users-screen__content">
      <BaseInput
      v-model="searchValue"
      label="Поиск пользователей"
      name="search"/>

      <div
      v-for="user in userList"
      @click="() => openUserProfile(user)"
      class="users-screen__user"
      :key="user.id">
        <img
        class="users-screen__avatar"
        :src="user.avatar">

        <span>{{ `${user.lastName} ${user.firstName}` }}</span>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import {
    defineComponent, ref, onMounted, watch,
  } from 'vue';
  import { useRouter } from 'vue-router';
  import BaseInput from '@/components/ui-kit/Input.vue';
  import useUserApi from '@/core/hooks/useUserApi';
  import useUserStore from '@/store/useUserStore';
  import { TUser } from '@/types/entities';
  import { storeToRefs } from 'pinia';

  export default defineComponent({
    name: 'UsersScreen',
    components: {
      BaseInput,
    },
    setup() {
      const searchValue = ref('');
      const userApi = useUserApi();
      const userStore = useUserStore();
      const router = useRouter();
      const { userList } = storeToRefs(userStore);

      onMounted(async () => {
        try {
          const users = await userApi.getUsers();

          if (!users) return;

          userStore.$patch({ userList: users });
        } catch (err) {
          // eslint-disable-next-line no-alert
          window.alert(err);
        }
      });

      async function searchUsers() {
        const response = await userApi.searchUsers({
          searchValue: searchValue.value,
        });

        if (response === null) return;

        userStore.$patch({ userList: response });
      }

      function openUserProfile(user: TUser) {
        router.push({ name: 'manager-profile', params: { id: user.id } }).catch(() => {});
      }

      watch(searchValue, () => {
        searchUsers().catch(() => {});
      });

      return {
        searchValue,
        userList,
        openUserProfile,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .users-screen {
    display: flex;

    width: 100%;
    padding: 20px 0 34px;

    background-color: $color-screen-background;
  }

  .users-screen__content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    max-width: 1080px;
    padding: 0 40px;
    margin: 0 auto;
  }

  .users-screen__user {
    display: flex;
    gap: 20px;
    align-items: center;

    padding: 10px 20px;

    cursor: pointer;

    background-color: rgba($primaryColor, 0.1);
    border-radius: 18px;
  }

  .users-screen__avatar {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }
</style>
