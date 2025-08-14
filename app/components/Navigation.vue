<template>
  <nav class="navigation" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">CrecsPlays</span>
        </NuxtLink>
      </div>
      
      <ul class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="#about">About</NuxtLink></li>
        <li><NuxtLink to="#projects">Projects</NuxtLink></li>
        <li><NuxtLink to="#contact">Contact</NuxtLink></li>
      </ul>
      
      <button class="mobile-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mixins;

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all vars.$transition;
  z-index: vars.$z-fixed;
  
  &.scrolled {
    padding: 0.5rem 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    
    .logo-text {
      @include mixins.gradient-text(vars.$gradient-primary);
    }
  }
}

.nav-container {
  @include mixins.container;
  @include mixins.flex-between;
}

.logo-link {
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
  transition: all vars.$transition;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: all vars.$transition;
    
    &:hover {
      color: vars.$accent;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: vars.$gradient-accent;
      transition: width vars.$transition;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(20px);
    transition: right 0.3s ease;
    
    &.mobile-open {
      right: 0;
    }
  }
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  
  span {
    width: 25px;
    height: 2px;
    background: white;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
}
</style>