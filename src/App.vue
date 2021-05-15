<template>
  <div id="app">
    <Navigation />
    <router-view />
    <ModalEditar />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import ModalEditar from "./components/ModalEditar";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    Navigation,
    ModalEditar,
  },
  watch: {
    routeName() {
      if (this.$route.name !== "Recordatorios") {
        this.setEditarActive(false);
      }
    },
  },
  computed: {
    ...mapState(["editarActive"]),
    routeName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapMutations(["setEditarActive"]),
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #555;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
</style>