<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();

onMounted(() => {
  console.log("NavBar mounted");
});

onUnmounted(() => {
  console.log("NavBar unmounted");
});
</script>

<template>
  <div class="navbar ">
    <div class="container mx-auto w-full">
      <div class="flex-1">
        <router-link to="/" class="navbar-brand">Stepify</router-link>
      </div>
      <div class="flex-none flex items-center gap-4">
        <ul class="menu menu-horizontal nav-links">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
        </ul>

        <router-link to="/cart" class="btn btn-ghost gap-2">
          <span>Cart</span>
          <div class="indicator">
            <span class="indicator-item badge badge-secondary">
              {{ cartStore.totalItems }}
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1eaf75 0%, #1e8a5b 100%);
  color: #fff;
  box-shadow: 0 8px 32px rgba(30, 64, 175, 0.2);
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

/* Brand/Logo styling */
.navbar-brand {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.navbar-brand:hover {
  transform: translateY(-2px);
  filter: drop-shadow(0 4px 12px rgba(251, 191, 36, 0.3));
}

/* Navigation links container */
.nav-links {
  gap: 0;
}

/* Individual navigation links */
.nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  display: inline-block;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0.25rem;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: linear-gradient(90deg, #fbbf24 0%, #f97316 100%);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: #fff;
  padding-bottom: 0.25rem;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* Active link state */
.router-link-active {
  color: #fbbf24;
  font-weight: 600;
}

.router-link-active::after {
  transform: scaleX(1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar-enhanced {
    padding: 0.5rem 0;
  }

  .navbar-brand {
    font-size: 1.25rem;
    padding: 0.5rem 0.75rem;
  }

  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }

  .nav-link::after {
    left: 0.75rem;
    right: 0.75rem;
  }
}
</style>

