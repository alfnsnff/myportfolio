<template>
  <section class="about-section" ref="aboutSection">
    <div class="about-container">
      <!-- Section Header -->
      <div class="about-header">
        <div class="section-number">01</div>
        <h2 class="section-title">ABOUT</h2>
      </div>

      <!-- Main Content -->
      <div class="about-content">
        <!-- Left Column - Text Content -->
        <div class="content-left">
          <div class="intro-text">
            <p class="lead-text">
              I'm a passionate fullstack developer who believes in the power of clean,
              efficient code and pixel-perfect design.
            </p>
            <p class="description">
              A fresh graduate Software Developer, specialize in creating
              modern, responsive applications using the latest technologies. My approach
              combines technical expertise with creative problem-solving to deliver
              exceptional digital experiences.
            </p>
          </div>

          <!-- Philosophy Card -->
          <div class="philosophy-card">
            <p>
              "Code is poetry in motion. Every line should serve a purpose,
              every function should tell a story, and every application should
              inspire."
              s </p>
          </div>
        </div>

        <!-- Right Column - Visual Elements -->
        <div class="content-right">

          
          <div class="skills-section">
            <h3 class="skills-title">Expertise</h3>
            <div class="skills-grid">
              <div class="skill-category">
                <h4>Frontend</h4>
                <div class="skill-tags">
                  <span class="skill-tag">Next.js</span>
                  <span class="skill-tag">Vite</span>
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">Nuxt.js</span>
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">Javascript</span>
                  <span class="skill-tag">PHP</span>
                  <span class="skill-tag">Laravel</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>Backend</h4>
                <div class="skill-tags">
                  <span class="skill-tag">Golang</span>
                  <span class="skill-tag">Gin</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">FastAPI</span>
                  <span class="skill-tag">Flask</span>
                  <span class="skill-tag">PostgreSQL</span>
                  <span class="skill-tag">MySQL</span>
                  <span class="skill-tag">Laravel</span>
                  <span class="skill-tag">PHP</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>Tools</h4>
                <div class="skill-tags">
                  <span class="skill-tag">Docker</span>
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Action -->
      <div class="section-footer">
        <div class="scroll-indicator">
          <span>Scroll to explore more</span>
          <div class="scroll-arrow">↓</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const aboutSection = ref(null)

// Add scroll-triggered animations
onMounted(() => {
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

  if (aboutSection.value) {
    const elements = aboutSection.value.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))
  }
})
</script>

<style lang="scss" scoped>
.about-section {
  background-color: #ffffff;
  color: #1a1a1a;
  min-height: auto; // Hapus min-height: 100vh
  padding: 6rem 0; // Consistent padding
  position: relative;
}

.about-container {
  max-width: 1400px; // Consistent max-width
  margin: 0 auto;
  padding: 0 2rem;
}

// Section Header
.about-header {
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
  }
}

// Main Content Layout
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

// Left Column
.content-left {
  .intro-text {
    margin-bottom: 3rem;

    .lead-text {
      font-size: 1.5rem;
      line-height: 1.4;
      font-weight: 400;
      margin-bottom: 1.5rem;
      color: #1a1a1a;
    }

    .description {
      font-size: 1rem;
      line-height: 1.6;
      color: #666;
      margin: 0;
    }
  }

  .philosophy-card {
    padding: 2rem;
    background: #f8f8f8;
    border-radius: 12px;
    text-align: center;
    border: 2px dashed #e0e0e0;
    border-radius: 12px;

    .philosophy-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #1a1a1a;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.5;
      color: #666;
      font-style: italic;
      margin: 0;
    }
  }


}

// Right Column
.content-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .skills-section {
    .skills-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .skill-category {
      h4 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
        color: #1a1a1a;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .skill-tag {
        padding: 0.5rem 1rem;
        border: 1px solid #e0e0e0;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 400;
        background: #f8f8f8;
        transition: all 0.3s ease;

        &:hover {
          background: #1a1a1a;
          color: #ffffff;
          border-color: #1a1a1a;
        }
      }
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

// Responsive Design
@media (max-width: 768px) {
  .about-container {
    padding: 0 1rem;
  }

  .about-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 3rem;

    .section-number {
      font-size: 0.9rem;
    }
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .content-right {
    .stats-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .skills-section {
    .skills-grid {
      gap: 1.5rem;
    }
  }
}

// Scroll Animation Classes
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>