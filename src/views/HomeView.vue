<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import CarouselBanner from '../components/CarouselBanner.vue';
import ProductCard from '../components/ProductCard.vue';

const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchProducts();
  console.log(`HomeView mounted — products fetched`);
});

onUnmounted(() => {
  console.log("HomeView unmounted");
});
</script>

<template>
  <div class="space-y-12">
    <CarouselBanner />
    
    <section>
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-extrabold tracking-tight">Our Products</h2>
        <div v-if="productStore.products" class="badge badge-lg badge-outline">{{ productStore.products.length }} Items</div>
      </div>
      
      <div v-if="productStore.loading" class="flex justify-center py-20">
        <span class="loading loading-spinner loading-lg text-primary"></span>
      </div>

      <div v-else-if="productStore.error" class="alert alert-error">
        <span>{{ productStore.error }}</span>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard 
          v-for="product in productStore.products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Home específico */
</style>
