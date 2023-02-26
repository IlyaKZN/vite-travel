<template>
  <section class="manager-editor-screen">
    <form
    @submit="updateUser"
    class="manager-editor__form">
      <span class="maganer-editor__title">Редактирование профиля</span>

      <img
      class="manager-editor__avatar"
      :src="currentUser?.avatar">

      <BaseInput
      v-model="formData.firstName"
      class="manager-editor__input"
      label="Имя"
      name="firstName"/>

      <BaseInput
      v-model="formData.lastName"
      class="manager-editor__input"
      label="Фамилия"
      name="lastName"/>

      <BaseInput
      v-model="formData.avatar"
      class="manager-editor__input"
      label="Аватар"
      name="avatar"/>

      <BaseInput
      v-model="formData.birthDate"
      class="manager-editor__input"
      label="Дата рождения"
      name="birthDate"
      type="date"/>

      <BaseInput
      v-model="formData.country"
      class="manager-editor__input"
      label="Страна"
      name="country"/>

      <BaseInput
      v-model="formData.city"
      class="manager-editor__input"
      label="Город"
      name="city"/>

      <BaseInput
      v-model="formData.status"
      class="manager-editor__input"
      label="Статус"
      name="status"/>

      <Transition name="fade">
        <div
        v-if="showSaveIndicator"
        class="manager-editor__save-indicator">
          Изменения сохранены
        </div>
      </Transition>

      <BaseButton
      class="manager-editor__submit-button"
      type="submit">
        Сохранить
      </BaseButton>
    </form>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import BaseInput from '@/components/ui-kit/Input.vue';
  import BaseButton from '@/components/ui-kit/Button.vue';
  import useUserApi from '@/core/hooks/useUserApi';
  import useUserStore from '@/store/useUserStore';

  export default defineComponent({
    name: 'ProfileEditorScreen',
    components: {
      BaseInput,
      BaseButton,
    },
    setup() {
      const userStore = useUserStore();
      const userApi = useUserApi();
      const { currentUser } = storeToRefs(userStore);
      const showSaveIndicator = ref(false);

      const formData = ref({
        firstName: currentUser.value?.firstName,
        lastName: currentUser.value?.lastName,
        avatar: currentUser.value?.avatar,
        country: currentUser.value?.country,
        city: currentUser.value?.city,
        status: currentUser.value?.status,
        birthDate: currentUser.value?.birthDate,
      });

      watch(currentUser, () => {
        formData.value = {
          firstName: currentUser.value?.firstName || '',
          lastName: currentUser.value?.lastName || '',
          avatar: currentUser.value?.avatar || '',
          country: currentUser.value?.country || '',
          city: currentUser.value?.city || '',
          status: currentUser.value?.status || '',
          birthDate: currentUser.value?.birthDate || new Date(),
        };
      });

      async function updateUser(event: Event) {
        event.preventDefault();

        const {
          city, country, firstName, lastName, status, birthDate, avatar,
        } = formData.value;

        try {
          const updatedUser = await userApi.updateUser({
            city,
            country,
            firstName,
            lastName,
            avatar,
            status,
            birthDate,
          });

          if (!updatedUser) return;

          userStore.$patch({
            currentUser: updatedUser,
          });

          showSaveIndicator.value = true;
          setTimeout(() => {
            showSaveIndicator.value = false;
          }, 3000);
        } catch (err) {
          // eslint-disable-next-line no-alert
          window.alert(err);
        }
      }

      return {
        updateUser,
        formData,
        showSaveIndicator,
        currentUser,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .manager-editor__form {
    display: flex;
    flex-direction: column;

    width: 756px;
    padding: 56px 90px;

    background-color: #fff;
    border-radius: 18px;
  }

  .manager-editor__title {
    font-size: 16px;
    line-height: 20px;

    width: max-content;
    margin-bottom: 18px;

    border-bottom: 1px solid $primaryColor;
  }

  .manager-editor__avatar {
    align-self: center;

    width: 229px;
    height: 229px;
    padding: 16px;
    margin-bottom: 26px;

    z-index: 1;

    background-color: #fff;
    border-radius: 50%;
    object-fit: cover;
  }

  .manager-editor__input {
    margin-bottom: 24px;

    &:last-of-type {
      margin-bottom: 38px;
    }
  }

  .manager-editor__save-indicator {
    text-align: center;

    padding: 20px 0;
    margin-bottom: 27px;

    background-color: #1bca4233;
    border: 1px solid #1eba414a;
    border-radius: 18px;
  }

  .manager-editor__submit-button {
    align-self: flex-end;

    width: min-content;
    padding: 15px 68px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
