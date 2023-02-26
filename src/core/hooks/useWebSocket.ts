import { io } from 'socket.io-client';
import useGroupStore from '@/store/useGroupStore';

const socketOptions = {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: localStorage.getItem('accessToken'),
      },
    },
  },
};

const socket = io('http://localhost:3001/', socketOptions);

socket.on('connect', () => {
  console.log('websocket соединение установлено');
});

function sendChatMessage(data: { text: string, chatId: string }) {
  socket.emit('message', data);
}

export default function useWebSocket() {
  const groupStore = useGroupStore();

  socket.on('message', (data, payload) => {
    const messages = groupStore.group?.chat.messages;
    messages?.push(payload);

    groupStore.$patch({
      group: {
        chat: {
          messages,
        },
      },
    });
  });

  return {
    sendChatMessage,
  };
}
