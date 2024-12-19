import { createStore } from "vuex";

export default createStore({
  state: {
    text: "",
    color: "",
    userLogged: false,
    fixedBtn: true,
    showNavbar: false,
    changeLang: false,
    translate: {},
    userDetails: {},
  },
  getters: {
    textSnack(state) {
      return state.text;
    },
    color(state) {
      return state.color;
    },
    userLogged(state) {
      return state.userLogged;
    },
    fixedBtn(state) {
      return state.fixedBtn;
    },
    showNavbar(state) {
      return state.showNavbar;
    },
    changeLang(state) {
      return state.changeLang;
    },
    translate(state) {
      return state.translate;
    },
    userDetails(state) {
      return state.userDetails;
    },
  },
  mutations: {
    SHOW_MESSAGE(state, payload) {
      state.text = payload.text;
      state.color = payload.color;
      state.typeToast = payload.typeToast;
      state.timeout = payload.timeout;
    },
    SET_FIXED_BTN(state, payload) {
      state.fixedBtn = payload;
    },
    SHOW_NAVBAR(state, payload) {
      state.showNavbar = payload;
    },
    SET_USER(state, payload) {
      state.userDetails = payload;
    },
    SET_TRANSLATE(state, payload) {
      state.translate = payload;
    },
    CHANGE_LANG(state) {
      state.changeLang = !state.changeLang;
    },
  },
  actions: {
    showSnack({ commit }, payload) {
      commit("SHOW_MESSAGE", payload);
    },
    fixedBtnHandler({ commit }, payload) {
      commit("SET_FIXED_BTN", payload);
    },
    showNavbarHandler({ commit }, payload) {
      commit("SHOW_NAVBAR", payload);
    },
    setTranslate({ commit }, payload) {
      commit("SET_TRANSLATE", payload);
    },
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
    changeLangHandler({ commit }) {
      commit("SET_USER");
    },
  },
  modules: {},
});
