<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../stores/cartStore';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(props.product);
};

onMounted(() => {
  console.log("ProductCard mounted");
});

onUnmounted(() => {
  console.log("ProductCard unmounted");
});
</script>

<template>
  <div class="card bg-base-100 w-full shadow-xl transition-transform hover:scale-105">
    <figure class="px-5 pt-5">
      <img :src="product.image" :alt="product.title" class="rounded-xl h-48 w-full object-cover" />
    </figure>
    <div class="card-body items-center text-center p-4">
      <div v-if="product.badge" class="badge badge-secondary mb-2">{{ product.badge }}</div>
      <h2 class="card-title text-lg">{{ product.title }}</h2>
      <p class="text-xl font-bold">${{ product.price }}</p>
      <div class="card-actions mt-4 flex flex-col gap-2 w-full">
        <router-link :to="'/product/' + product.id" class="btn btn-primary btn-sm btn-outline w-full">View Details</router-link>
        <button 
          @click="addToCart" 
          :disabled="product.stock === 0" 
          class="btn btn-primary btn-sm w-full"
        >
          {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Card specific styles */
</style>
