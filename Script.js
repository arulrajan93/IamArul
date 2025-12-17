const textElement = document.getElementById("typed-text");
const heroContent = document.getElementById("hero-content");

const words = ["I am Ironman", "I am Arul"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    textElement.textContent = currentWord.slice(0, charIndex++);
    if (charIndex > currentWord.length) {
      setTimeout(() => deleting = true, 1000);
    }
  } else {
    textElement.textContent = currentWord.slice(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      wordIndex++;
      if (wordIndex === words.length) {
        heroContent.classList.add("show");
        return;
      }
    }
  }
  setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();
