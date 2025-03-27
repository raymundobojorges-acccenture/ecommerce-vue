<!-- views/ProductDetail.vue -->
<template>
    <div>
        <h2>Product ID: {{ productId }}</h2>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    const route = useRoute()
    const productId = route.params.id
</script>