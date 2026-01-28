const buttons = document.querySelectorAll(".request > button");

for (let count = 0; count < buttons.length; count++) {
  buttons[count].onclick = () => {
    const cardsName = document.querySelectorAll(
      ".grid-cards > .card > .info > span",
    );
    const subject = (document.querySelector("#subject").value =
      cardsName[count].textContent);
  };
}
