// Mise Landing Page — Minimal JS

// Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for scroll-triggered animations
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .testimonial-card').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// Nav background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 20) {
    nav.style.background = 'rgba(250, 250, 250, 0.95)';
    nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)';
  } else {
    nav.style.background = 'rgba(250, 250, 250, 0.85)';
    nav.style.boxShadow = 'none';
  }
  lastScroll = scrollY;
}, { passive: true });
