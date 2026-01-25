const words = ["empresa", "marca", "identidade"];
const element = document.querySelector(".typewriter");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        element.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1500);
        }
    } else {
        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();
