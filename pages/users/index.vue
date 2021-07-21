<template>
  <section>
    <h1>Users</h1>

    <div class="wrapper-multiselect">
      <base-multiselect
        v-model="valueSelect"
        :options="options"
        searchable
        label="name"
        :loading="isLoading"
        :search-change="asyncFind"
      />

      <b-btn
        class="btn-search"
        variant="primary"
        @click="getSearch"
      >
        Search
      </b-btn>
    </div>

    <list-players :lists="usersList" />

  </section>
</template>

<script>
import { ref, useContext, computed } from '@nuxtjs/composition-api';

export default {
  name: 'Users',
  setup() {
    const { store } = useContext();
    const valueSelect = ref(null);
    const options = computed(() => store.state.users?.usersListReactive);
    const usersList = computed(() => store.state.users?.usersList);
    const isLoading = ref(false);

    const asyncFind = async(query) => {
      if(query.length >= 3) {
        isLoading.value = true;
        await store.dispatch('users/GET_REACTIVE_USERS', query);
        isLoading.value = false;
      }
    }

    const getSearch = async() => {
      if (valueSelect.value?.name && valueSelect.value?.name.length >= 3 ) {
        await store.dispatch('users/GET_USERS', valueSelect.value.name);
      }
    }

    return {
      valueSelect,
      options,
      asyncFind,
      isLoading,
      getSearch,
      usersList,
    }
  },
}
</script>


<style scoped lang="scss">
  .wrapper-multiselect {
    display: flex;
    position: relative;

    ::v-deep .multiselect__select::before {
      content: none;
    }
  }

  .btn-search {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 51;
  }
</style>
