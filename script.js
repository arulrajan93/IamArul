 document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     HERO TYPING ANIMATION
  ========================= */

  const textEl = document.getElementById("typed-text");

  if (!textEl) return; // hard safety guard

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
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      textEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        setTimeout(() => (isDeleting = true), pauseAfterType);
      }
    } else {
      textEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(() => {}, pauseAfterDelete);
      }
    }

    setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeLoop();


  /* =========================
     FADE-IN ON SCROLL
  ========================= */

  const fades = document.querySelectorAll(".fade");

  if (!fades.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fades.forEach(el => observer.observe(el));
});
