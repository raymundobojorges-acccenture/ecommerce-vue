<template>
  <header class="bg-gradient-to-r from-green-400 via-yellow-300 to-yellow-400 p-4 text-gray-900 flex justify-between items-center rounded-lg shadow-md mb-10">
    <img src="/pinia_logo.png" alt="pinia_logo" width="40">
    <h1 class="text-xl font-bold">Pinia Store</h1>
    <router-link to="/checkout" class="relative text-gray-900 flex items-center">
      <i class="fas fa-shopping-cart text-2xl"></i>
      <span 
        v-if="cartStore.totalItems > 0"
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
        {{ cartStore.totalItems }}
      </span>
    </router-link>
  </header>
</template>

<script>
import { useCartStore } from "../stores/cart.js";

export default {
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
</style>
