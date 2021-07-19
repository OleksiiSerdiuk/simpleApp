export const state = () => ({
  usersList: [],
});

export const actions = {
  async GET_USERS({commit}, params) {
    try {
      // const { data } = await this.$axios.$get(`https://vortex.worldofwarships.ru/api/accounts/search/${params}`);
      const { data } = await this.$axios.$get(`https://vortex.worldofwarships.ru/api/accounts/search/autocomplete/${params}`);
      await commit('SET_USERS_DATA', data);
    } catch (e) {}
  },
};

export const mutations = {
  SET_USERS_DATA(state, data) {
    state.usersList = data;
  },
};
