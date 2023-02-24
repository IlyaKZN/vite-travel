<template>
  <section class="groups-screen">
    <div class="groups__tabs">
      <button
      @click="activeTab = 'search'"
      class="groups__tab"
      :class="{ 'groups__tab--active': activeTab === 'search' }">
        Группы
      </button>

      <button
      @click="activeTab = 'control'"
      class="groups__tab"
      :class="{ 'groups__tab--active': activeTab === 'control' }">
        Мои
      </button>
    </div>

    <BaseInput
    v-model="searchValue"
    name="search"
    placeholder="Поиск по названию"/>

    <div class="groups__group-list">
      <div
      v-for="group in groupList"
      :key="group._id">
        <div class="groups__group">
          <span class="groups__group-title">{{ group.name }}</span>

          <div class="groups__group-waypoints">
            <div
            v-for="waypoint in group.waypoints"
            class="groups__group-waypoint"
            :key="waypoint">
              {{ waypoint }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import BaseInput from '@/components/ui-kit/Input.vue';
  import useGroupApi from '@/core/hooks/useGroupApi';
  import useGroupStore from '@/store/useGroupStore';
  import useUserStore from '@/store/useUserStore';
  import { storeToRefs } from 'pinia';
  import { TSearchGroupRequest } from '@/core/types/api';

  type TTabs = 'search' | 'control';

  export default defineComponent({
    name: 'GroupsScreen',
    components: {
      BaseInput,
    },
    setup() {
      const searchValue = ref('');
      const activeTab = ref<TTabs>('search');

      const groupApi = useGroupApi();
      const groupStore = useGroupStore();
      const userStore = useUserStore();
      const { currentUser } = storeToRefs(userStore);

      const { groupList } = storeToRefs(groupStore);

      async function searchGroup(request: TSearchGroupRequest) {
        try {
          const response = await groupApi.searchGroup(request);

          if (!response) return;

          groupStore.$patch({
            groupList: response,
          });
        } catch (err) {
          // eslint-disable-next-line no-alert
          window.alert(err);
        }
      }

      watch(searchValue, () => searchGroup({ name: searchValue.value }));

      watch([activeTab, currentUser], () => {
        if (!currentUser.value) return;

        if (activeTab.value === 'control') {
          searchGroup({ owner: currentUser?.value?._id }).catch(() => {});
        } else {
          // searchGroup({ participants: [`${currentUser.value._id}`] }).catch(() => {});
          searchGroup({}).catch(() => {});
        }
      }, { immediate: true });

      return {
        searchValue,
        activeTab,
        groupList,
        searchGroup,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/variables';

  .groups-screen {
    width: 756px;
    padding: 43px 64px;

    border-radius: 18px;
    background-color: #fff;
  }

  .groups__tab {
    font-size: 18px;
    line-height: 22px;

    padding: 5px 10px;

    cursor: pointer;

    background-color: transparent;
    border: 1px solid $primaryColor;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(#000, 0.2);

    &:hover {
      background-color: rgba($primaryColor, 0.1);
    }
  }

  .groups__tab--active {
    background-color: rgba($primaryColor, 0.2);

    &:hover {
      background-color: rgba($primaryColor, 0.2);
    }
  }

  .groups__tabs {
    display: flex;
    gap: 20px;
  }

  .groups__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;

    display: inline-block;

    width: max-content;

    border-bottom: 1px solid $primaryColor;
  }

  .groups__group-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-top: 20px;
  }

  .groups__group {
    display: flex;
    flex-direction: column;
    gap: 14px;

    padding: 33px 30px;
    width: 100%;

    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba($primaryColor, 0.1);
    border-radius: 18px;
  }

  .groups__group-title {
    font-size: 24px;
    font-weight: 500;
  }

  .groups__group-waypoints {
    display: flex;
    gap: 20px;
  }

  .groups__group-waypoint {
    padding: 10px 20px;

    border: 1px solid $primaryColor;
    border-radius: 18px;
  }
</style>
