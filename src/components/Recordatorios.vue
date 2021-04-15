<template>
  <div class="recordatorios">
    <Recordatorio-form />
    <div
      class="recordatorio"
      v-for="recordatorio in recordatorios"
      :key="recordatorio.id"
    >
      <span class="recordatorio__titulo">{{ recordatorio.titulo }}</span>
      <span class="recordatorio__fecha">{{ recordatorio.fecha }}</span>
      <span class="recordatorio__hora">{{ recordatorio.hora }}</span>
      <button class="recordatorio__editar">#</button>
      <button class="recordatorio__eliminar">X</button>
    </div>
  </div>
</template>

<script>
import RecordatorioForm from "./RecordatorioForm.vue";
import { mapState } from "vuex";
export default {
  components: { RecordatorioForm },
  computed: {
    ...mapState(["recordatorios"]),
  },
};
</script>

<style lang="scss" scoped>
.recordatorios {
  display: grid;
  align-content: flex-start;
  gap: 0.25rem 0;
  padding: 1rem;
  overflow-y: auto;
}
.recordatorio {
  background-color: #fff;
  display: flex;
  gap: 0 0.125rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  &__titulo,
  &__fecha,
  &__hora {
    white-space: nowrap;
  }
  &__titulo {
    flex: 1 1 100%;
  }
}
</style>
