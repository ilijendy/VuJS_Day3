<script setup>
import { useCartStore } from '../stores/cartStore';
import { computed, ref } from 'vue';

const cartStore = useCartStore();

const name = ref('');
const address = ref('');

const isFormValid = computed(() => {
  return name.value.trim().length > 0 && address.value.trim().length > 0 && cartStore.items.length > 0;
});

const handleCheckout = () => {
  if (!isFormValid.value) return;
  cartStore.clearCart();
  name.value = '';
  address.value = '';
  alert('Order placed successfully!');
};
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <div v-if="cartStore.items.length === 0" class="text-center py-10">
      <p class="text-xl text-gray-500 mb-4">Your cart is empty</p>
      <router-link to="/" class="btn btn-primary">Continue Shopping</router-link>
    </div>

    <div v-else>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="item.image" :alt="item.title" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ item.title }}</div>
                  </div>
                </div>
              </td>
              <td>${{ item.price.toFixed(2) }}</td>
              <td>{{ item.quantity }}</td>
              <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
              <td>
                <button @click="cartStore.removeFromCart(item.id)" class="btn btn-ghost btn-xs text-error">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3" class="text-right text-lg">Total:</th>
              <th class="text-lg">${{ cartStore.totalPrice.toFixed(2) }}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="flex justify-end mt-6 mb-10 space-x-2">
        <button @click="cartStore.clearCart()" class="btn btn-outline btn-error">Clear Cart</button>
      </div>

      <div class="max-w-xl mt-8 p-6 bg-base-200 rounded-2xl shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Checkout</h2>

        <form @submit.prevent="handleCheckout" class="space-y-4">
          <div>
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              v-model="name"
              type="text"
              class="input input-bordered w-full"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <textarea
              v-model="address"
              class="textarea textarea-bordered w-full"
              placeholder="Enter your shipping address"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary w-full"
            :disabled="!isFormValid"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
