<template>
  <article class="project-card" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="project-image">
      <img :src="image" :alt="title" />
      <div class="project-overlay">
        <div class="overlay-content">
          <button class="view-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 12L12 15L9 12" stroke="currentColor" stroke-width="2"/>
              <path d="M12 15V3" stroke="currentColor" stroke-width="2"/>
            </svg>
            View Project
          </button>
          <button class="demo-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"/>
            </svg>
            Live Demo
          </button>
        </div>
      </div>
    </div>
    
    <div class="project-content">
      <div class="project-meta">
        <span class="project-category">Web Development</span>
        <div class="project-status">
          <span class="status-dot"></span>
          <span>Completed</span>
        </div>
      </div>
      
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      
      <div class="project-tech">
        <span v-for="t in tech" :key="t" class="tech-tag">
          {{ t }}
        </span>
      </div>
      
      <div class="project-footer">
        <div class="project-metrics">
          <div class="metric">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>{{ Math.floor(Math.random() * 1000) + 100 }}</span>
          </div>
          <div class="metric">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61A5.5 5.5 0 0 0 7.5 8.83L12 21L16.5 8.83A5.5 5.5 0 0 0 20.84 4.61Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>{{ Math.floor(Math.random() * 50) + 10 }}</span>
          </div>
        </div>
        
        <button class="bookmark-btn" :class="{ 'bookmarked': isBookmarked }" @click="toggleBookmark">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 21L12 16L5 21V5A2 2 0 0 1 7 3H17A2 2 0 0 1 19 5V21Z" stroke="currentColor" stroke-width="2" :fill="isBookmarked ? 'currentColor' : 'none'"/>
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tech: { type: Array as PropType<string[]>, default: () => [] }
})

const isBookmarked = ref(false)

const handleMouseEnter = () => {
  // Add hover animation logic if needed
}

const handleMouseLeave = () => {
  // Add leave animation logic if needed
}

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mixins;

.project-card {
  background: white;
  border-radius: vars.$border-radius * 1.5;
  overflow: hidden;
  box-shadow: vars.$shadow-md;
  transition: all vars.$transition;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: vars.$shadow-xl;
    
    .project-image img {
      transform: scale(1.1);
    }
    
    .project-overlay {
      opacity: 1;
    }
  }
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9));
    @include mixins.flex-center;
    opacity: 0;
    transition: opacity vars.$transition;
    
    .overlay-content {
      display: flex;
      gap: 1rem;
    }
    
    .view-btn, .demo-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: vars.$border-radius;
      font-weight: 600;
      cursor: pointer;
      transition: all vars.$transition;
      backdrop-filter: blur(10px);
      
      &:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
      }
    }
  }
}

.project-content {
  padding: 2rem;
}

.project-meta {
  @include mixins.flex-between;
  margin-bottom: 1rem;
  
  .project-category {
    font-size: 0.875rem;
    color: vars.$primary;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .project-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: vars.$gray;
    
    .status-dot {
      width: 8px;
      height: 8px;
      background: #22c55e;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
  }
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: vars.$dark;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.project-description {
  color: vars.$gray;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  .tech-tag {
    padding: 0.5rem 1rem;
    background: rgba(vars.$primary, 0.1);
    color: vars.$primary;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid rgba(vars.$primary, 0.2);
    transition: all vars.$transition;
    
    &:hover {
      background: vars.$primary;
      color: white;
      transform: translateY(-1px);
    }
  }
}

.project-footer {
  @include mixins.flex-between;
  
  .project-metrics {
    display: flex;
    gap: 1rem;
    
    .metric {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.875rem;
      color: vars.$gray;
      
      svg {
        opacity: 0.7;
      }
    }
  }
  
  .bookmark-btn {
    padding: 0.5rem;
    background: none;
    border: 2px solid rgba(vars.$gray, 0.2);
    border-radius: 50%;
    color: vars.$gray;
    cursor: pointer;
    transition: all vars.$transition;
    
    &:hover {
      border-color: vars.$primary;
      color: vars.$primary;
      transform: scale(1.1);
    }
    
    &.bookmarked {
      background: vars.$primary;
      border-color: vars.$primary;
      color: white;
    }
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>