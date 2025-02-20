<!-- views/Home.vue -->
<template>
    <div class="container mx-auto p-4">
        <Header />
        <h1 class="text-2xl font-bold mb-4">Products</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard.vue';
import Header from '../components/Header.vue';


export default {
    components: {
        ProductCard, Header,
    },
    setup() {
        const products = ref([]);

        onMounted(async () => {
            products.value = await fetchProducts();
        });

        return { products };
    },
};
</script>