<template>
  <section>
    <h1>Users</h1>

    <multiselect v-model="value" :options="options"></multiselect>

    <ul>
      <li v-for="user in 5" :key="user">
        <a href="#" @click.prevent="openUser(user)">
          User {{ user }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import { ref } from '@nuxtjs/composition-api';

  export default {
    name: 'Users',
    setup(_, { root }) {
      const value = ref(null);
      const options = ref([
        'list',
        'of',
        'options'
      ]);

      const openUser = (user) => {
        root.$router.push('/users/' + user);
      };

      return {
        openUser,
        value,
        options,
      }
    },
  }
</script>
