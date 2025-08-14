<template>
  <footer class="footer">
    <div class="footer-bg">
      <div class="gradient-orb"></div>
    </div>
    
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <span class="logo-text">CrecsPlays</span>
            <span class="logo-tagline">Creative Developer</span>
          </div>
          <p class="brand-description">
            Menciptakan pengalaman digital yang memukau dengan teknologi 
            modern dan desain yang inovatif. Mari berkolaborasi untuk 
            mewujudkan visi digital Anda.
          </p>
          <div class="brand-social">
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V20.5C22 21.6 21.1 22.5 20 22.5H4C2.9 22.5 2 21.6 2 20.5V16" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14A2 2 0 0 0 12 16V21H8V8H12V10A6 6 0 0 1 16 8Z" stroke="currentColor" stroke-width="2"/>
                <rect x="2" y="8" width="4" height="13" stroke="currentColor" stroke-width="2"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M23 3A10.9 10.9 0 0 1 20.1 4.1A4.48 4.48 0 0 0 22.46 2.33A9 9 0 0 1 19.5 3.5A4.48 4.48 0 0 0 15.85 2A4.48 4.48 0 0 0 11.37 6.48A12.94 12.94 0 0 1 2 3A4.48 4.48 0 0 0 3.39 8.29A4.48 4.48 0 0 1 1 7.5V7.58A4.48 4.48 0 0 0 4.6 12A4.48 4.48 0 0 1 2.5 12.5A4.48 4.48 0 0 0 6.85 16A9 9 0 0 1 1 18A12.94 12.94 0 0 0 8 20C16.5 20 21 12.5 21 6V5.5A9.27 9.27 0 0 0 23 3Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="link-group">
            <h4 class="group-title">Navigation</h4>
            <ul class="link-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4 class="group-title">Services</h4>
            <ul class="link-list">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Consulting</a></li>
              <li><a href="#">Maintenance</a></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4 class="group-title">Resources</h4>
            <ul class="link-list">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-cta">
          <h4 class="cta-title">Ready to Start?</h4>
          <p class="cta-description">
            Punya proyek menarik? Mari diskusikan dan ciptakan sesuatu yang luar biasa!
          </p>
          <div class="cta-actions">
            <a href="#contact" class="cta-btn primary">
              <span>Get In Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
            <a href="#" class="cta-btn secondary">
              <span>Download CV</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15" stroke="currentColor" stroke-width="2"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 15V3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="bottom-content">
          <p class="copyright">
            &copy; {{ currentYear }} CrecsPlays. All rights reserved.
          </p>
          <div class="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
        <div class="bottom-tech">
          <span>Built with</span>
          <div class="tech-stack">
            <span class="tech-item">Vue.js</span>
            <span class="tech-item">Nuxt</span>
            <span class="tech-item">SCSS</span>
            <span class="heart">❤️</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mixins;

.footer {
  position: relative;
  background: vars.$dark;
  color: white;
  overflow: hidden;
}

.footer-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  
  .gradient-orb {
    position: absolute;
    top: 20%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: vars.$gradient-primary;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.1;
  }
}

.footer-content {
  position: relative;
  z-index: 1;
  padding: 4rem 0 2rem;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
}

.footer-brand {
  .brand-logo {
    margin-bottom: 1.5rem;
    
    .logo-text {
      display: block;
      font-size: 2rem;
      font-weight: 900;
      @include mixins.gradient-text(vars.$gradient-primary);
      margin-bottom: 0.5rem;
    }
    
    .logo-tagline {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.6);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
  
  .brand-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 400px;
  }
  
  .brand-social {
    display: flex;
    gap: 1rem;
    
    @media (max-width: 968px) {
      justify-content: center;
    }
    
    .social-link {
      width: 50px;
      height: 50px;
      @include mixins.flex-center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: rgba(255, 255, 255, 0.7);
      transition: all vars.$transition;
      
      &:hover {
        background: vars.$primary;
        color: white;
        transform: translateY(-2px);
      }
    }
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .link-group {
    .group-title {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
    }
    
    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin-bottom: 0.75rem;
        
        a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all vars.$transition;
          font-size: 0.875rem;
          
          &:hover {
            color: vars.$primary;
            padding-left: 0.5rem;
          }
        }
      }
    }
  }
}

.footer-cta {
  .cta-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    @include mixins.gradient-text(vars.$gradient-accent);
  }
  
  .cta-description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 0.875rem;
  }
  
  .cta-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .cta-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      border-radius: vars.$border-radius;
      text-decoration: none;
      font-weight: 600;
      transition: all vars.$transition;
      
      &.primary {
        background: vars.$gradient-primary;
        color: white;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: vars.$shadow-lg;
        }
      }
      
      &.secondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.2);
        
        &:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: vars.$accent;
        }
      }
    }
  }
}

.footer-bottom {
  position: relative;
  z-index: 1;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  .bottom-content {
    @include mixins.flex-between;
    margin-bottom: 1rem;
    
    @media (max-width: 640px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    
    .copyright {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.875rem;
      margin: 0;
    }
    
    .bottom-links {
      display: flex;
      gap: 2rem;
      
      @media (max-width: 640px) {
        gap: 1rem;
      }
      
      a {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        font-size: 0.875rem;
        transition: color vars.$transition;
        
        &:hover {
          color: vars.$primary;
        }
      }
    }
  }
  
  .bottom-tech {
    @include mixins.flex-center;
    gap: 1rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
    
    .tech-stack {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      .tech-item {
        color: vars.$primary;
        font-weight: 600;
        
        &:not(:last-child):after {
          content: '•';
          margin-left: 0.5rem;
          color: rgba(255, 255, 255, 0.3);
        }
      }
      
      .heart {
        margin-left: 0.5rem;
        animation: heartbeat 2s ease-in-out infinite;
      }
    }
  }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style>