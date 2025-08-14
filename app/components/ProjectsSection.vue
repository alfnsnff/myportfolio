<template>
  <section class="projects-section" ref="projectsSection">
    <div class="projects-container">
      <!-- Section Header -->
      <div class="projects-header">
        <div class="section-number">02</div>
        <h2 class="section-title">PROJECTS</h2>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card" :class="{ featured: project.featured }">
          <div class="project-image">
            <div class="image-placeholder">
              <div class="placeholder-icon">{{ project.icon }}</div>
            </div>
            <div class="project-overlay">
              <div class="overlay-content">
                <button class="overlay-btn live-btn" @click="openDemo(project.demoUrl)">
                  <span>View Details</span>

                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" />
                  </svg>
                </button>
                <button class="overlay-btn code-btn" @click="openCode(project.codeUrl)">
                  <span>Visit</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="project-info">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>


          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="projects-cta">
        <h3>Have a project in mind?</h3>
        <p>Let's discuss how we can bring your ideas to life</p>
        <button class="cta-button" @click="startProject">
          <span>Start a Project</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" />
          </svg>
        </button>
      </div>

      <!-- Section Footer -->
      <div class="section-footer">
        <div class="scroll-indicator">
          <span>More sections below</span>
          <div class="scroll-arrow">↓</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projectsSection = ref(null)

// Projects Data
const projects = ref([
  {
    id: 1,
    title: 'TiketHebat',
    description: 'Full-stack e-commerce solution with advanced inventory management, payment integration, and real-time analytics dashboard.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    featured: true,
    demoUrl: 'https://demo-ecommerce.example.com',
    codeUrl: 'https://github.com/alfnsnff/ecommerce-platform'
  },
  {
    id: 2,
    title: 'SiLang',
    description: 'Modern portfolio site with smooth animations and responsive design.',
    technologies: ['Nuxt.js', 'SCSS', 'GSAP'],
    featured: false,
    demoUrl: 'https://portfolio.example.com',
    codeUrl: 'https://github.com/alfnsnff/portfolio'
  },
  {
    id: 3,
    title: 'Sidara',
    description: 'Cross-platform mobile app for team collaboration and task tracking.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    featured: false,
    demoUrl: 'https://taskapp.example.com',
    codeUrl: 'https://github.com/alfnsnff/task-app'
  },
  {
    id: 4,
    title: 'WebGIS',
    description: 'Complete customer relationship management system with analytics.',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    featured: false,
    demoUrl: 'https://crm.example.com',
    codeUrl: 'https://github.com/alfnsnff/crm-dashboard'
  },
  {
    id: 5,
    title: 'WeddingInvitation',
    description: 'Comprehensive UI component library with Storybook documentation.',
    technologies: ['Vue.js', 'Storybook', 'TypeScript'],
    demoUrl: 'https://design-system.example.com',
    codeUrl: 'https://github.com/alfnsnff/design-system'
  }
])

// Methods
const openDemo = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}

const openCode = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}

const startProject = () => {
  // Navigate to contact section or open contact modal
  console.log('Starting new project...')
  // You can implement navigation to contact section or open a modal
  // router.push('#contact') or emit event to parent
}

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

  if (projectsSection.value) {
    const elements = projectsSection.value.querySelectorAll('.project-card')
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
      observer.observe(el)
    })
  }
})
</script>

<style lang="scss" scoped>
.projects-section {
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  padding: 4rem 0;
  position: relative;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

// Section Header
.projects-header {
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
    color: #ffffff;
  }
}

// Projects Grid
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  .project-card {
    // background: #2a2a2a;
    // border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);

    &.animate {
      opacity: 1;
      transform: translateY(0);
    }

    &:hover {
      transform: translateY(-8px);
      // box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    &.featured {
      grid-column: span 2;
    }

    .project-image {
      position: relative;
      height: 250px;
      border-radius: 8px;
      overflow: hidden;

      .image-placeholder {
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;

        .placeholder-icon {
          font-size: 4rem;
          opacity: 0.8;
        }
      }

      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;

        .overlay-content {
          display: flex;
          gap: 1rem;
        }

        .overlay-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid #ffffff;
          background: transparent;
          color: #ffffff;
          border-radius: 50px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;

          &:hover {
            background: #ffffff;
            color: #1a1a1a;
            transform: scale(1.05);
          }

          &.code-btn:hover {
            background: #1a1a1a;
            border-color: #ffffff;
            color: #ffffff;
            border: 2px solid #1a1a1a;
          }
        }
      }

      &:hover .project-overlay {
        opacity: 1;
      }
    }

    .project-info {
      padding: 1rem 0.1rem;

      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;


        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .project-description {
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          .tech-tag {
            cursor: pointer;
            padding: 0.25rem 0.75rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            font-size: 0.8rem;
            color: #ffffff;
            transition: all 0.3s ease;

            &:hover {
              background: #ffffff;
              color: #1a1a1a;
            }
          }
        }
      }
    }
  }
}

// CTA Section
.projects-cta {
  text-align: center;
  padding: 4rem 2rem;
  border: 2px dashed #555;
  border-radius: 12px;
  margin-bottom: 4rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  p {
    color: #cccccc;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: white;
    color: #1a1a1a;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);

    }
  }
}

// Section Footer
.section-footer {
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #666;
    font-size: 0.9rem;

    .scroll-arrow {
      font-size: 1.5rem;
      animation: bounce 2s infinite;
    }
  }
}

// Animations
@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

// Responsive Design
@media (max-width: 768px) {
  .projects-container {
    padding: 0 1rem;
  }

  .projects-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .section-number {
      font-size: 0.9rem;
    }
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;

    .project-card.featured {
      grid-column: span 1;
    }
  }

  .projects-cta {
    padding: 2rem 1rem;

    h3 {
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 480px) {
  .project-card .project-image .project-overlay {
    .overlay-content {
      flex-direction: column;
      gap: 0.5rem;

      .overlay-btn {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style>