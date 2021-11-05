import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Carrito",
    name: "Carrito",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Carrito.vue"),
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue"),
  },
  {
    path: "/Nosotros",
    name: "Nosotros",
    component: () =>
      import(/* webpackChunkName: "nosotros" */ "../views/Nosotros.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/agregarProductos",
    name: "AgregarProductos",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/AgregarProductos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
