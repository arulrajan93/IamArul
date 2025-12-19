const textEl = document.getElementById("typed-text");

const roles = ["Ironman", "Batman", "Arul..."];
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  const baseText = "I am ";
  const currentRole = roles[roleIndex];

  if (typing) {
    if (charIndex < currentRole.length) {
      textEl.textContent = baseText + currentRole.slice(0, charIndex + 1);
      charIndex++;
      setTimeout(typeLoop, 120);
    } else {
      typing = false;
      setTimeout(typeLoop, 900);
    }
  } else {
    if (charIndex > 0) {
      textEl.textContent = baseText + currentRole.slice(0, charIndex - 1);
      charIndex--;
      setTimeout(typeLoop, 80);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeLoop, 300);
    }
  }
}

typeLoop();

/* Scroll fade-in */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
