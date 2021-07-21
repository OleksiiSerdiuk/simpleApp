export const state = () => ({
  usersListReactive: [],
  usersList: [],
});

export const actions = {
  async GET_REACTIVE_USERS({commit}, params) {
    try {
      const { data } = await this.$axios.$get(`https://vortex.worldofwarships.ru/api/accounts/search/autocomplete/${params}`);
      await commit('SET_USERS_REACTIVE_DATA', data);
    } catch (e) {}
  },
  async GET_USERS({commit}, params) {
    try {
      const { data } = await this.$axios.$get(`https://vortex.worldofwarships.ru/api/accounts/search/${params}`);
      await commit('SET_USERS_DATA', data);
    } catch (e) {}
  },
};

export const mutations = {
  SET_USERS_REACTIVE_DATA(state, data) {
    state.usersListReactive = data;
  },
  SET_USERS_DATA(state, data) {
    state.usersList = data;
  },
};
