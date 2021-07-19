<template>
  <section>
    <h1>Users</h1>

    <base-multiselect
      :value="valueSelect"
      :options="options"
      searchable
      label="name"
      :loading="isLoading"
      :search-change="asyncFind"
    />

    <list-players />
  </section>
</template>

<script>
import { ref, useContext, computed } from '@nuxtjs/composition-api';

export default {
  name: 'Users',
  setup(_, { root }) {
    const { store } = useContext();
    const valueSelect = ref(null);
    const options = computed(() => store.state.users?.usersList);
    const isLoading = ref(false);

    // const openUser = (user) => {
    //   root.$router.push('/users/' + user);
    // };


    const asyncFind = async(query) => {
      if(query.length > 3) {
        console.log('query', query);
        isLoading.value = true;
        await store.dispatch('users/GET_USERS', query);
        isLoading.value = false;
      }
    }

    return {
      valueSelect,
      options,
      asyncFind,
      isLoading,
    }
  },
}
</script>
