<script setup>
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
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

      <div class="flex justify-end mt-6 space-x-2">
        <button @click="cartStore.clearCart" class="btn btn-outline btn-error">Clear Cart</button>
        <button class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</template>
