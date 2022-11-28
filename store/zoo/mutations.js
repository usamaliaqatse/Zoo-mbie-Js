export default {
  setLightMode(state) {
    state.lightMode = !state.lightMode;
  },

  setBgColor(state, payload) {
    state.bgColor = payload;
  },
};
