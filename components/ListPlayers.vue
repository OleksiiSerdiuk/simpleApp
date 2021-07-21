<template>
  <div>
    <div v-if="lists.length >= 1" class="wrapper-list-players mt-5">
      <ul>
        <li>№</li>
        <li>Users</li>
        <li>Fights</li>
        <li>Winners</li>
      </ul>
      <ul v-for="(player, index) in lists" :key="index">
        <li>{{ index + 1 }}</li>
        <li>
          <NuxtLink :to="{ path: `/users/${player.name}` }">
            {{ player.name }}
          </NuxtLink>
        </li>
        <li>{{ player.statistics.pvp ? player.statistics.pvp.battles_count : '-'  }}</li>
        <li>{{ player.statistics.pvp ? player.statistics.pvp.wins : '-'  }}</li>
      </ul>
    </div>
    <div v-else class="mt-4">
      <p class="color-red">You need to write name users in input.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPlayers',
  props: {
    lists: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper-list-players {
    ul {
      list-style-type: none;
      padding-left: 0;
      display: grid;
      grid-template-columns: 60px 1fr repeat(2, minmax(150px, 300px));
    }
  }
</style>
