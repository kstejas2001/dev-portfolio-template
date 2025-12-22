// Responsive Navbar Scrolling Behavior
let lastScroll = 0;
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Scrolling down → hide
        nav.style.transform = "translateY(-100%)";
    } else {
        // Scrolling up → show
        nav.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});

// Animate the page
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

const certificationsData = [
  {
    title: "Full Stack Web Development",
    issuer: "ParvaM",
    image: "assets/images/certs/fullstack.jpg",
    link: "#",
    bgColor: "#1f2937"
  },
  {
    title: "Python Programming",
    issuer: "Besant Technologies",
    image: "assets/images/certs/besant.jpg",
    link: "#",
    bgColor: "rgba(37, 99, 235, 0.85)"
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "1Stop",
    image: "assets/images/certs/ai.png",
    link: "https://www.1stop.ai/",
    bgColor: "rgba(249, 115, 22, 0.85)"
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Skill Builder",
    image: "assets/images/certs/aws.png",
    link: "#",
    bgColor: "rgba(31, 41, 55, 0.9)"
  }
];

const certContainer = document.getElementById("certifications");

if (certContainer) {
  certificationsData.forEach(cert => {
    const card = document.createElement("div");
    card.className = "cert-card";

    card.innerHTML = `
      <a href="${cert.link}" target="_blank" class="cert-image" style="background:${cert.bgColor}">
        <img src="${cert.image}" alt="${cert.title}">
        <div class="cert-overlay">CERTIFICATE</div>
      </a>
      <div class="cert-info">
        <h3>${cert.title}</h3>
        <p>${cert.issuer}</p>
      </div>
    `;

    certContainer.appendChild(card);
  });
}