import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useLocalStorage } from '../composables/useLocalStorage';
import { useProductStore } from './productStore';

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', []);
  const productStore = useProductStore();

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  const addToCart = async (product) => {
    if (product.stock <= 0) return;

    const existingItem = items.value.find((item) => String(item.id) === String(product.id));
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    await productStore.decreaseStock(product.id);
  };

  const removeFromCart = (id) => {
    const index = items.value.findIndex((item) => String(item.id) === String(id));
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
