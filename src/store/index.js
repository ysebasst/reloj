import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recordatorios: [],
    editarActive: false,
    editarData: {
      _id: "",
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
    async agregarRecordatorio(state, payload) {
      let recordatorioDB = payload;
      try {
        const res = await fetch(
          `https://ysst-api.herokuapp.com/api/v1/recordatorio`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        recordatorioDB = await res.json();
      } catch (error) {
        console.log(error);
      }
      state.recordatorios = [...state.recordatorios, recordatorioDB];
      localStorage.setItem(
        "recordatorios",
        JSON.stringify(state.recordatorios)
      );
    },
    async borrarRecordatorio(state, payload) {
      try {
        const res = await fetch(
          `https://ysst-api.herokuapp.com/api/v1/recordatorio/${payload._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const recordatorioDB = await res.json();
      } catch (error) {
        console.log(error);
      }
      const newRecordatorios = state.recordatorios.filter(
        (item) => item.id !== payload.id
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
    async fetchData({ commit }) {
      let recordatoriosDB = [];
      try {
        const res = await fetch(
          "https://ysst-api.herokuapp.com/api/v1/recordatorio"
        );
        recordatoriosDB = await res.json();
        localStorage.setItem("recordatorios", JSON.stringify(recordatoriosDB));
      } catch (error) {
        console.log(error);
        if (localStorage.getItem("recordatorios")) {
          recordatoriosDB = localStorage.getItem("recordatorios");
        }
      }
      commit("setRecordatorios", recordatoriosDB);
    },
    async updateRecordatorios({ commit, state }, payload) {
      let recordatorioDB = payload;
      try {
        const res = await fetch(
          `https://ysst-api.herokuapp.com/api/v1/recordatorio/${payload._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        recordatorioDB = await res.json();
      } catch (error) {
        console.log(error);
      }
      const newRecordatorios = state.recordatorios.map((item) => {
        if (item.id === recordatorioDB.id) {
          item = recordatorioDB;
        }
        return item;
      });
      commit("setRecordatorios", newRecordatorios);
      localStorage.setItem(
        "recordatorios",
        JSON.stringify(state.recordatorios)
      );
    },
  },
  modules: {},
});
