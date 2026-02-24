<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import ProductDetails from '../components/ProductDetails.vue';
import ProductCard from '../components/ProductCard.vue';

const route = useRoute();
const productStore = useProductStore();
const productId = computed(() => route.params.id);

const product = computed(() => {
  return productStore.products?.find(p => String(p.id) === String(productId.value));
});

const relatedProducts = computed(() => {
  return productStore.products?.filter(p => String(p.id) !== String(productId.value));
});

onMounted(async () => {
  if (!productStore.products) {
    await productStore.fetchProducts();
  }
  console.log(`ProductView mounted for ID: ${productId.value}`);
});

onUnmounted(() => {
  console.log("ProductView unmounted");
});
</script>

<template>
  <div v-if="product" class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16">
    
    <div class="max-w-7xl mx-auto">
      <ProductDetails :product="product" />
    </div>

    <section class="max-w-7xl mx-auto mt-20">
      
      <div class="flex items-center gap-4 mb-10">
        <div class="h-1 w-16 bg-primary rounded-full"></div>
        <h3 class="text-3xl font-bold tracking-wide">Related Products</h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div 
          v-for="p in relatedProducts" 
          :key="p.id"
          class="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <ProductCard :product="p" />
        </div>
      </div>

    </section>
  </div>

  <div v-else-if="productStore.loading" class="min-h-screen flex justify-center items-center bg-slate-900">
    <span class="loading loading-spinner loading-lg text-primary"></span>
  </div>

  <div v-else class="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white text-center px-6">
    <h2 class="text-4xl font-bold text-error mb-6">Product Not Found</h2>
    <router-link 
      to="/" 
      class="btn btn-primary px-8"
    >
      Back to Home
    </router-link>
  </div>
</template>
<style scoped>
</style>
