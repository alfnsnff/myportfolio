<template>
  <section class="skills-section" ref="skillsSection">
    <div class="skills-container">
      <!-- Section Header -->
      <div class="skills-header">
        <div class="section-number">03</div>
        <h2 class="section-title">SKILLS</h2>
      </div>

      <!-- Skills Content -->
      <div class="skills-content">
        <!-- Featured Skill Card -->
        <div class="featured-skill">
          <div class="featured-header">
            <h3 class="featured-title">Full-Stack Development</h3>
            <p class="featured-description">
              Building end-to-end web applications with modern technologies and best practices
            </p>
          </div>
          <div class="featured-tech">
            <span v-for="tech in primaryStack" :key="tech.name" class="tech-item featured-tech-item"
              :style="{ '--delay': tech.delay }">
              <span class="tech-icon">{{ tech.icon }}</span>
              <span class="tech-name">{{ tech.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skillsSection = ref(null)

// Primary Stack
const primaryStack = ref([
  { name: 'React', delay: '0.1s' },
  { name: 'Vue.js', delay: '0.1s' },
  { name: 'Node.js', delay: '0.2s' },
  { name: 'PostgreSQL', delay: '0.3s' },
  { name: 'TypeScript', delay: '0.4s' },
  { name: 'Javascript', delay: '0.4s' },
  { name: 'Tailwind CSS', delay: '0.2s' },
  { name: 'Git/GitHub', delay: '0.2s' },
  { name: 'Python', delay: '0.2s' },
  { name: 'FastAPI', delay: '0.2s' },
  { name: 'Laravel', delay: '0.2s' },
  { name: 'PHP', delay: '0.2s' },
  { name: 'Flutter', delay: '0.2s' },
  { name: 'Dart', delay: '0.2s' },
  { name: 'Kotlin', delay: '0.2s' },
  { name: 'Docker', delay: '0.2s' },
  { name: 'Figma', delay: '0.2s' },
  { name: 'SCSS/CSS', delay: '0.2s' },
  { name: 'MySQL', delay: '0.2s' },
])

onMounted(() => {
  // Scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    },
    { threshold: 0.1 }
  )

  if (skillsSection.value) {
    const elements = skillsSection.value.querySelectorAll('.featured-skill')
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
      observer.observe(el)
    })
  }
})
</script>

<style lang="scss" scoped>
.skills-section {
  background-color: #f8f9fa;
  color: #1a1a1a;
  min-height: 100vh;
  padding: 4rem 0;
  position: relative;
}

.skills-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Section Header
.skills-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;

  .section-number {
    font-size: 1rem;
    font-weight: 500;
    color: #666;
    letter-spacing: 0.1em;
  }

  .section-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    margin: 0;
    color: #1a1a1a;
  }
}

// Featured Skill Card
.featured-skill {
  background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
  color: #ffffff;
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .featured-header {
    margin-bottom: 2rem;

    .featured-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #ffffff;
    }

    .featured-description {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #cccccc;
      margin: 0;
    }
  }

  .featured-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .featured-tech-item {
      cursor: pointer;
      gap: 0.5rem;
      padding: 0.5rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50px;
      font-weight: 500;
      transition: all 0.3s ease;
      animation: slideInUp 0.6s ease forwards;
      animation-delay: var(--delay);
      opacity: 0;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }

      .tech-icon {
        font-size: 1.2rem;
      }
    }
  }
}

// Animations
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive Design
@media (max-width: 768px) {
  .skills-container {
    padding: 0 1rem;
  }

  .skills-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .section-number {
      font-size: 0.9rem;
    }
  }

  .featured-skill {
    padding: 2rem;

    .featured-header {
      .featured-title {
        font-size: 2rem;
      }
    }

    .featured-tech {
      gap: 0.75rem;

      .featured-tech-item {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  }
}
</style>