import theme from '../styles/themes';

export default {
  namespaced: true,
  state: {
    darkMode: false,
    theme,
  },
  actions: {
    setThemeByName({ commit }, themeName) {
      commit('setThemeByName', themeName);
    },
  },
  mutations: {
    toggleDark(state, value = !state.darkMode) {
      state.darkMode = value;
    },
    setThemeByName(state, themeName) {
      if (state.theme.themes[themeName]) {
        state.theme.colors = {
          ...state.theme.colors,
          ...state.theme.themes[themeName],
        };
      }
    },
  },
};
