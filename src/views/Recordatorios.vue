<template>
  <div class="recordatorios">
    <Recordatorio-form />
    <div
      class="recordatorio"
      v-for="recordatorio in recordatorios"
      :key="recordatorio.id"
    >
      <div class="recordatorio__info">
        <span class="recordatorio__titulo">{{ recordatorio.titulo }}</span>
        <span class="recordatorio__hora">
          <strong>Hora: </strong>{{ recordatorio.hora }}
        </span>
        <span class="recordatorio__fecha">
          <strong>Fecha: </strong>{{ recordatorio.fecha }}
        </span>
      </div>
      <button class="recordatorio__editar" @click="editar(recordatorio)">
        <img src="img/bxs-edit.svg" alt="icon time" class="recordatorio__img" />
      </button>
      <button
        class="recordatorio__eliminar"
        @click="borrarRecordatorio(recordatorio)"
      >
        <img
          src="img/bxs-trash.svg"
          alt="icon time"
          class="recordatorio__img"
        />
      </button>
    </div>
  </div>
</template>

<script>
import RecordatorioForm from "../components/RecordatorioForm.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: { RecordatorioForm },
  computed: {
    ...mapState(["recordatorios"]),
  },
  methods: {
    ...mapMutations(["borrarRecordatorio", "setEditarActive", "setEditarData"]),
    editar(data) {
      this.setEditarActive(true);
      this.setEditarData({ ...data });
    },
  },
};
</script>

<style lang="scss" scoped>
.recordatorios {
  display: grid;
  align-content: flex-start;
  gap: 0.25rem 0;
  padding: 1rem 0.5rem;
  max-width: 327px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
}
.recordatorio {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: calc(100vw - 1rem);
  max-width: 327px;
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  &__info {
    display: flex;
    // justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 0.5rem;
    overflow: hidden;
  }
  &__fecha,
  &__hora {
    color: #333;
  }
  &__titulo {
    margin: 0.25rem 0;
    // flex-grow: 1;
    width: 100%;
    font-weight: bold;
    white-space: nowrap;
  }
  &__hora {
    margin-right: 0.5rem;
  }
  &__editar,
  &__eliminar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    outline: none;
  }
  &__editar {
    background-color: #ffaa00;
  }
  &__eliminar {
    background-color: #f22;
  }
  &__img {
    width: 1.25rem;
  }
}
</style>
