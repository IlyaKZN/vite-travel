import { TGroup, TMessage } from '@/types/entities';
import { defineStore } from 'pinia';

type TGroupState = {
  group: TGroup | null;
  groupList: TGroup[] | null;
};

const useGroupStore = defineStore('group', {
  state: (): TGroupState => ({
    group: null,
    groupList: null,
  }),
  actions: {
    addMessage(message: TMessage) {
      this.group?.chat.messages.push(message);
    },
  },
});

export default useGroupStore;
