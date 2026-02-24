import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useApi } from '../composables/useApi';

export const useProductStore = defineStore('product', () => {
  const { data: products, error, loading, getAll, update } = useApi('http://localhost:3000/products');

  const fetchProducts = async () => {
    await getAll();
  };

  const getProductById = (id) => {
    return computed(() => products.value?.find((p) => String(p.id) === String(id)));
  };

  const decreaseStock = async (productId) => {
    const product = products.value?.find((p) => String(p.id) === String(productId));
    if (product && product.stock > 0) {
      const updatedProduct = { ...product, stock: product.stock - 1 };
      await update(productId, updatedProduct);
      // Update local state after successful PUT
      const index = products.value.findIndex((p) => String(p.id) === String(productId));
      if (index !== -1) {
        products.value[index] = updatedProduct;
      }
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    getProductById,
    decreaseStock,
  };
});
