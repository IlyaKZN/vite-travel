<template>
  <section class="create-group-screen">
    <form
    @submit.prevent="createGroup"
    class="create-group__form">
      <h2 class="create-group__title">
        Создать группу
      </h2>

      <BaseInput
      v-model="createGroupValue.name"
      label="Название группы"
      name="name"/>

      <BaseInput
      v-model="createGroupValue.startPoint"
      label="Откуда"
      name="startPoint"/>

      <BaseInput
      v-model="createGroupValue.endPoint"
      label="Куда"
      name="endPoint"/>

      <BaseInput
      v-model="createGroupValue.numberParticipants"
      label="Количество участников"
      name="numberParticipants"
      type="number"/>

      <div class="create-group__age-container">
        <span>Возраст участников</span>

        <div class="create-group__age-inputs">
          <BaseInput
          v-model="createGroupValue.minAge"
          label="От"
          :min="18"
          name="endPoint"
          type="number"/>

          <BaseInput
          v-model="createGroupValue.maxAge"
          label="До"
          :min="18"
          name="endPoint"
          type="number"/>
        </div>
      </div>

      <BaseInput
      v-model="createGroupValue.password"
      label="Пароль"
      name="password"/>

      <BaseButton
      class="create-group__submit-button"
      type="submit">
        Создать группу
      </BaseButton>
    </form>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import BaseInput from '@/components/ui-kit/Input.vue';
  import BaseButton from '@/components/ui-kit/Button.vue';
  import useGroupApi from '@/core/hooks/useGroupApi';

  export default defineComponent({
    name: 'CreateGroupScreen',
    components: {
      BaseInput,
      BaseButton,
    },
    setup() {
      const groupApi = useGroupApi();
      const createGroupValue = ref({
        name: '',
        startPoint: '',
        endPoint: '',
        password: '',
        numberParticipants: 2,
        minAge: 18,
        maxAge: 18,
      });

      async function createGroup() {
        const {
          name, startPoint, endPoint, password, maxAge, minAge, numberParticipants,
        } = createGroupValue.value;

        const createdGroup = await groupApi.createGroup({
          name,
          password,
          waypoints: [startPoint, endPoint],
          numberParticipants,
          minAge,
          maxAge,
        });

        console.log(createdGroup);
      }

      return {
        createGroupValue,
        createGroup,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .create-group-screen {
    width: 756px;
    padding: 43px 64px;

    border-radius: 18px;
    background-color: #fff;
  }

  .create-group__form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .create-group__title {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    width: max-content;
    margin: 0;

    border-bottom: 1px solid $primaryColor;
  }

  .create-group__submit-button {
    align-self: flex-end;

    width: max-content;
  }

  .create-group__age-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .create-group__age-inputs {
    display: flex;
    gap: 18px;
  }
</style>
