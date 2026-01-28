const navbar = document.querySelector(".navbar");
const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsRight = document.querySelectorAll(".hiddenRight");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    // quando o scroll passa de 10px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  hiddenElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });

  hiddenElementsRight.forEach((element) => {
    const elementRight = element.getBoundingClientRect().top;

    if (elementRight < triggerBottom) {
      element.classList.add("showRight");
    } else {
      element.classList.remove("showRight");
    }
  });
});
