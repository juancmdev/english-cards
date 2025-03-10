import { personal_pronouns } from "../database/personal_pronouns_db.js";

const lista = document.querySelector("#lista-personal_pronouns");
const template = document.querySelector("#template-personal_pronouns").content;

const fragment = document.createDocumentFragment();

personal_pronouns.forEach((pronoun) => {
  template.querySelector(".lista .card .front h2").textContent = pronoun.front;
  template.querySelector(".lista .back h2").textContent = pronoun.back;
  template.querySelector(".lista .back h3").textContent = pronoun.example;
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
