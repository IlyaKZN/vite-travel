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
      name="name"
      placeholder="Название группы"/>

      <BaseInput
      v-model="createGroupValue.startPoint"
      name="startPoint"
      placeholder="Откуда"/>

      <BaseInput
      v-model="createGroupValue.endPoint"
      name="endPoint"
      placeholder="Куда"/>

      <BaseInput
      v-model="createGroupValue.password"
      name="password"
      placeholder="Пароль"/>

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
      });

      async function createGroup() {
        const {
          name, startPoint, endPoint, password,
        } = createGroupValue.value;

        const createdGroup = await groupApi.createGroup({
          name,
          password,
          waypoints: [startPoint, endPoint],
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
</style>
