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
          v-if="!currentUser?.id || !group?.participants.includes(currentUser?.id)"
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
            :class="{'group-card__message--right': message.owner.id === currentUser?.id}"
            :key="message.id">
              <img
              class="group-card__message-avatar"
              :src="message.owner.avatar">

              <span class="group-card__message-text">{{ message.text }}</span>
            </div>
          </div>

          <div class="group-card__message-input-container">
            <BaseInput
            v-model="messageValue"
            @keydown.enter="sendMessage"
            class="group-card__msg-input"
            name="textMessage"/>

            <Icon
            @click="sendMessage"
            class="group-card__send-icon"
            icon="send"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent, onMounted, onUnmounted, ref, watch, nextTick,
  } from 'vue';
  import useGroupApi from '@/core/hooks/useGroupApi';
  import useWebSocket from '@/core/hooks/useWebSocket';
  import useGroupStore from '@/store/useGroupStore';
  import useUserStore from '@/store/useUserStore';
  import { storeToRefs } from 'pinia';
  import Icon from '@/components/ui-kit/Icon.vue';
  import BaseButton from '@/components/ui-kit/Button.vue';
  import BaseInput from '@/components/ui-kit/Input.vue';

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
      const webSocket = useWebSocket();

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
        if (!group.value?.id) return;

        try {
          const response = await groupApi.joinGroup({
            groupId: group.value?.id,
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
        if (!groupStore.group?.id) return;

        webSocket.emitMessage('groupMessage', {
          text: messageValue.value,
          chatId: groupStore.group.chat.id,
        });

        messageValue.value = '';
      }

      watch(() => groupStore.group?.chat.messages, async () => {
        await nextTick();
        const elements = document.querySelectorAll('.group-card__message');
        if (!elements) return;

        Array.from(elements).at(-1)?.scrollIntoView();
      }, { deep: true });

      watch(() => groupStore.group, () => {
        if (groupStore.group) webSocket.subscribe('groupMessage', (payload) => groupStore.addMessage(payload));
      });

      onMounted(() => {
        const groupId = window.location.href.split('/').at(-1);
        if (groupId) getGroup(groupId).catch(() => {});
      });

      onUnmounted(() => {
        groupStore.$reset();
        webSocket.unSubscribe('message');
      });

      return {
        group,
        currentUser,
        messageValue,
        joinGroup,
        sendMessage,
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
    height: calc(100% - 62px);
    padding: 10px;
    margin-left: auto;

    background-color: #fff;
    border-radius: 18px;
  }

  .group-card__messages {
    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-bottom: 12px;
    padding: 5px;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(#000, 0.05);
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba($primaryColor, 0.3);
      border-radius: 20px;
    }
  }

  .group-card__message {
    display: flex;
    align-items: center;
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

  .group-card__message-input-container {
    display: flex;
    align-self: flex-end;
    align-items: center;
    gap: 8px;
  }

  .group-card__msg-input {
    width: max-content;
    height: 30px;
  }

  .group-card__send-icon {
    color: rgba($primaryColor, 0.5);

    cursor: pointer;
  }
</style>
