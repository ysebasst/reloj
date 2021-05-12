import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recordatorios: [],
    editarActive: false,
    editarData: {
      id: 0,
      titulo: "",
      fecha: "",
      hora: "",
    },
  },
  mutations: {
    setRecordatorios(state, payload) {
      state.recordatorios = payload;
    },
    agregarRecordatorio(state, payload) {
      state.recordatorios = [...state.recordatorios, payload];
      localStorage.setItem(
        "recordatorios",
        JSON.stringify(state.recordatorios)
      );
    },
    borrarRecordatorio(state, payload) {
      const newRecordatorios = state.recordatorios.filter(
        (item) => item.id !== payload
      );
      state.recordatorios = [...newRecordatorios];
      localStorage.setItem(
        "recordatorios",
        JSON.stringify(state.recordatorios)
      );
    },
    setEditarActive(state, payload) {
      state.editarActive = payload;
    },
    setEditarData(state, payload) {
      state.editarData = payload;
    },
  },
  actions: {
    fetchData({ commit }) {
      if (localStorage.getItem("recordatorios")) {
        commit(
          "setRecordatorios",
          JSON.parse(localStorage.getItem("recordatorios"))
        );
      } else {
        localStorage.setItem("recordatorios", JSON.stringify([]));
      }
    },
    updateRecordatorios({ commit, state }, payload) {
      commit("setRecordatorios", payload);
      localStorage.setItem(
        "recordatorios",
        JSON.stringify(state.recordatorios)
      );
    },
  },
  modules: {},
});
