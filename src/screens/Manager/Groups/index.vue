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
    class="groups-screen__search-input"
    label="Поиск по названию"
    name="search"/>

    <div class="groups__group-list">
      <div
      v-for="group in groupList"
      @click="() => goToGroupCard(group.id)"
      class="groups__group"
      :key="group.id">
        <div class="groups__group-header">
          <span class="groups__group-title">{{ group.name }}</span>

          <Icon
          class="groups__group-partipicants-icon"
          icon="people_alt"
          type="outlined"/>

          <!-- <span class="groups__group-number-participants">{{ `${group.participants.length}/${group.numberParticipants}` }}</span> -->

          <span>{{ group.minAge }}-{{ group.maxAge }}</span>
        </div>

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
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import BaseInput from '@/components/ui-kit/Input.vue';
  import Icon from '@/components/ui-kit/Icon.vue';
  import useGroupApi from '@/core/hooks/useGroupApi';
  import useGroupStore from '@/store/useGroupStore';
  import useUserStore from '@/store/useUserStore';
  import { storeToRefs } from 'pinia';

  type TTabs = 'search' | 'control';

  export default defineComponent({
    name: 'GroupsScreen',
    components: {
      BaseInput,
      Icon,
    },
    setup() {
      const searchValue = ref('');
      const activeTab = ref<TTabs>('search');
      const router = useRouter();

      const groupApi = useGroupApi();
      const groupStore = useGroupStore();
      const userStore = useUserStore();
      const { currentUser } = storeToRefs(userStore);

      const { groupList } = storeToRefs(groupStore);

      function goToGroupCard(groupId: number) {
        router.push({
          name: 'group-card',
          params: { id: groupId },
        }).catch(() => {});
      }

      async function searchGroups(request?: { owner?: number }) {
        try {
          const response = await groupApi.searchGroups({
            searchString: searchValue.value,
            owner: request?.owner,
          });

          if (!response) return;

          groupStore.$patch({
            groupList: response,
          });
        } catch (err) {
          // eslint-disable-next-line no-alert
          window.alert(err);
        }
      }

      watch(searchValue, searchGroups);

      watch([activeTab, currentUser], () => {
        if (!currentUser.value) return;

        if (activeTab.value === 'control') {
          searchGroups({
            owner: currentUser.value.id,
          }).catch(console.error);
        } else {
          searchGroups().catch(console.error);
        }
      }, { immediate: true });

      return {
        searchValue,
        activeTab,
        groupList,
        goToGroupCard,
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

    margin-bottom: 24px;
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

    width: 100%;
    padding: 33px 30px;

    cursor: pointer;

    background-color: rgba($primaryColor, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
  }

  .groups__group-header {
    display: flex;
    align-items: center;
  }

  .groups__group-title {
    font-size: 24px;
    font-weight: 500;

    margin-right: 16px;
  }

  .groups__group-partipicants-icon {
    margin-right: 6px;
  }

  .groups__group-number-participants {
    margin-right: 12px;
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
