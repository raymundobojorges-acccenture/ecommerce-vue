import { createRouter, createWebHistory } from "vue-router";
import Login from "../unauth/views/Login.vue";
import HomeLayout from "../auth/layouts/HomeLayout.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: HomeLayout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
