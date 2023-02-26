import { io } from 'socket.io-client';
import { TMessage } from '@/types/entities';

type TRequestPayload = {
  'message': {
    text: string,
    chatId: string,
  },
};

type TResponsePayload = {
  'message': TMessage,
};

type TEvent = 'message';

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
  socket.on<TEvent>(event, (evt, payload) => callback(payload));
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
