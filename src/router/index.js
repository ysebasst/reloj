import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recordatorios from "../views/Recordatorios";
import Temporizador from "../views/Temporizador";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recordatorios",
    name: "Recordatorios",
    component: Recordatorios,
  },
  {
    path: "/temporizador",
    name: "Temporizador",
    component: Temporizador,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
