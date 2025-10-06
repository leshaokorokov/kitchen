const burgerMenu = document.querySelector(".burger-menu");
const mobilMenu = document.querySelector(".mobil-menu");
const burgerMenuClose = document.querySelector(".burger-menu-close");

burgerMenu.addEventListener("click", () => {
  mobilMenu.classList.add("active");
});

burgerMenuClose.addEventListener("click", () => {
  mobilMenu.classList.remove("active");
});

const portfolioButton = document.querySelector(".portfolio__button");
const hiddenCards = document.querySelectorAll(
  ".portfolio__card:nth-child(n+7)"
);

portfolioButton.addEventListener("click", () => {
  hiddenCards.forEach((card) => {
    card.classList.add("open");
    portfolioButton.style.display = "none";
  });
});
