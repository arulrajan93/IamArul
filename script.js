const textEl = document.getElementById("typed-text");

const words = ["I am Ironman", "I am Batman", "I am Arul..."];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    textEl.textContent = currentWord.slice(0, charIndex++);
    if (charIndex > currentWord.length) {
      setTimeout(() => deleting = true, 1000);
    }
  } else {
    textEl.textContent = currentWord.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeLoop, deleting ? 60 : 120);
}

typeLoop();
