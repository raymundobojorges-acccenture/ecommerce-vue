<!-- views/Checkout.vue -->
<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Shopping cart</h1>
  
      <div v-if="cartStore.cart.length === 0">
        <p>Your cart is empty</p>
        <router-link to="/" class="text-blue-600">Return to the store</router-link>
      </div>
  
      <div v-else>
        <CartList />
        <p class="text-lg font-bold mt-4">Total: ${{ cartStore.totalPrice }}</p>
        <button @click="checkout" class="bg-green-600 text-white px-4 py-2 mt-2 rounded">
          Procced to payment
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cart';
  import CartList from '../components/CartList.vue';
  
  export default {
    components: { CartList },
    setup() {
      const cartStore = useCartStore();
      const checkout = () => {
        alert('¡Purchase completed successfully!');
        cartStore.clearCart();
      };
  
      return { cartStore, checkout };
    },
  };
  </script>
  