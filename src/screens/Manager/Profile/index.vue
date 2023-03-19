<template>
  <section class="manager-profile-screen">
    <ProfileCard
    @edit="goToEditor"
    :type="formattedUser?.id === currentUser?.id ? 'mine' : 'stranger'"
    :userData="formattedUser"/>

    <div class="manager-profile__feed">
      <h3>Лента событий</h3>
    </div>
  </section>
</template>

<script lang="ts">
  import {
    defineComponent, computed, ref, watch,
  } from 'vue';
  import { storeToRefs } from 'pinia';
  import ProfileCard from './Card.vue';
  import { useRoute, useRouter } from 'vue-router';
  import useUserStore from '@/store/useUserStore';
  import useUserApi from '@/core/hooks/useUserApi';
  import { TUser } from '@/types/entities';

  export type TFormattedUser = Omit<TUser, 'birthDate'> & { age: number };

  export default defineComponent({
    name: 'ProfileScreen',
    components: {
      ProfileCard,
    },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const userStore = useUserStore();
      const userApi = useUserApi();
      const { currentUser, user } = storeToRefs(userStore);
      const formattedUser = ref<TFormattedUser | null>(null);

      const age = computed(() => {
        if (!currentUser.value?.birthDate) return 0;

        const openedUser = user.value ? user.value : currentUser.value;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return Math.floor(((new Date().getTime() - new Date(openedUser.birthDate)) / 31_557_600_000));
      });

      watch([currentUser, user, age], () => {
        if (!currentUser.value) return;

        const { birthDate, ...rest } = user.value ? user.value : currentUser.value;

        formattedUser.value = {
          ...rest,
          age: age.value,
        };
      }, { immediate: true, deep: true });

      async function getUser(userId: string) {
        try {
          const response = await userApi.getUser(userId);

          if (!response) return;

          userStore.$patch({
            user: response,
          });
        } catch (err) {
          // eslint-disable-next-line no-alert
          window.alert(err);
        }
      }

      watch(() => route.params.id, () => {
        const { params } = route;

        if (params.id) getUser(params.id as string).catch(() => {});
      }, { immediate: true });

      function goToEditor() {
        router.push({
          name: 'manager-editor',
        }).catch(() => {});
      }

      return {
        route,
        formattedUser,
        currentUser,
        goToEditor,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .manager-profile-screen {
    display: flex;
    gap: 19px;

    width: 100%;

    background-color: $color-screen-background;
  }

  .manager-profile__feed {
    width: 100%;
    max-width: 756px;
    min-height: 742px;
    padding: 40px;

    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 1px 20px 0 #00000008;
  }
</style>
