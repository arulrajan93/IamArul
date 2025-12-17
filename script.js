const textEl = document.getElementById("typed-text");
const heroContent = document.getElementById("hero-content");

const firstText = "I am Ironman";
const secondText = "Arul";

let i = 0;
let j = 0;

function typeFirst() {
  if (i < firstText.length) {
    textEl.textContent += firstText.charAt(i);
    i++;
    setTimeout(typeFirst, 120);
  } else {
    setTimeout(deleteIronman, 600);
  }
}

function deleteIronman() {
  const current = textEl.textContent;

  if (current.length > 0 && current[current.length - 1] !== " ") {
    textEl.textContent = current.slice(0, -1);
    setTimeout(deleteIronman, 80);
  } else {
    setTimeout(typeSecond, 300);
  }
}

function typeSecond() {
  if (j < secondText.length) {
    textEl.textContent += secondText.charAt(j);
    j++;
    setTimeout(typeSecond, 120);
  } else {
    heroContent.classList.remove("hidden");
  }
}

typeFirst();
