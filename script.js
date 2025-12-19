const textEl = document.getElementById("typed-text");

const prefix = "I am ";
const words = ["Ironman", "Batman", "Arul..."];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

textEl.textContent = prefix;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    textEl.textContent = prefix + currentWord.slice(0, charIndex++);
    if (charIndex > currentWord.length) {
      setTimeout(() => deleting = true, 1000);
    }
  } else {
    textEl.textContent = prefix + currentWord.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeLoop, deleting ? 70 : 120);
}

typeLoop();
