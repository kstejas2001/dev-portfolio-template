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


// ================= CODING PLATFORMS =================

const codingPlatformsData = [
  {
    name: "LeetCode",
    username: "kstejas2001",
    status: "Active",
    link: "https://leetcode.com/kstejas2001/",
    bgColor: "rgba(255, 161, 22, 0.85)",
    logo: "assets/images/platforms/leetcode.png"
  },
  {
    name: "HackerRank",
    username: "kstejas2001",
    status: "Practicing",
    link: "https://www.hackerrank.com/kstejas2001",
    bgColor: "rgba(34, 197, 94, 0.85)",
    logo: "assets/images/platforms/hackerrank.png"
  },
  {
    name: "CodeChef",
    username: "kstejas2001",
    status: "Practicing",
    link: "https://www.codechef.com/users/kstejas2001",
    bgColor: "rgba(124, 58, 237, 0.85)",
    logo: "assets/images/platforms/codechef.jpeg"
  },
  {
    name: "Codeforces",
    username: "Thejas_k_s",
    status: "Learning",
    link: "https://codeforces.com/profile/Thejas_k_s",
    bgColor: "rgba(59, 130, 246, 0.85)",
    logo: "assets/images/platforms/codeforces.png"
  },
  {
    name: "Kaggle",
    username: "thejasks",
    status: "Active",
    link: "https://www.kaggle.com/thejasks",
    bgColor: "rgba(14, 165, 233, 0.85)",
    logo: "assets/images/platforms/kaggle.png"
  },
  {
    name: "HackerEarth",
    username: "kstejas2001",
    status: "Learning",
    link: "https://www.hackerearth.com/@kstejas2001",
    bgColor: "rgba(16, 185, 129, 0.85)",
    logo: "assets/images/platforms/hackerearth.png"
  }
];

const platformContainer = document.getElementById("coding-platforms");

if (platformContainer) {
  codingPlatformsData.forEach(p => {
    const card = document.createElement("a");
    card.className = "platform-card";
    card.href = p.link;
    card.target = "_blank";
    card.rel = "noopener";

    card.innerHTML = `
      <div class="platform-logo" style="background:${p.bgColor}">
        <img src="${p.logo}" alt="${p.name}">
      </div>
      <div class="platform-info">
        <div class="platform-head">
          <h3>${p.name}</h3>
          <span class="status ${p.status.toLowerCase()}">${p.status}</span>
        </div>
        <p class="platform-user">@${p.username}</p>
      </div>
    `;

    platformContainer.appendChild(card);
  });
}