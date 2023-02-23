<template>
  <div class="maganer-profile-card">
    <div class="maganer-profile-card__header-gradient">
      <RouterLink :to="{ name: 'manager-editor' }">
        <Icon
        class="maganer-profile-card__edit-icon"
        icon="edit"/>
      </RouterLink>
    </div>

    <img
    class="maganer-profile-card__avatar"
    src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg">

    <span class="maganer-profile-card__name">{{ currentUser?.lastName }} {{ currentUser?.firstName }}</span>

    <span class="maganer-profile-card__id">id {{ user.id }}</span>

    <RouterLink
    :to="{ name: 'manager-editor' }">
      <BaseButton
      class="maganer-profile-card__edit-button"
      styleType="outlined">
        Редактировать профиль
      </BaseButton>
    </RouterLink>

    <div class="maganer-profile-card__statistic">
      <div class="maganer-profile-card__statistic-item">
        <div class="maganer-profile-card__statistic-value">
          {{ user.rating }}/10
        </div>

        <div>рейтинг</div>
      </div>

      <div class="maganer-profile-card__statistic-item">
        <div class="maganer-profile-card__statistic-value">
          {{ user.subscribers }}
        </div>

        <div>подписчиков</div>
      </div>

      <div class="maganer-profile-card__statistic-item">
        <div class="maganer-profile-card__statistic-value">
          {{ user.subscriptions }}
        </div>

        <div>подписок</div>
      </div>
    </div>

    <div class="maganer-profile-card__info">
      <span>Возраст: <span class="maganer-profile-card__info-value">{{ currentUser?.birthDate }}</span></span>

      <span>Город: <span class="maganer-profile-card__info-value">{{ user.city }}</span></span>

      <span>О себе: <span class="maganer-profile-card__info-value">{{ user.aboutMe }}</span></span>

      <span>URL: <span class="maganer-profile-card__info-value">{{ user.URL }}</span></span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
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
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .maganer-profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 466px;
    padding: 0 90px 54px;
    overflow: hidden;

    position: relative;

    background-color: #fff;
    border-radius: 18px;
  }

  .maganer-profile-card__header-gradient {
    height: 210px;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(180deg, #6baefc 3.45%, #921bef 101.71%);
  }

  .maganer-profile-card__edit-icon {
    color: #fff;
    font-size: 26px;

    position: absolute;
    top: 18px;
    right: 26px;

    cursor: pointer;
  }

  .maganer-profile-card__avatar {
    width: 229px;
    height: 229px;
    padding: 16px;
    margin-top: 54px;

    z-index: 1;

    background-color: #fff;
    border-radius: 50%;
    object-fit: cover;
  }

  .maganer-profile-card__name {
    font-size: 30px;
    font-weight: 500;
    line-height: 37px;

    margin-bottom: 11px;
  }

  .maganer-profile-card__id {
    font-size: 16px;
    line-height: 20px;
    color: rgba(#000, 0.6);

    margin-bottom: 26px;
  }

  .maganer-profile-card__edit-button {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;

    margin-bottom: 35px;
  }

  .maganer-profile-card__statistic {
    font-size: 13px;
    line-height: 16px;
    color: $primaryColor;

    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 46px;
  }

  .maganer-profile-card__statistic-value {
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    color: #000;
  }

  .maganer-profile-card__info {
    font-size: 15px;
    line-height: 18px;
    color: rgba(#000, 0.5);

    display: flex;
    flex-direction: column;
    gap: 40px;
    align-self: flex-start;
  }

  .maganer-profile-card__info-value {
    font-size: 15px;
    line-height: 18px;
    color: #000;
  }
</style>
