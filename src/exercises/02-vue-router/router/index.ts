import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Checkout from "../views/Checkout.vue";
import Login from "../../../unauth/views/Login.vue"
import ProductDetail from "../views/ProductDetail.vue"

const routes = [
  {
    path: "/",
    name: "Mainpage",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductDetail,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
