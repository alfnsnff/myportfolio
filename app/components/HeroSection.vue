<template>
  <section class="hero-section" ref="heroSection">
    <div class="hero-container">
      <!-- Header -->
      <div class="hero-header">
        <div class="contact-info">alfnsnff@gmail.com</div>
        <div class="location-info">
          <span class="arrow">→</span>
          <div>
            <div>OVERFULL DEVELOPER</div>
            <div>BASED CLEAN CODE, ACEH</div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="hero-content">
        <!-- Navigation Arrow - Top Level -->
        <div class="nav-arrow">
          <button class="arrow-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L12 19M12 5L7 10M12 5L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <!-- Role Tags - Middle Level -->
        <div class="role-tags">
          <span class="role-tag">FULLSTACK DEVELOPER</span>
          <span class="role-tag">PERFECTIONIST</span>
        </div>

        <!-- Action Buttons - Bottom Level -->
        <div class="action-buttons">
          <button class="action-btn close-btn">*</button>
          <button class="action-btn kix-btn">
            <span>KIX</span>
            <span class="dot">●</span>
          </button>
          <button class="action-btn akio-btn">ASEP</button>
        </div>
      </div>
      
      <!-- Main Title -->
      <div class="hero-title">
        <h1>ALFNSNFF</h1>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<style lang="scss" scoped>
.hero-section {
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  position: relative; // Ubah dari fixed ke relative
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.hero-container {
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
}

// Header
.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  z-index: 10;
}

.contact-info {
  font-weight: 400;
}

.location-info {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;

  .arrow {
    font-size: 1.2rem;
    margin-top: 0.2rem;
  }
}

.theme-toggle {
  .toggle-btn {
    width: 40px;
    height: 40px;
    border: none;
    background: #ffffff;
    color: #1a1a1a;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}

// Main Content - Staggered Layout
.hero-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  margin: 2rem 0;
  padding: 0 2rem;
}

// Navigation Arrow - Top Level (paling atas)
.nav-arrow {
  align-self: flex-start;
  margin-top: 0;

  .arrow-btn {
    width: 80px;
    height: 80px;
    border: 2px solid #ffffff;
    background: transparent;
    color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: #ffffff;
      color: #1a1a1a;
      transform: scale(1.05);
    }
  }
}

// Role Tags - Middle Level (tengah)
.role-tags {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  align-self: center;
  margin-top: 4rem;

  .role-tag {
    padding: 1rem 2rem;
    border: 2px solid #ffffff;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 0.1em;
    white-space: nowrap;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }
}

// Action Buttons - Bottom Level (paling bawah)
.action-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: flex-end;
  margin-top: 8rem;

  .action-btn {
    padding: 1rem 1.5rem;
    border: 2px solid #ffffff;
    background: transparent;
    color: #ffffff;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &.close-btn {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      background: #ffffff;
      color: #1a1a1a;

      &:hover {
        background: #f0f0f0;
        transform: translateY(-2px) scale(1.05);
      }
    }

    &.kix-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #1a1a1a;
      border-color: #555;

      .dot {
        color: #ffffff;
      }

      &:hover {
        background: #333;
        border-color: #ffffff;
      }
    }

    &.akio-btn {
      background: transparent;

      &:hover {
        background: #ffffff;
        color: #1a1a1a;
      }
    }
  }
}

// Main Title
.hero-title {
  text-align: center;
  margin: 2rem 0;

  h1 {
    font-size: clamp(4rem, 12vw, 12rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 0.9;
    margin: 0;
    color: #ffffff;
  }
}

// Footer
.hero-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;

  .made-in {
    padding: 0.5rem 1rem;
    background: #ffffff;
    color: #1a1a1a;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

// Responsive
@media (max-width: 768px) {
  .hero-container {
    padding: 1rem;
  }

  .hero-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .hero-content {
    flex-direction: column;
    gap: 3rem;
    padding: 0;
    margin: 3rem 0;
    align-items: center;

    .nav-arrow,
    .role-tags,
    .action-buttons {
      align-self: center;
      margin-top: 0;
    }
  }

  .action-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }

  .role-tags {
    order: 2;
  }

  .nav-arrow {
    order: 1;
  }

  .action-buttons {
    order: 3;
  }
}
</style>