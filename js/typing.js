const typedTextSpan = document.querySelector("span.typed-text");
const cursorSpan = document.querySelector(".typed-text-cursor");

const textArray = [
  "is looking for a job",
  "enjoys problem solving",
  "wants to get into Data Science",
  "loves fitness!",
  "is interested in Artificial Intelligence",
  "loves travelling",
  "likes web design",
];

const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000;
let charIndex = 0;
let textArrayIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    // if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    // if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}

type();
