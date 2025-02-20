<!-- components/ProductCard.vue -->
<template>
    <div class="flex flex-col justify-between border rounded-lg p-4 shadow-md">
      <img :src="product.image" alt="Producto" class="h-32 mx-auto mb-2">
      <h2 class="text-lg font-bold">{{ product.title }}</h2>
      <p class="text-gray-600">${{ product.price }}</p>
      <button @click="addToCart" class="bg-green-400 text-white px-4 py-2 mt-2 w-full rounded">
        Add to Cart
      </button>
    </div>
  </template>
  
  <script>
  import { useCartStore } from "../stores/cart.js";
  
  export default {
    props: ['product'],
    setup(props) {
      const cartStore = useCartStore();
      const addToCart = () => cartStore.addToCart(props.product);
  
      return { addToCart };
    },
  };
  </script>
  