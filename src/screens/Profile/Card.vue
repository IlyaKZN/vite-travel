<template>
  <div class="profile-card">
    <div class="profile-card__header-gradient">
      <Icon
      class="profile-card__edit-icon"
      icon="edit"/>
    </div>

    <img
    class="profile-card__avatar"
    src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg">
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '@/components/ui-kit/Icon.vue';

  export default defineComponent({
    name: 'ProfileCard',
    components: {
      Icon,
    },
  });
</script>

<style lang="scss">
  .profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 466px;
    overflow: hidden;

    border-radius: 18px;
  }

  .profile-card__header-gradient {
    height: 210px;
    width: 100%;

    position: relative;

    background: linear-gradient(180deg, #6baefc 3.45%, #921bef 101.71%);
  }

  .profile-card__edit-icon {
    color: #fff;
    font-size: 26px;

    position: absolute;
    top: 18px;
    right: 26px;

    cursor: pointer;
  }

  .profile-card__avatar {
    width: 229px;
    height: 229px;
    padding: 16px;
    margin-top: -154px;

    z-index: 1;

    background-color: #fff;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
