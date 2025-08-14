<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="particles" ref="particlesRef"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text">
        <div class="greeting">👋 Halo, saya</div>
        <h1 class="hero-title">
          <span class="name-text">Creative Developer</span>
          <span class="subtitle-text">& UI/UX Designer</span>
        </h1>
        <p class="hero-description">
          Menciptakan pengalaman digital yang memukau dengan teknologi modern
          dan desain yang inovatif
        </p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat">
            <span class="stat-number">3+</span>
            <span class="stat-label">Years Exp</span>
          </div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Satisfaction</span>
          </div>
        </div>
        <div class="hero-actions">
          <button class="btn-primary glow">
            <span>Lihat Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
          <button class="btn-secondary">
            <span>Download CV</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15" stroke="currentColor" stroke-width="2"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2"/>
              <path d="M12 15V3" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="avatar-container">
          <div class="avatar-ring"></div>
          <div class="avatar">
            <div class="avatar-placeholder">
              <span>CP</span>
            </div>
          </div>
          <div class="tech-stack">
            <div class="tech-item" v-for="tech in techStack" :key="tech.name" :style="tech.style">
              <span>{{ tech.icon }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <div class="scroll-text">Scroll</div>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const particlesRef = ref()

const techStack = [
  { name: 'Vue', icon: '⚡', style: { '--delay': '0s', '--orbit-size': '200px' } },
  { name: 'Nuxt', icon: '🚀', style: { '--delay': '-1s', '--orbit-size': '220px' } },
  { name: 'CSS', icon: '🎨', style: { '--delay': '-2s', '--orbit-size': '240px' } },
  { name: 'JS', icon: '💻', style: { '--delay': '-3s', '--orbit-size': '260px' } },
]

const createParticles = () => {
  if (!particlesRef.value) return
  
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.top = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 20 + 's'
    particlesRef.value.appendChild(particle)
  }
}

onMounted(() => {
  createParticles()
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mixins;

.hero {
  position: relative;
  min-height: 100vh;
  @include mixins.flex-center;
  overflow: hidden;
  background: vars.$gradient-dark;
  color: white;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  
  .gradient-orbs {
    position: absolute;
    inset: 0;
    
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.6;
      @include mixins.animate-gradient;
      
      &.orb-1 {
        width: 400px;
        height: 400px;
        top: 10%;
        left: 10%;
        background: vars.$gradient-primary;
      }
      
      &.orb-2 {
        width: 300px;
        height: 300px;
        bottom: 20%;
        right: 10%;
        background: vars.$gradient-accent;
        animation-delay: -3s;
      }
      
      &.orb-3 {
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        background: linear-gradient(135deg, vars.$secondary, vars.$primary);
        animation-delay: -6s;
      }
    }
  }
  
  .particles {
    position: absolute;
    inset: 0;
    
    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: float 20s infinite linear;
    }
  }
}

.hero-content {
  @include mixins.container;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
}

.hero-text {
  .greeting {
    font-size: 1.125rem;
    color: vars.$accent;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  .hero-title {
    margin-bottom: 1.5rem;
    
    .name-text {
      display: block;
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      line-height: 1;
      @include mixins.gradient-text(vars.$gradient-primary);
    }
    
    .subtitle-text {
      display: block;
      font-size: clamp(1.5rem, 4vw, 3rem);
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 0.5rem;
    }
  }
  
  .hero-description {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 3rem;
    max-width: 500px;
  }
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  
  .stat {
    text-align: center;
    
    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 900;
      @include mixins.gradient-text(vars.$gradient-accent);
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.6);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
  
  @media (max-width: 640px) {
    justify-content: center;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
}

.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: vars.$border-radius;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all vars.$transition;
  border: none;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
  }
}

.btn-primary {
  background: vars.$gradient-primary;
  color: white;
  
  &.glow {
    @include mixins.pulse-glow(vars.$primary);
  }
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: vars.$accent;
  }
}

.hero-visual {
  display: flex;
  justify-content: center;
  
  .avatar-container {
    position: relative;
    width: 400px;
    height: 400px;
    
    @media (max-width: 640px) {
      width: 300px;
      height: 300px;
    }
  }
  
  .avatar-ring {
    position: absolute;
    inset: -20px;
    border: 2px solid transparent;
    border-radius: 50%;
    background: linear-gradient(45deg, vars.$primary, vars.$secondary, vars.$accent) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    animation: rotate 20s linear infinite;
  }
  
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    
    .avatar-placeholder {
      width: 100%;
      height: 100%;
      @include mixins.glass-effect;
      @include mixins.flex-center;
      font-size: 4rem;
      font-weight: 900;
      @include mixins.gradient-text(vars.$gradient-accent);
    }
  }
  
  .tech-stack {
    position: absolute;
    inset: 0;
    
    .tech-item {
      position: absolute;
      width: 60px;
      height: 60px;
      @include mixins.glass-effect;
      border-radius: 50%;
      @include mixins.flex-center;
      font-size: 1.5rem;
      animation: orbit 15s linear infinite;
      animation-delay: var(--delay);
      
      &:nth-child(1) { top: 0; left: 50%; margin-left: -30px; }
      &:nth-child(2) { top: 50%; right: 0; margin-top: -30px; }
      &:nth-child(3) { bottom: 0; left: 50%; margin-left: -30px; }
      &:nth-child(4) { top: 50%; left: 0; margin-top: -30px; }
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  @include mixins.flex-center;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  
  .scroll-arrow {
    width: 2px;
    height: 30px;
    background: rgba(255, 255, 255, 0.3);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 15px;
      background: vars.$gradient-primary;
      animation: scrollMove 2s ease-in-out infinite;
    }
  }
}

// Animations
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes orbit {
  0% { transform: rotate(0deg) translateX(var(--orbit-size, 200px)) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(var(--orbit-size, 200px)) rotate(-360deg); }
}

@keyframes scrollMove {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}
</style>