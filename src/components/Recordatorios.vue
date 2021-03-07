<template>
  <div class="recordatorios">
    <Recordatorio-form />
  </div>
</template>

<script>
import RecordatorioForm from "./RecordatorioForm.vue";
export default {
  components: { RecordatorioForm },
};
</script>

<style lang="scss" scoped>
.recordatorios {
  padding: 1rem;
  overflow-y: auto;
}
</style>
