<template>
  <div class="group-card-screen">
    <div class="group-card">
      <div class="group-card__header">
        <span class="group-card__name">{{ group?.name }}</span>

        <div class="group-card__participants">
          <Icon
          icon="people_alt"
          type="outlined"/>

          <span>{{ group?.participants.length }}/{{ group?.numberParticipants }}</span>
        </div>
      </div>

      <div class="group-card__content">
        <div class="group-card__info">
          <div class="group-card__waypoints">
            <div
            v-for="waypoint in group?.waypoints"
            class="group-card__waypoint"
            :key="waypoint">
              <span>{{ waypoint }}</span>
            </div>
          </div>

          <BaseButton
          v-if="!currentUser?._id || !group?.participants.includes(currentUser?._id)"
          @click="joinGroup"
          class="group-card__join-button">
            Присоединиться
          </BaseButton>
        </div>

        <div class="group-card__chat">
          <div class="group-card__messages">
            <div
            v-for="message in group?.chat.messages"
            class="group-card__message"
            :class="{'group-card__message--right': message.owner._id === currentUser?._id}"
            :key="message._id">
              <img
              class="group-card__message-avatar"
              :src="message.owner.avatar">

              <span class="group-card__message-text">{{ message.text }}</span>
            </div>
          </div>

          <BaseInput
          v-model="messageValue"
          @keydown.enter="sendMessage"
          class="group-card__msg-input"
          label="Сообщение"
          name="textMessage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent, onMounted, onUnmounted, ref, watch,
  } from 'vue';
  import useGroupApi from '@/core/hooks/useGroupApi';
  import useWebSocket from '@/core/hooks/useWebSocket';
  import useGroupStore from '@/store/useGroupStore';
  import useUserStore from '@/store/useUserStore';
  import { storeToRefs } from 'pinia';
  import Icon from '@/components/ui-kit/Icon.vue';
  import BaseButton from '@/components/ui-kit/Button.vue';
  import BaseInput from '@/components/ui-kit/Input.vue';
  import { TMessage } from '@/types/entities';

  export default defineComponent({
    name: 'GroupCardScreen',
    components: {
      Icon,
      BaseButton,
      BaseInput,
    },
    setup() {
      const messageValue = ref('');

      const groupApi = useGroupApi();
      const { sendChatMessage } = useWebSocket();

      const groupStore = useGroupStore();
      const userStore = useUserStore();
      const { group } = storeToRefs(groupStore);
      const { currentUser } = storeToRefs(userStore);

      async function getGroup(groupId: string) {
        try {
          const response = await groupApi.getGroup(groupId);

          if (!response) return;

          groupStore.$patch({
            group: response,
          });
        } catch (err) {
          // eslint-disable-next-line no-alert
          window.alert(err);
        }
      }

      async function joinGroup() {
        if (!group.value?._id) return;

        try {
          const response = await groupApi.joinGroup({
            groupId: group.value?._id,
          });

          if (!response) return;

          groupStore.$patch({
            group: response,
          });
        } catch (err) {
          // eslint-disable-next-line no-alert
          window.alert(err);
        }
      }

      function sendMessage() {
        if (!groupStore.group?._id) return;

        sendChatMessage({
          text: messageValue.value,
          chatId: groupStore.group.chat._id,
        });

        messageValue.value = '';
      }

      watch(() => groupStore.group?.chat.messages, () => {
        const elements = document.querySelectorAll('.group-card__message');
        if (!elements) return;

        Array.from(elements).at(-1)?.scrollIntoView();
      }, { deep: true });

      function scrollToBottom(item: TMessage, index: number) {
        const length = groupStore.group?.chat.messages.length;
        if (!length || index !== length - 1) return;

        console.log('scrollToBottom');
      }

      onMounted(() => {
        const groupId = window.location.href.split('/').at(-1);
        if (groupId) getGroup(groupId).catch(() => {});
      });

      onUnmounted(() => {
        groupStore.$reset();
      });

      return {
        group,
        currentUser,
        messageValue,
        joinGroup,
        sendMessage,
        scrollToBottom,
      };
    },
  });
</script>

<style lang="scss">
  @use '@/styles/variables.scss' as *;

  .group-card-screen {
    width: 100%;
    padding: 30px;

    border-radius: 18px;
    background-color: #fff;
  }

  .group-card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    height: 400px;
    padding: 20px;

    background-color: rgba($primaryColor, 0.1);
    border-radius: 18px;
  }

  .group-card__header {
    display: flex;
    gap: 20px;
    align-items: center;

    margin-bottom: 24px;
  }

  .group-card__name {
    font-size: 28px;

    display: block;
  }

  .group-card__participants {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .group-card__waypoints {
    display: flex;
    gap: 40px;
  }

  .group-card__waypoint {
    padding: 20px 30px;

    border-radius: 18px;
    border: 1px solid $primaryColor;
  }

  .group-card__msg-input {
    align-self: flex-end;

    width: max-content;
  }

  .group-card__info {
    display: flex;
    flex-direction: column;
  }

  .group-card__join-button {
    margin-top: auto;
    width: max-content;
  }

  .group-card__content {
    display: flex;
    gap: 20px;

    height: 100%;
  }

  .group-card__chat {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 10px;
    margin-left: auto;

    background-color: #fff;
    border-radius: 18px;
  }

  .group-card__messages {
    display: flex;
    flex-direction: column;
    gap: 4px;

    height: 200px;
    overflow-y: auto;
  }

  .group-card__message {
    display: flex;
    gap: 8px;
  }

  .group-card__message--right {
    flex-flow: row-reverse;
  }

  .group-card__message-avatar {
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  .group-card__message-text {
    font-size: 20px;

    display: block;

    width: max-content;
    padding: 4px 10px;

    background-color: rgba($primaryColor, 0.1);
    border-radius: 10px;
  }
</style>
