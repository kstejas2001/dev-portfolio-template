document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal for sections
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Hero image smooth hide / transform on scroll
  const heroPhoto = document.querySelector(".hero-photo");

  if (heroPhoto) {
    window.addEventListener("scroll", () => {
      const maxScroll = 300; // adjust feel
      const scrolled = Math.min(window.scrollY, maxScroll);
      const progress = scrolled / maxScroll;

      heroPhoto.style.transform = `translateY(${progress * 30}px) scale(${
        1 - progress * 0.1
      })`;
      heroPhoto.style.opacity = String(1 - progress * 0.6);
    });
  }
});