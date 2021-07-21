<template>
  <section>
    <NuxtLink to="/users">
      Return to user search
    </NuxtLink>
    <h1 class="mt-2">User {{ $route.params.id }}</h1>

    <div v-if="dataUser" class="mt-3">
      <h3>Statistic:</h3>
      <b-tabs content-class="mt-1 statistics-tabs">
        <b-tab title="PVP" active>
          <ul>
            <li>
              <span>Premium Exp:</span>
              <span>{{ dataUser.statistics.pvp.premium_exp ? dataUser.statistics.pvp.premium_exp : '-' }}</span>
            </li>
            <li>
              <span>Frags:</span>
              <span>{{ dataUser.statistics.pvp.frags ? dataUser.statistics.pvp.frags : '-' }}</span>
            </li>
            <li>
              <span>Battles Count:</span>
              <span>{{ dataUser.statistics.pvp.battles_count ? dataUser.statistics.pvp.battles_count : '-' }}</span>
            </li>
            <li>
              <span>Exp:</span>
              <span>{{ dataUser.statistics.pvp.exp ? dataUser.statistics.pvp.exp : '-' }}</span>
            </li>
            <li>
              <span>Wins:</span>
              <span>{{ dataUser.statistics.pvp.wins ? dataUser.statistics.pvp.wins : '-' }}</span>
            </li>
          </ul>
        </b-tab>
        <b-tab title="PVE">
          <ul>
            <li>
              <span>Premium Exp:</span>
              <span>{{ dataUser.statistics.pve.premium_exp ? dataUser.statistics.pve.premium_exp : '-' }}</span>
            </li>
            <li>
              <span>Frags:</span>
              <span>{{ dataUser.statistics.pve.frags ? dataUser.statistics.pve.frags : '-' }}</span>
            </li>
            <li>
              <span>Battles Count:</span>
              <span>{{ dataUser.statistics.pve.battles_count ? dataUser.statistics.pve.battles_count : '-' }}</span>
            </li>
            <li>
              <span>Exp:</span>
              <span>{{ dataUser.statistics.pve.exp ? dataUser.statistics.pve.exp : '-' }}</span>
            </li>
            <li>
              <span>Wins:</span>
              <span>{{ dataUser.statistics.pve.wins ? dataUser.statistics.pve.wins : '-' }}</span>
            </li>
          </ul>
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      <h3 class="color-red">Sorry, but the user data is out of date.</h3>
      <p>You need to go back to looking for users.</p>
    </div>
  </section>
</template>

<script>
import { computed, useContext } from '@nuxtjs/composition-api';

export default {
  setup() {
    const { store, params } = useContext();
    const postId = computed(() => params.value.id);
    const usersList = computed(() => store.state.users?.usersList);

    const dataUser = computed(() => usersList.value.find(i => postId.value === i.name));

    return {
      dataUser,
    }
  }
}
</script>


<style scoped lang="scss">
  ::v-deep {
    .tabs {
      margin-top: 30px;
      max-width: 500px;
    }

    .nav-tabs {
      justify-content: space-between;

      li {
        width: 50%;
      }

      .nav-link {
        border: 1px solid var(--color-blue);

        &.active {
          background: var(--color-blue);
          color: white;
        }
      }
    }
  }

  .statistics-tabs {
    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 5px;

        & + li {
          border-top: 1px solid var(--dark-gray);
        }
      }
    }
  }
</style>
