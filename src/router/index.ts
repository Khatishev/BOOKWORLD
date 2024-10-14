import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import Cart from "../components/Cart.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
