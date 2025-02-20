import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
  {
    path: "/",
    name: "mainpage",
    component: Home,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
