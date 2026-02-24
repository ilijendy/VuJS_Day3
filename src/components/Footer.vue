<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("Footer mounted");
});

onUnmounted(() => {
  console.log("Footer unmounted");
});
</script>

<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded mt-auto">
    <nav class="grid grid-flow-col gap-4">
      <router-link to="/" class="link link-hover">Home</router-link>
      <router-link to="/about" class="link link-hover">About</router-link>
      <router-link to="/product/1" class="link link-hover">Example Product</router-link>
    </nav>
    <aside>
      <p>Copyright © 2020 - All right reserved by stipfy</p>
      <p class="text-xs opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, sapiente.</p>
    </aside>
  </footer>
</template>

<style scoped>
</style>
