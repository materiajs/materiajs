export default {
  namespaced: true,
  state: {
    darkMode: false,
  },
  mutations: {
    toggleDark(state, value = !state.darkMode) {
      state.darkMode = value;
    },
  },
};
