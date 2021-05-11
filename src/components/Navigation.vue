<template>
  <nav class="nav">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-link to="/" class="nav__link">
      <img src="img/bx-time.svg" alt="icon time" class="nav__icon" />
      <span class="nav__text"> Reloj</span>
    </router-link>
    <router-link to="/recordatorios" class="nav__link">
      <img src="img/bx-alarm.svg" alt="icon alarm" class="nav__icon" />
      <span class="nav__text"> Recordatorios</span>
    </router-link>
    <router-link to="/temporizador" class="nav__link">
      <img src="img/bx-timer.svg" alt="icon timer" class="nav__icon" />
      <span class="nav__text"> Temporizador</span>
    </router-link>
    <router-link to="/notas" class="nav__link">
      <img src="img/bx-notepad.svg" alt="icon notepad" class="nav__icon" />
      <span class="nav__text"> Notas</span>
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
  background-color: #aaa;
  box-shadow: 0 -1.5rem 1.5rem rgba($color: #000, $alpha: 0.25) inset;
  &__icon {
    margin-right: 0.25rem;
  }
  &__text {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    &:not(:last-of-type) {
      border-right: 1px solid rgba($color: #000, $alpha: 0.5);
    }
    &.router-link-exact-active {
      background-color: #aaa;
      filter: invert(1);
      border-right: none;
    }
  }
}
</style>