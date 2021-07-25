<template>
  <header class="header">
    <b-navbar class="header__top-navigation">
      <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
      /
      <nuxt-link class="nav-link" to="/check-in">Check in</nuxt-link>
    </b-navbar>
    <b-navbar
      class="header__navigation"
    >
      <ul class="nav">
        <li>
          <nuxt-link no-prefetch class="item-nav" to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="item-nav"  to="/users">Users</nuxt-link>
        </li>
      </ul>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
  .header {
    &__top-navigation {
      background: var(--color-black-v2);
      display: flex;
      justify-content: flex-end;
      color: var(--color-whisper);

      .nav-link {
        color: var(--color-whisper);
        font-size: 12px;
        padding: 0 10px;
      }
    }

    &__navigation {
      height: 60px;
      width: 100%;
      background-color: var(--color-night-rider);
    }
  }

  .item-nav {
    color: var(--color-white);
    font-size: 14px;

    &.nuxt-link-exact-active {
      color: var(--dark-gray);
    }
  }

  .nav {
    display: flex;
    list-style-type: none;
    padding-left: 0;

    li {
      & + li {
        margin-left: 15px;
      }
    }
  }
</style>
