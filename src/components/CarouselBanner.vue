<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("CarouselBanner mounted");
});

onUnmounted(() => {
  console.log("CarouselBanner unmounted");
});
</script>

<template>
  <div class="carousel w-full rounded-box h-64 md:h-96">
    <div id="slide1" class="carousel-item relative w-full">
      <img src="https://png.pngtree.com/png-clipart/20220417/original/pngtree-tmall-taobao-e-commerce-men-s-shoes-british-poster-banner-template-png-image_7527449.png" class="w-full object-cover" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
      <div class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white bg-black/50 p-4 rounded-lg text-center">
        <h2 class="text-3xl font-bold">New Collection</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img src="https://euroselectgolf.co.uk/wp-content/uploads/2025/06/25SS_GO_Footwear_Elevate2_Paid-Social_Version-H_Carousel_1080x1080-scaled.png" class="w-full object-cover" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
       <div class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white bg-black/50 p-4 rounded-lg text-center">
        <h2 class="text-3xl font-bold">New Collection</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img src="https://www.shutterstock.com/image-photo/female-hands-different-stylish-shoes-260nw-2445641531.jpg" class="w-full object-cover" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
       <div class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white bg-black p-4 rounded-lg text-center">
        <h2 class="text-3xl font-bold">New Collection</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Carousel smooth transitions */
.carousel {
  scroll-behavior: smooth;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.carousel-item {
  transition: opacity 0.6s ease-in-out;
}

.carousel-item img {
  transition: transform 0.6s ease-in-out;
}

.carousel-item:target img {
  transform: scale(1.02);
}

/* Navigation button enhancements */
.btn-circle {
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-circle:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.btn-circle:active {
  transform: scale(0.95);
}

/* Absolute positioning base styles */
.absolute {
  transition: all 0.3s ease;
}

/* Navigation buttons container */
.absolute.left-5 {
  animation: fadeIn 0.6s ease-out 0.2s backwards;
  z-index: 20;
}

/* Text overlay improvements */
.absolute.bottom-5 {
  animation: slideUp 0.8s ease-out 0.3s backwards;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
  backdrop-filter: blur(8px);
  border-left: 4px solid rgba(255, 255, 255, 0.3);
  z-index: 10;
}

h2 {
  animation: fadeInScale 0.7s ease-out 0.5s backwards;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

p {
  animation: fadeIn 0.7s ease-out 0.7s backwards;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-top: 0.5rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive improvements */
@media (max-width: 768px) {
  .absolute.bottom-5 {
    bottom: 0.75rem;
    left: 1rem;
    right: 1rem;
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.875rem;
  }
}
</style>

