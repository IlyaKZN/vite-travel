<template>
  <div class="manager-profile-card">
    <div class="manager-profile-card__header-gradient">
      <RouterLink :to="{ name: 'manager-editor' }">
        <Icon
        class="manager-profile-card__edit-icon"
        icon="edit"/>
      </RouterLink>
    </div>

    <img
    class="manager-profile-card__avatar"
    :src="currentUser?.avatar">

    <span class="manager-profile-card__name">{{ currentUser?.lastName }} {{ currentUser?.firstName }}</span>

    <span class="manager-profile-card__id">id {{ currentUser?._id }}</span>

    <RouterLink
    :to="{ name: 'manager-editor' }">
      <BaseButton
      class="manager-profile-card__edit-button"
      styleType="outlined">
        Редактировать профиль
      </BaseButton>
    </RouterLink>

    <div class="manager-profile-card__statistic">
      <div class="manager-profile-card__statistic-item">
        <div class="manager-profile-card__statistic-value">
          {{ user.rating }}/10
        </div>

        <div>рейтинг</div>
      </div>

      <div class="manager-profile-card__statistic-item">
        <div class="manager-profile-card__statistic-value">
          {{ user.subscribers }}
        </div>

        <div>подписчиков</div>
      </div>

      <div class="manager-profile-card__statistic-item">
        <div class="manager-profile-card__statistic-value">
          {{ user.subscriptions }}
        </div>

        <div>подписок</div>
      </div>
    </div>

    <div class="manager-profile-card__info">
      <span>Возраст: <span class="manager-profile-card__info-value">{{ age }}</span></span>

      <span>Город: <span class="manager-profile-card__info-value">{{ currentUser?.city }}</span></span>

      <span>О себе: <span class="manager-profile-card__info-value">{{ user.aboutMe }}</span></span>

      <span>URL: <span class="manager-profile-card__info-value">{{ user.URL }}</span></span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import Icon from '@/components/ui-kit/Icon.vue';
  import BaseButton from '@/components/ui-kit/Button.vue';
  import useUserStore from '@/store/useUserStore';

  export default defineComponent({
    name: 'ProfileCard',
    components: {
      Icon,
      BaseButton,
    },
    setup() {
      const userStore = useUserStore();
      const { currentUser } = storeToRefs(userStore);

      const age = computed(() => {
        if (!currentUser.value?.birthDate) return null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return Math.floor(((new Date().getTime() - new Date(currentUser.value?.birthDate)) / 31_557_600_000));
      });

      const user = {
        name: 'Пичугин Илья',
        id: '4578563',
        rating: 8,
        subscribers: '1.4к',
        subscriptions: '12',
        age: 24,
        city: 'Москва',
        aboutMe: 'Лалалалала',
        URL: 'vk.com/ilya',
      };

      return {
        user,
        currentUser,
        age,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .manager-profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 466px;
    padding: 0 90px 54px;
    overflow: hidden;

    position: relative;

    background-color: #fff;
    border-radius: 18px;
  }

  .manager-profile-card__header-gradient {
    height: 210px;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(180deg, #6baefc 3.45%, #921bef 101.71%);
  }

  .manager-profile-card__edit-icon {
    color: #fff;
    font-size: 26px;

    position: absolute;
    top: 18px;
    right: 26px;

    cursor: pointer;
  }

  .manager-profile-card__avatar {
    width: 229px;
    height: 229px;
    padding: 16px;
    margin-top: 54px;

    z-index: 1;

    background-color: #fff;
    border-radius: 50%;
    object-fit: cover;
  }

  .manager-profile-card__name {
    font-size: 30px;
    font-weight: 500;
    line-height: 37px;

    margin-bottom: 11px;
  }

  .manager-profile-card__id {
    font-size: 16px;
    line-height: 20px;
    color: rgba(#000, 0.6);

    margin-bottom: 26px;
  }

  .manager-profile-card__edit-button {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;

    margin-bottom: 35px;
  }

  .manager-profile-card__statistic {
    font-size: 13px;
    line-height: 16px;
    color: $primaryColor;

    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 46px;
  }

  .manager-profile-card__statistic-value {
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    color: #000;
  }

  .manager-profile-card__info {
    font-size: 15px;
    line-height: 18px;
    color: rgba(#000, 0.5);

    display: flex;
    flex-direction: column;
    gap: 40px;
    align-self: flex-start;
  }

  .manager-profile-card__info-value {
    font-size: 15px;
    line-height: 18px;
    color: #000;
  }
</style>
