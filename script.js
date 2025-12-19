// Typing animation
const textEl = document.getElementById("typed-text");

const roles = ["Ironman", "Batman", "Arul..."];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting && charIndex < currentRole.length) {
    textEl.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(typeLoop, 120);
  } else if (!deleting) {
    setTimeout(() => deleting = true, 900);
    setTimeout(typeLoop, 120);
  } else if (deleting && charIndex > 0) {
    textEl.textContent = textEl.textContent.slice(0, -1);
    charIndex--;
    setTimeout(typeLoop, 80);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeLoop, 300);
  }
}

typeLoop();

// Scroll fade-in
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

fades.forEach(el => observer.observe(el));
