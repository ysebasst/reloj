<template>
  <div
    class="modal-editar"
    :class="{ 'modal-editar--active': editarActive }"
    @click="cancelar"
  >
    <form class="form" @submit.prevent="actualizar">
      <input
        class="form__control"
        v-model="editarData.titulo"
        type="text"
        placeholder="Titulo"
        ref="campoEditarTitulo"
      />
      <input
        class="form__control"
        v-model="editarData.fecha"
        placeholder="Fecha"
        type="date"
      />
      <input
        class="form__control"
        v-model="editarData.hora"
        placeholder="Hora"
        type="time"
      />
      <div class="form__buttons">
        <button
          class="form__button form__button--cancelar"
          type="button"
          @click="cancelar"
        >
          Cancelar
        </button>
        <button class="form__button form__button--actualizar" type="submit">
          Actualizar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  watch: {
    editarActive() {
      if (this.editarActive) {
        // console.log(this.$refs.campoEditarTitulo);
        this.$refs.campoEditarTitulo.focus();
      }
    },
  },
  computed: {
    ...mapState(["recordatorios", "editarActive", "editarData"]),
  },
  methods: {
    ...mapMutations(["setEditarActive"]),
    ...mapActions(["updateRecordatorios"]),
    cancelar(e) {
      if (
        e.target.classList.contains("modal-editar") ||
        e.target.classList.contains("form__button--cancelar")
      ) {
        this.setEditarActive(false);
      }
    },
    actualizar() {
      const data = {
        id: this.editarData.id,
        titulo: this.editarData.titulo,
        fecha: this.editarData.fecha,
        hora: this.editarData.hora,
      };
      const newRecordatorios = this.recordatorios.map((item) => {
        if (item.id === data.id) {
          item = data;
        }
        return item;
      });
      this.updateRecordatorios(newRecordatorios);
      this.setEditarActive(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-editar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 1.5rem;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  &--active {
    display: flex;
  }
}
.form {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  &__control {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }
  &__buttons {
    display: flex;
    border-radius: 0.25rem;
  }
  &__button {
    flex-grow: 1;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    outline: none;
    color: #fff;
    &--cancelar {
      background-color: #f33;
    }
    &--actualizar {
      background-color: #3ff;
    }
  }
}
</style>