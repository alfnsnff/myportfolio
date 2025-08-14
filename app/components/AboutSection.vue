<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <div class="section-header">
            <span class="section-label">About Me</span>
            <h2 class="section-title">
              <span class="title-gradient">Passionate</span> Developer
            </h2>
          </div>
          
          <div class="about-description">
            <p class="lead">
              Halo! Saya seorang developer yang passionate dalam menciptakan 
              pengalaman digital yang luar biasa. Perjalanan saya dimulai dari 
              ketertarikan pada teknologi dan design.
            </p>
            
            <p>
              Dengan pengalaman lebih dari 3 tahun, saya telah mengerjakan 
              berbagai proyek mulai dari website personal hingga aplikasi 
              enterprise yang kompleks. Saya selalu antusias untuk mempelajari 
              teknologi baru dan terus mengasah kemampuan.
            </p>
          </div>
          
          <div class="about-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">🎯</div>
              <div class="highlight-content">
                <h3>Problem Solver</h3>
                <p>Mampu menganalisis dan menyelesaikan masalah kompleks dengan solusi efektif</p>
              </div>
            </div>
            
            <div class="highlight-item">
              <div class="highlight-icon">🚀</div>
              <div class="highlight-content">
                <h3>Fast Learner</h3>
                <p>Cepat beradaptasi dengan teknologi dan framework terbaru</p>
              </div>
            </div>
            
            <div class="highlight-item">
              <div class="highlight-icon">🎨</div>
              <div class="highlight-content">
                <h3>Design Minded</h3>
                <p>Memiliki eye for design dan perhatian terhadap user experience</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-visual">
          <div class="profile-card">
            <div class="card-bg"></div>
            <div class="profile-content">
              <div class="profile-avatar">
                <div class="avatar-placeholder">
                  <span>👨‍💻</span>
                </div>
                <div class="status-indicator">
                  <span class="status-dot"></span>
                  <span>Available for work</span>
                </div>
              </div>
              
              <div class="profile-info">
                <h3 class="profile-name">CrecsPlays</h3>
                <p class="profile-role">Full-Stack Developer</p>
                <div class="profile-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17L12 23L3 10C3 6 7 2 12 2S21 6 21 10Z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>Indonesia</span>
                </div>
              </div>
              
              <div class="profile-stats">
                <div class="stat-item">
                  <span class="stat-value">50+</span>
                  <span class="stat-label">Projects</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">100+</span>
                  <span class="stat-label">Commits</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">3+</span>
                  <span class="stat-label">Years</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="floating-elements">
            <div class="floating-item item-1">Vue.js</div>
            <div class="floating-item item-2">React</div>
            <div class="floating-item item-3">Node.js</div>
            <div class="floating-item item-4">TypeScript</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nothing needed here for now
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mixins;

.about-section {
  padding: 8rem 0;
  background: linear-gradient(180deg, #ffffff 0%, vars.$light 100%);
  position: relative;
  overflow: hidden;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
}

.section-header {
  margin-bottom: 2rem;
  
  .section-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(vars.$secondary, 0.1);
    color: vars.$secondary;
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
    color: vars.$dark;
    margin: 0;
    
    .title-gradient {
      @include mixins.gradient-text(vars.$gradient-accent);
    }
  }
}

.about-description {
  margin-bottom: 3rem;
  
  .lead {
    font-size: 1.25rem;
    font-weight: 500;
    color: vars.$dark;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  p {
    color: vars.$gray;
    line-height: 1.7;
    font-size: 1.125rem;
  }
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  .highlight-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    
    .highlight-icon {
      font-size: 2rem;
      min-width: 60px;
      height: 60px;
      @include mixins.flex-center;
      background: rgba(vars.$primary, 0.1);
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .highlight-content {
      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: vars.$dark;
        margin: 0 0 0.5rem 0;
      }
      
      p {
        margin: 0;
        color: vars.$gray;
        line-height: 1.6;
      }
    }
  }
}

.about-visual {
  position: relative;
  @include mixins.flex-center;
  
  @media (max-width: 968px) {
    margin-top: 2rem;
  }
}

.profile-card {
  position: relative;
  width: 400px;
  background: white;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: vars.$shadow-xl;
  overflow: hidden;
  
  @media (max-width: 640px) {
    width: 320px;
    padding: 1.5rem;
  }
  
  .card-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: vars.$gradient-primary;
    border-radius: 2rem 2rem 0 0;
  }
  
  .profile-content {
    position: relative;
    z-index: 1;
  }
}

.profile-avatar {
  text-align: center;
  margin-bottom: 1.5rem;
  
  .avatar-placeholder {
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 50%;
    @include mixins.flex-center;
    font-size: 2.5rem;
    margin: 0 auto 1rem;
    border: 4px solid white;
    box-shadow: vars.$shadow-lg;
  }
  
  .status-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
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

.profile-info {
  text-align: center;
  margin-bottom: 2rem;
  
  .profile-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: vars.$dark;
    margin: 0 0 0.5rem 0;
  }
  
  .profile-role {
    color: vars.$primary;
    font-weight: 600;
    margin: 0 0 1rem 0;
  }
  
  .profile-location {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: vars.$gray;
    font-size: 0.875rem;
  }
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  .stat-item {
    text-align: center;
    padding: 1rem;
    background: rgba(vars.$primary, 0.05);
    border-radius: vars.$border-radius;
    
    .stat-value {
      display: block;
      font-size: 1.25rem;
      font-weight: 700;
      color: vars.$primary;
    }
    
    .stat-label {
      font-size: 0.75rem;
      color: vars.$gray;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
}

.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  
  .floating-item {
    position: absolute;
    padding: 0.5rem 1rem;
    background: white;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: vars.$primary;
    box-shadow: vars.$shadow-md;
    animation: float 6s ease-in-out infinite;
    
    &.item-1 {
      top: 10%;
      left: -20%;
      animation-delay: 0s;
    }
    
    &.item-2 {
      top: 20%;
      right: -20%;
      animation-delay: -1.5s;
    }
    
    &.item-3 {
      bottom: 30%;
      left: -30%;
      animation-delay: -3s;
    }
    
    &.item-4 {
      bottom: 10%;
      right: -10%;
      animation-delay: -4.5s;
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>