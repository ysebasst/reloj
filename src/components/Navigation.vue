<template>
  <nav class="nav">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-link to="/" class="nav__link">
      <span> Reloj</span>
    </router-link>
    <router-link to="/recordatorios" class="nav__link">
      <span> Recordatorios</span>
    </router-link>
    <router-link to="/temporizador" class="nav__link">
      <span> Temporizador</span>
    </router-link>
    <router-link to="/about" class="nav__link">
      <span> Notas</span>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  height: 48px;
  background-color: #333;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.25);
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #333;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    &:not(:last-of-type) {
      border-right: 1px solid rgba($color: #fff, $alpha: 0.25);
    }
    &.router-link-exact-active {
      // color: #42b983;
      filter: invert(1);
    }
  }
}
</style>