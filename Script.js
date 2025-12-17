const textEl = document.getElementById("typed-text");
const heroContent = document.getElementById("hero-content");

const fullText = "I am Ironman";
const replaceText = "Arul";

let index = 0;

// Step 1: Type "I am Ironman"
function typeIronman() {
  if (index < fullText.length) {
    textEl.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeIronman, 120);
  } else {
    setTimeout(deleteIronman, 1000);
  }
}

// Step 2: Delete only "Ironman"
function deleteIronman() {
  const current = textEl.textContent;
  if (current.endsWith("Ironman")) {
    textEl.textContent = current.slice(0, -1);
    setTimeout(deleteIronman, 80);
  } else {
    setTimeout(typeArul, 400);
  }
}

// Step 3: Type "Arul"
let arulIndex = 0;
function typeArul() {
  if (arulIndex < replaceText.length) {
    textEl.textContent += replaceText.charAt(arulIndex);
    arulIndex++;
    setTimeout(typeArul, 120);
  } else {
    heroContent.classList.add("show");
  }
}

// Start animation
typeIronm an();
