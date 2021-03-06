<template>
  <div class="reloj" :class="enPunto ? 'en-punto' : ''">
    <div class="reloj__content">
      <div class="hora">
        <span class="hora-actual">{{ horaActual }}</span>
        <span class="seconds">{{ seconds }}</span>
        <span class="am-pm">{{ am_pm }}</span>
      </div>
      <div class="hora__footer">
        <span class="fecha-actual">{{ fechaActual }}</span>
        <span class="dia-actual">{{ diaActual }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        new Audio("./audio/cuckoo-clock-clock.mp3").play();
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
  min-height: 100vh;
  font-weight: bold;
  font-size: 2rem;
}
.hora {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0rem 1rem;
}
.hora-actual {
  font-size: 20vw;
  line-height: 1;
  grid-row: 1 / span 2;
  align-self: center;
}
.seconds,
.am-pm {
  font-size: 8vw;
  line-height: 1;
}
.seconds {
  align-self: flex-end;
}
.hora__footer {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  justify-content: space-between;
  letter-spacing: 2px;
}
.fecha-actual,
.dia-actual {
  font-size: 4vw;
  line-height: 1;
  word-wrap: break-word;
}
.en-punto {
  filter: invert(100%);
}
</style>
