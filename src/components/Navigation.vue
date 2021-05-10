<template>
  <nav class="nav">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-link to="/" class="nav__link">1</router-link>
    <router-link to="/recordatorios" class="nav__link">2</router-link>
    <router-link to="/about" class="nav__link">3</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: flex-start;
  padding: 0.25rem;
  background-color: #333;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.25);
  &__link {
    --size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    border-radius: 0.25rem;
    border: 1px solid #fff;
    background-color: #333;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    &:not(:first-of-type) {
      margin-left: 0.5rem;
    }
    &.router-link-exact-active {
      // color: #42b983;
      filter: invert(1);
    }
  }
}
</style>