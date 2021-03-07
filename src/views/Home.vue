<template>
  <div class="content">
    <Reloj />
    <Recordatorios />
  </div>
</template>

<script>
// @ is an alias to /src
import Reloj from "@/components/Reloj.vue";
import Recordatorios from "../components/Recordatorios.vue";

export default {
  name: "Home",
  components: {
    Reloj,
    Recordatorios,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}
</style>
