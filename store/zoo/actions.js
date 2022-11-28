export default {
  toggleLightMode({ commit }) {
    commit("setLightMode");
  },

  storeBgColor({ commit }, bgColor) {
    commit("setBgColor", bgColor);
  },
};
