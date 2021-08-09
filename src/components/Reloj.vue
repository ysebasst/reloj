<template>
  <div
    class="reloj"
    :class="{ 'en-punto': enPunto, 'reloj--minimized': minimized }"
  >
    <div class="reloj__content">
      <div class="reloj__hora-completa">
        <span class="reloj__hora">{{ horaActual }}</span>
        <div class="reloj__seconds-am-pm">
          <span class="reloj__seconds">{{ seconds }}</span>
          <span class="reloj__am-pm">{{ am_pm }}</span>
        </div>
      </div>
      <div class="reloj__fecha-dia">
        <span class="reloj__fecha">{{ fechaActual }}</span>
        <span class="reloj__dia">{{ diaActual }}</span>
      </div>
    </div>
    <span
      role="button"
      class="reloj__button"
      :class="{ 'reloj__button--minimized': minimized }"
      @click="minimized = !minimized"
    ></span>
    <audio ref="hora_enPunto" src="audio/cuckoo-clock-clock.mp3"></audio>
    <audio ref="hora_recordatorio" src="audio/samsung-lg-alarm.mp3"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minimized: false,
      horaActual: "00:00",
      seconds: "00",
      am_pm: "AM",
      fechaActual: "1 Enero 2000",
      diaActual: "Lunes",
      enPunto: false,
      arrayMes: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      arraySemana: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ],
    };
  },
  created() {
    setInterval(this.actualizarHora, 1000);
  },
  methods: {
    actualizarHora() {
      const date = new Date();
      // Hora Actual
      let newHour = date.getHours();
      if (newHour === 0) {
        newHour = 12;
      } else if (newHour > 12) {
        newHour -= 12;
      }
      const hora = this.normalize(newHour);
      const minutos = this.normalize(date.getMinutes());
      const segundos = this.normalize(date.getSeconds());
      this.horaActual = `${hora}:${minutos}`;
      this.seconds = segundos;
      this.am_pm = date.getHours() >= 12 ? "PM" : "AM";
      // Fecha Actual
      const dia = date.getDate();
      const mes = this.arrayMes[date.getMonth()];
      const year = date.getFullYear();
      this.fechaActual = `${dia} ${mes} ${year}`;
      // Dia Actual
      this.diaActual = this.arraySemana[date.getDay()];
      this.comprobarHora();
    },
    normalize(dato) {
      return dato.toString().padStart(2, "00");
    },
    comprobarHora() {
      const date = new Date();
      if (date.getMinutes() === 0 && date.getSeconds() === 0) {
        // this.$refs.hora_enPunto.play();
        // this.$refs.hora_recordatorio.play();
      }
      if (date.getMinutes() === 0 && date.getSeconds() % 2 === 0) {
        this.enPunto = true;
      } else {
        this.enPunto = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reloj {
  background-color: #555;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  font-weight: bold;
  position: relative;
  min-height: calc(100vh - 48px);
  user-select: none;

  &--minimized {
    min-height: unset;
    .reloj__hora {
      font-size: 24vmin;
    }
    .reloj__seconds,
    .reloj__am-pm {
      font-size: 10vmin;
    }
    .reloj__fecha,
    .reloj__dia {
      font-size: 6vmin;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__hora-completa {
    display: flex;
  }
  &__hora {
    flex: 1 1 100%;
    font-size: 24vw;
    line-height: 1;
    grid-row: 1 / span 2;
    align-self: center;
  }
  &__seconds-am-pm {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__seconds,
  &__am-pm {
    font-size: 10vw;
    line-height: 1;
  }
  &__fecha-dia {
    display: flex;
  }
  &__fecha,
  &__dia {
    font-size: 6vw;
    line-height: 1;
    white-space: nowrap;
  }
  &__fecha {
    flex: 1 1 100%;
  }
  &__button {
    background-color: #555;
    font-size: 2rem;
    cursor: pointer;
    outline: 0;
    user-select: none;
    display: block;
    text-align: center;
    padding: 0.5rem;
    width: 100%;
    transition: filter 0.3s;
    &::after {
      content: "▲";
    }
    &--minimized {
      &::after {
        content: "▼";
      }
    }
    @media screen and (min-width: 992px) {
      &:hover {
        filter: brightness(0.75);
      }
      &:active {
        filter: brightness(1.25);
      }
    }
  }
}
.en-punto {
  filter: invert(100%);
}
</style>
