import { ref, onMounted } from 'vue';

export function useScrollAnimation() {
  const elements = ref<HTMLElement[]>([]);

  const addElement = (element: HTMLElement) => {
    elements.value.push(element);
  };

  const initAnimations = () => {
    elements.value.forEach((el) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('animate');
            observer.unobserve(el);
          }
        });
      });

      observer.observe(el);
    });
  };

  onMounted(() => {
    initAnimations();
  });

  return {
    addElement,
  };
}