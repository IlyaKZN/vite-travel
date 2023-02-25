import { TUser } from '@/types/entities';
import { defineStore } from 'pinia';

type TUserState = {
  currentUser: TUser | null;
  userList: TUser[] | null;
};

const useUserStore = defineStore('user', {
  state: (): TUserState => ({
    currentUser: null,
    userList: null,
  }),
  actions: {
    setCurrentUser(value: TUserState['currentUser']) {
      this.currentUser = value;
    },
  },
});

export default useUserStore;
