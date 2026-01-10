const textEl = document.getElementById("typed-text");

const phrases = [
  "build systems",
  "value clarity",
  "am Arul"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  const prefix = "I ";

  if (!isDeleting) {
    // Typing
    textEl.textContent =
      prefix + currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      // Pause before deleting (except last phrase)
      if (phraseIndex === phrases.length - 1) return;
      setTimeout(() => (isDeleting = true), 1200);
    }
  } else {
    // Deleting (only the phrase, not "I ")
    textEl.textContent =
      prefix + currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex++;
    }
  }

  setTimeout(typeLoop, isDeleting ? 60 : 100);
}

// Start animation
typeLoop();
