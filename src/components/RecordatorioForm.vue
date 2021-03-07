<template>
  <div class="wrapper">
    <div
      class="nuevo-recordatorio"
      @click="formActive = !formActive"
      role="button"
    >
      <h2 class="nuevo-recordatorio__titulo">Nuevo recordatorio</h2>
      <span class="nuevo-recordatorio__icon">+</span>
    </div>
    <form
      class="form"
      :class="{ 'form--active': formActive }"
      @submit.prevent="guardar"
    >
      <input class="form__control" type="text" placeholder="Titulo" />
      <textarea
        class="form__control"
        rows="3"
        placeholder="Descripcion"
      ></textarea>
      <input class="form__control" placeholder="Fecha" type="date" />
      <input class="form__control" placeholder="Hora" type="time" />
      <button class="form__button" type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formActive: false,
    };
  },
  methods: {
    guardar() {
      console.log("Guardado");
    },
  },
};
</script>

<style lang="scss" scoped>
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
  margin-bottom: 0.25rem;
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
    max-height: unset;
    // overflow: visible;
  }
  &__control {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: none;
    width: 100%;
    resize: none;
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
