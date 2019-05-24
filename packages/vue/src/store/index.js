export default {
  namespaced: true,
  state: {
    darkMode: true,
  },
  mutations: {
    toggleDark(state, value = !state.darkMode) {
      state.darkMode = value;
    },
  },
};
