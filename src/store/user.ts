import { TCurrentUser } from '@/types/entities';
import { defineStore } from 'pinia';

type TUserState = {
  currentUser: TCurrentUser | null;
};

const useUserStore = defineStore('user', {
  state: (): TUserState => ({
    currentUser: null,
  }),
  actions: {
    setCurrentUser(value: TUserState['currentUser']) {
      this.currentUser = value;
    },
  },
});

export default useUserStore;
