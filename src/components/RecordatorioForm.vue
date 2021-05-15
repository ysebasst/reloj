<template>
  <div class="recordatorio-form">
    <div class="nuevo-recordatorio" @click="activarFormulario" role="button">
      <h2 class="nuevo-recordatorio__titulo">Nuevo recordatorio</h2>
      <span class="nuevo-recordatorio__icon">+</span>
    </div>
    <form
      class="form"
      :class="{ 'form--active': formActive }"
      @submit.prevent="guardar"
    >
      <input
        class="form__control"
        v-model="titulo"
        type="text"
        placeholder="Titulo"
        ref="campoTitulo"
      />
      <input
        class="form__control"
        v-model="fecha"
        placeholder="Fecha"
        type="date"
      />
      <input
        class="form__control"
        v-model="hora"
        placeholder="Hora"
        type="time"
      />
      <button class="form__button" type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      formActive: false,
      id: Date.now(),
      titulo: "",
      fecha: "",
      hora: "",
    };
  },
  computed: {
    ...mapState(["recordatorios"]),
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapMutations(["agregarRecordatorio"]),
    ...mapActions(["fetchData"]),
    activarFormulario() {
      this.formActive = !this.formActive;
      this.actualizarDatos();
    },
    actualizarDatos() {
      if (this.formActive) {
        this.$refs.campoTitulo.focus();
      }
      const date = new Date();
      this.id = Date.now();
      this.titulo = "";
      this.fecha = `${date.getFullYear()}-${this.normalize(
        date.getMonth() + 1
      )}-${this.normalize(date.getDate())}`;
      this.hora = `${this.normalize(date.getHours())}:${this.normalize(
        date.getMinutes()
      )}`;
    },
    guardar() {
      const newRecordatorio = {
        id: this.id,
        titulo: this.titulo,
        fecha: this.fecha,
        hora: this.hora,
      };
      if (newRecordatorio.titulo.trim() === "") {
        newRecordatorio.titulo = "undefined";
      }
      this.actualizarDatos();
      this.agregarRecordatorio(newRecordatorio);
    },
    normalize(data) {
      if (data >= 10) {
        return data.toString();
      } else {
        return data.toString().padStart(2, "00");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recordatorio-form {
  background-color: #fff;
  border-radius: 0.25rem;
}
.nuevo-recordatorio {
  cursor: pointer;
  outline: none;
  user-select: none;
  background-color: rgba(0, 170, 255, 1);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.5rem;
  &__titulo {
    margin: 0;
  }
  &__icon {
    cursor: pointer;
    outline: none;
    user-select: none;
    line-height: 1;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #0f0;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
  }
}
.form {
  display: grid;
  gap: 0.25rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s;
  &--active {
    padding: 0.5rem;
    max-height: unset;
    margin-top: 0.25rem;
    // overflow: visible;
  }
  &__control {
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.5);
    width: 100%;
  }
  &__button {
    background-color: rgba(0, 170, 255, 1);
    color: #fff;
    cursor: pointer;
    outline: none;
    user-select: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: none;
    transition: filter 0.1s;
    &:hover {
      filter: saturate(1.5);
    }
    &:active {
      filter: saturate(0.5);
    }
  }
}
</style>
