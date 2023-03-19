import { io } from 'socket.io-client';
import { TMessage } from '@/types/entities';
import useGroupStore from '@/store/useGroupStore';

type TRequestPayload = {
  'groupMessage': {
    text: string,
    chatId: number,
  },
};

type TResponsePayload = {
  'groupMessage': TMessage,
};

type TEvent = 'groupMessage';

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

function subscribe<T extends TEvent>(event: T, callback: (payload: TResponsePayload[T]) => void) {
  socket.on<TEvent>(event, (payload) => callback(payload));
  if (event === 'groupMessage') {
    const groupStore = useGroupStore();
    socket.emit('subscribe', { event, chatId: groupStore.group?.chat.id });
  }
}

function unSubscribe(event: string) {
  socket.removeAllListeners(event);
}

function emitMessage<T extends TEvent>(event: T, payload: TRequestPayload[T]) {
  socket.emit(event, payload);
}

export default function useWebSocket() {
  return {
    subscribe,
    unSubscribe,
    emitMessage,
  };
}
