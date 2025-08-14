<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Portfolio</span>
        <h2 class="section-title">
          <span class="title-gradient">Featured</span> Projects
        </h2>
        <p class="section-description">
          Koleksi proyek terbaik yang telah saya kerjakan dengan berbagai teknologi modern
        </p>
      </div>
      
      <div class="project-filters">
        <button 
          v-for="filter in filters" 
          :key="filter"
          class="filter-btn"
          :class="{ 'active': activeFilter === filter }"
          @click="setActiveFilter(filter)"
        >
          {{ filter }}
        </button>
      </div>
      
      <div class="projects-grid">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :tech="project.tech"
          :class="`grid-item-${(index % 3) + 1}`"
        />
      </div>
      
      <div class="section-footer">
        <button class="load-more-btn">
          <span>Load More Projects</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M8 12H16" stroke="currentColor" stroke-width="2"/>
            <path d="M12 8V16" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const activeFilter = ref('All')
const filters = ['All', 'Web App', 'Mobile', 'UI/UX', 'API']

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap seperti payment gateway, inventory management, dan analytics dashboard.',
    image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce',
    tech: ['Vue 3', 'Nuxt', 'Tailwind', 'Supabase'],
    category: 'Web App'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard analitik real-time untuk monitoring performa bisnis dengan visualisasi data yang interaktif dan responsif.',
    image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Dashboard',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'Web App'
  },
  {
    title: 'Mobile Banking App',
    description: 'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan manajemen keuangan yang aman dan user-friendly.',
    image: 'https://via.placeholder.com/400x350/f59e0b/ffffff?text=Mobile+Banking',
    tech: ['Flutter', 'Firebase', 'Node.js'],
    category: 'Mobile'
  },
  {
    title: 'Design System',
    description: 'Komprehensif design system untuk startup fintech dengan komponen UI yang konsisten dan scalable.',
    image: 'https://via.placeholder.com/400x200/06b6d4/ffffff?text=Design+System',
    tech: ['Figma', 'Storybook', 'CSS', 'Vue'],
    category: 'UI/UX'
  },
  {
    title: 'REST API Gateway',
    description: 'Microservices API gateway dengan authentication, rate limiting, dan monitoring untuk aplikasi enterprise.',
    image: 'https://via.placeholder.com/400x280/8b5cf6/ffffff?text=API+Gateway',
    tech: ['Node.js', 'Express', 'Redis', 'Docker'],
    category: 'API'
  },
  {
    title: 'Food Delivery App',
    description: 'Aplikasi food delivery dengan real-time tracking, payment integration, dan sistem rating yang komprehensif.',
    image: 'https://via.placeholder.com/400x320/ef4444/ffffff?text=Food+Delivery',
    tech: ['React Native', 'Firebase', 'Stripe'],
    category: 'Mobile'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(project => project.category === activeFilter.value)
})

const setActiveFilter = (filter) => {
  activeFilter.value = filter
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mixins;

.projects-section {
  padding: 8rem 0;
  background: linear-gradient(180deg, vars.$light 0%, #ffffff 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  
  .section-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(vars.$primary, 0.1);
    color: vars.$primary;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
  }
  
  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    color: vars.$dark;
    
    .title-gradient {
      @include mixins.gradient-text(vars.$gradient-primary);
    }
  }
  
  .section-description {
    font-size: 1.125rem;
    color: vars.$gray;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.project-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  
  .filter-btn {
    padding: 0.75rem 1.5rem;
    background: white;
    border: 2px solid rgba(vars.$gray, 0.2);
    border-radius: 2rem;
    color: vars.$gray;
    font-weight: 500;
    cursor: pointer;
    transition: all vars.$transition;
    
    &:hover {
      border-color: vars.$primary;
      color: vars.$primary;
      transform: translateY(-2px);
    }
    
    &.active {
      background: vars.$gradient-primary;
      border-color: vars.$primary;
      color: white;
      box-shadow: vars.$shadow-md;
    }
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    
    .grid-item-1 { grid-row: span 1; }
    .grid-item-2 { grid-row: span 1; }
    .grid-item-3 { grid-row: span 1; }
  }
}

.section-footer {
  text-align: center;
  
  .load-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: white;
    border: 2px solid vars.$primary;
    border-radius: vars.$border-radius;
    color: vars.$primary;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all vars.$transition;
    
    &:hover {
      background: vars.$primary;
      color: white;
      transform: translateY(-2px);
      box-shadow: vars.$shadow-md;
    }
  }
}
</style>