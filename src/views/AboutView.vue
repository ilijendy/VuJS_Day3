<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("AboutView mounted");
});

onUnmounted(() => {
  console.log("AboutView unmounted");
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 text-white">

    <div
      class="max-w-5xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12 space-y-12">

      <!-- Header -->
      <div class="text-center space-y-5">
        <h1 class="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About US
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          The ultimate destination for premium footwear lovers.
l        </p>
      </div>

      <!-- Divider -->
      <div class="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <!-- Content -->
      <div class="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
        <p>
          At our store, footwear is more than just fashion — it’s identity, confidence, and movement.
          We carefully select every pair in our collection to ensure it delivers the perfect balance
          between comfort, durability, and modern design.
        </p>

        <p>
          From street-ready sneakers to performance-driven sports shoes and timeless everyday essentials,
          we bring you styles that match your lifestyle. Whether you're heading to the gym, the office,
          or out with friends, your next favorite pair is waiting here.
        </p>

        <p>
          We work with trusted brands and premium materials to guarantee long-lasting quality.
          Our goal is simple: help you step forward with confidence — every single day.
        </p>
      </div>

      <!-- Project Card -->
      <div
        class="bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:scale-[1.02] transition duration-300">

        <div class="space-y-2 text-center md:text-left">
          <h2 class="text-2xl font-bold text-primary">Project Details</h2>
          <p class="text-gray-300 font-medium">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div class="text-center md:text-right space-y-1">
          <p class="text-lg font-bold">Eng : Mohamed Elgendy</p>
          <p class="text-secondary font-semibold">
            Lorem ipsum dolor sit amet.

          </p>
        </div>

      </div>

    </div>
  </div>
</template>
<style scoped>
</style>
