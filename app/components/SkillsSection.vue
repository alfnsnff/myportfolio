<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Skills & Expertise</span>
        <h2 class="section-title">
          <span class="title-gradient">Technical</span> Skills
        </h2>
        <p class="section-description">
          Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital yang powerful
        </p>
      </div>
      
      <div class="skills-grid">
        <div class="skills-category">
          <div class="category-header">
            <div class="category-icon">💻</div>
            <h3 class="category-title">Frontend Development</h3>
          </div>
          <div class="skills-list">
            <div v-for="skill in frontendSkills" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: skill.level + '%' }"
                  :data-level="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <div class="category-header">
            <div class="category-icon">⚙️</div>
            <h3 class="category-title">Backend Development</h3>
          </div>
          <div class="skills-list">
            <div v-for="skill in backendSkills" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill backend" 
                  :style="{ width: skill.level + '%' }"
                  :data-level="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <div class="category-header">
            <div class="category-icon">🎨</div>
            <h3 class="category-title">Design & Tools</h3>
          </div>
          <div class="skills-list">
            <div v-for="skill in designSkills" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill design" 
                  :style="{ width: skill.level + '%' }"
                  :data-level="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-category">
          <div class="category-header">
            <div class="category-icon">📱</div>
            <h3 class="category-title">Mobile & Others</h3>
          </div>
          <div class="skills-list">
            <div v-for="skill in mobileSkills" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill mobile" 
                  :style="{ width: skill.level + '%' }"
                  :data-level="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skills-footer">
        <div class="experience-summary">
          <h3>Professional Experience</h3>
          <div class="experience-grid">
            <div class="experience-item">
              <div class="exp-icon">🏢</div>
              <div class="exp-content">
                <h4>Freelance Developer</h4>
                <p>2021 - Present</p>
                <span>Web & Mobile Development</span>
              </div>
            </div>
            <div class="experience-item">
              <div class="exp-icon">🎓</div>
              <div class="exp-content">
                <h4>Self-Taught</h4>
                <p>2020 - Present</p>
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frontendSkills = [
  { name: 'Vue.js', level: 90 },
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 80 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Tailwind CSS', level: 88 }
]

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'REST APIs', level: 88 },
  { name: 'GraphQL', level: 65 }
]

const designSkills = [
  { name: 'Figma', level: 85 },
  { name: 'Adobe XD', level: 75 },
  { name: 'Photoshop', level: 70 },
  { name: 'UI/UX Design', level: 82 },
  { name: 'Responsive Design', level: 90 },
  { name: 'Design Systems', level: 78 }
]

const mobileSkills = [
  { name: 'React Native', level: 75 },
  { name: 'Flutter', level: 60 },
  { name: 'PWA', level: 80 },
  { name: 'Ionic', level: 55 },
  { name: 'Cordova', level: 50 },
  { name: 'App Store Deploy', level: 65 }
]
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mixins;

.skills-section {
  padding: 8rem 0;
  background: vars.$dark;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.1;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
  
  .section-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(vars.$accent, 0.2);
    color: vars.$accent;
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
    
    .title-gradient {
      @include mixins.gradient-text(vars.$gradient-accent);
    }
  }
  
  .section-description {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.skills-category {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: vars.$border-radius * 1.5;
  padding: 2rem;
  transition: all vars.$transition;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-4px);
  }
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  .category-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    @include mixins.flex-center;
    background: rgba(vars.$primary, 0.2);
    border-radius: 50%;
  }
  
  .category-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
  }
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  .skill-info {
    @include mixins.flex-between;
    margin-bottom: 0.5rem;
    
    .skill-name {
      font-weight: 600;
    }
    
    .skill-level {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }
  }
  
  .progress-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    
    .progress-fill {
      height: 100%;
      background: vars.$gradient-primary;
      border-radius: 4px;
      transition: width 2s ease-out;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -10px;
        width: 10px;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
        animation: shimmer 2s infinite;
      }
      
      &.backend {
        background: vars.$gradient-accent;
      }
      
      &.design {
        background: linear-gradient(135deg, #ec4899, #8b5cf6);
      }
      
      &.mobile {
        background: linear-gradient(135deg, #06b6d4, #3b82f6);
      }
    }
  }
}

.skills-footer {
  margin-top: 4rem;
  
  .experience-summary {
    text-align: center;
    
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      @include mixins.gradient-text(vars.$gradient-primary);
    }
    
    .experience-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .experience-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: vars.$border-radius;
      border: 1px solid rgba(255, 255, 255, 0.1);
      
      .exp-icon {
        font-size: 2rem;
        min-width: 60px;
        height: 60px;
        @include mixins.flex-center;
        background: rgba(vars.$accent, 0.2);
        border-radius: 50%;
      }
      
      .exp-content {
        text-align: left;
        
        h4 {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }
        
        p {
          color: vars.$accent;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          font-size: 0.875rem;
        }
        
        span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }
      }
    }
  }
}

@keyframes shimmer {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
</style>