import { words_of_the_week } from "../database/words_of_the_week.js";

const lista = document.querySelector("#lista-words-of-the-week");
const template = document.querySelector("#template-words-of-the-week").content;

const fragment = document.createDocumentFragment();

words_of_the_week.forEach((word) => {
  template.querySelector(".lista .card .front img").src = word.img;
  template.querySelector(".lista .card .front img").alt = word.alt;
  template.querySelector(".lista .back h2").textContent = word.back;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);

//---------------Rotate cards----------------------------------

const toggle_cards = lista.querySelectorAll(".card");

toggle_cards.forEach((toggle_card) => {
  toggle_card.addEventListener("click", () => {
    toggle_card.firstElementChild.classList.toggle("rotate-front");
    toggle_card.lastElementChild.classList.toggle("rotate-back");
  });
});