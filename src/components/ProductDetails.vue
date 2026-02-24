<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../stores/cartStore';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

const discountedPrice = computed(() => {
  const discount = props.product.discount || 0;
  return props.product.price - (props.product.price * (discount / 100));
});

const handleBuy = () => {
  if (props.product.stock > 0) {
    cartStore.addToCart(props.product);
  }
};

onMounted(() => {
  console.log("ProductDetails mounted");
});

onUnmounted(() => {
  console.log("ProductDetails unmounted");
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-200 p-8 rounded-3xl shadow-lg">
    <div class="flex items-center justify-center">
      <img :src="product.image" :alt="product.title" class="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square" />
    </div>
    <div class="flex flex-col justify-center">
      <div v-if="product.badge" class="badge badge-secondary badge-lg mb-4">{{ product.badge }}</div>
      <h1 class="text-4xl font-extrabold mb-2">{{ product.title }}</h1>
      <div class="flex items-center gap-4 mb-6">
        <span class="text-3xl font-bold text-primary">${{ discountedPrice.toFixed(2) }}</span>
        <span v-if="product.discount > 0" class="text-xl line-through text-base-content/60">${{ product.price }}</span>
        <span v-if="product.discount > 0" class="badge badge-success">{{ product.discount }}% OFF</span>
      </div>
      <p class="text-lg text-base-content/80 mb-6 italic">"{{ product.description }}"</p>
      
      <div class="divider"></div>
      
      <div class="flex flex-wrap gap-2 mb-6" v-if="product.tags">
        <span v-for="tag in product.tags" :key="tag" class="badge badge-outline badge-info">{{ tag }}</span>
      </div>
      
      <div class="flex items-center gap-6">
        <div class="flex flex-col">
          <span class="text-sm uppercase font-semibold text-base-content/60">Availability</span>
          <span :class="['text-xl font-bold', product.stock > 0 ? 'text-success' : 'text-error']">
            {{ product.stock > 0 ? product.stock + ' in stock' : 'Out of Stock' }}
          </span>
        </div>
        <button 
          @click="handleBuy" 
          :disabled="product.stock === 0" 
          class="btn btn-primary btn-lg grow transition-all hover:scale-105"
        >
          {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Detail specific styles */
</style>
