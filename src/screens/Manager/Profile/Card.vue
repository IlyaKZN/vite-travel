<template>
  <div class="manager-profile-card">
    <div class="manager-profile-card__header-gradient">
      <RouterLink
      v-if="type === 'mine'"
      :to="{ name: 'manager-editor' }">
        <Icon
        class="manager-profile-card__edit-icon"
        icon="edit"/>
      </RouterLink>
    </div>

    <img
    class="manager-profile-card__avatar"
    :src="userData?.avatar">

    <span class="manager-profile-card__name">{{ userData?.lastName }} {{ userData?.firstName }}</span>

    <span class="manager-profile-card_id">id {{ userData?.id }}</span>

    <BaseButton
    v-if="type === 'mine'"
    @click="$emit('edit')"
    class="manager-profile-card__action-button"
    styleType="outlined">
      Редактировать профиль
    </BaseButton>

    <BaseButton
    v-else
    @click="$emit('subscribe')"
    class="manager-profile-card__action-button"
    styleType="outlined">
      Подписаться
    </BaseButton>

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
      <span>Возраст: <span class="manager-profile-card__info-value">{{ userData?.age }}</span></span>

      <span>Город: <span class="manager-profile-card__info-value">{{ userData?.city }}</span></span>

      <span>О себе: <span class="manager-profile-card__info-value">{{ user.aboutMe }}</span></span>

      <span>URL: <span class="manager-profile-card__info-value">{{ user.URL }}</span></span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, onUnmounted } from 'vue';
  import Icon from '@/components/ui-kit/Icon.vue';
  import BaseButton from '@/components/ui-kit/Button.vue';
  import { TFormattedUser } from './index.vue';
  import useUserStore from '@/store/useUserStore';

  export default defineComponent({
    name: 'ProfileCard',
    emits: ['edit', 'subscribe'],
    components: {
      Icon,
      BaseButton,
    },
    props: {
      userData: {
        type: Object as PropType<TFormattedUser | null>,
        required: true,
      },
      type: {
        type: String as PropType<'mine' | 'stranger'>,
        default: 'mine',
      },
    },
    setup() {
      const user = {
        rating: 8,
        subscribers: '1.4к',
        subscriptions: '12',
        aboutMe: 'Лалалалала',
        URL: 'vk.com/ilya',
      };

      const userStore = useUserStore();

      onUnmounted(() => {
        userStore.$patch({
          user: null,
        });
      });

      return {
        user,
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

  .manager-profile-card_id {
    font-size: 16px;
    line-height: 20px;
    color: rgba(#000, 0.6);

    margin-bottom: 26px;
  }

  .manager-profile-card__action-button {
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
