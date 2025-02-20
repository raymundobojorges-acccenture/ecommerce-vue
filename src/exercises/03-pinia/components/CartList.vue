<!-- components/CartList.vue -->
<template>
    <div class="flex flex-col">
      <div v-for="item in cartStore.cart" :key="item.id" class="flex justify-between border-b p-2">
        <div class="w-4/12">
          <p>{{ item.title }} ({{ item.quantity }})</p>
        </div>
        <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button @click="remove(item.id)" class="text-red-600">❌</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from "../stores/cart.js";
  
  export default {
    setup() {
      const cartStore = useCartStore();
      const remove = (id) => cartStore.removeFromCart(id);
  
      return { cartStore, remove };
    },
  };
  </script>
  