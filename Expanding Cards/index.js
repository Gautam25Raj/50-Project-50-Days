const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActive();
    console.log(card);
    card.classList.add("active");
  });
});

function removeActive() {
  cards.forEach((cards) => {
    cards.classList.remove("active");
  });
}
