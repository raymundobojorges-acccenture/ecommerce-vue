// stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  getters: {
    totalItems(state) {
      return state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    },
  },
  actions: {
    addToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cart = [];
    },
  },
});
