<template>
  <div>
    <ul>
      <li>№</li>
      <li>Users</li>
      <li>Fights</li>
      <li>Winners</li>
    </ul>
    <ul v-for="(player, index) in listPlayers" :key="index">
      <li>index</li>
      <li>
        <NuxtLink :to="{ path: `/players/${player.name}` }">
          {{ player.name }}
        </NuxtLink>
      </li>
<!--      <li>{{ player.statistics ? player.statistics.pvp.battles_count : '-' }}</li>-->
<!--      <li>{{ player.statistics ? player.statistics.pvp.wins : '-' }}</li>-->
    </ul>
  </div>
</template>

<script>
import { computed, useContext } from '@nuxtjs/composition-api';

export default {
  name: 'ListPlayers',
  setup() {
    const { store } = useContext();

    const listPlayers = computed(() => store.state.users?.usersList);

    return {
      listPlayers,
    }
  }
}
</script>
