// services/api.js
export async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  