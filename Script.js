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
    setTimeout(deleteIronman, 1000);
  }
}

// delete only the word "Ironman" from the end
function deleteIronman() {
  const current = textEl.textContent;

  // While the last character is not a space, delete it
  if (current.length > 0 && current[current.length - 1] !== " ") {
    textEl.textContent = current.slice(0, -1);
    setTimeout(deleteIronman, 80);
  } else {
    // Now last character is the space after "am "
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
