import { TGroup } from '@/types/entities';
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
});

export default useGroupStore;
