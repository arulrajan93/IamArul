/* =========================
   TYPING ANIMATION (HERO)
========================= */

const textEl = document.getElementById("typed-text");

const phrases = [
  "I build systems",
  "I value clarity",
  "I am Arul"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 90;
const deletingSpeed = 60;
const pauseAfterType = 1200;
const pauseAfterDelete = 400;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Typing
    textEl.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      setTimeout(() => (isDeleting = true), pauseAfterType);
    }
  } else {
    // Deleting
    textEl.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(() => {}, pauseAfterDelete);
    }
  }

  setTimeout(
    typeLoop,
    isDeleting ? deletingSpeed : typingSpeed
  );
}

typeLoop();


/* =========================
   FADE-IN ON SCROLL
========================= */

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

fades.forEach(section => observer.observe(section));
