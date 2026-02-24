<script setup>
import { onMounted, onUnmounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

onMounted(() => {
  console.log("App mounted");
});

onUnmounted(() => {
  console.log("App unmounted");
});
</script>

<template>
  <div class="min-h-screen bg-base-100 flex flex-col pb-10">
    <NavBar />
    <main class="container mx-auto px-4 mt-8 mb-20 flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
</style>
