import { body_parts } from "../database/database.js";

const lista = document.querySelector("#lista-body-parts");
const template = document.querySelector("#template-body-parts").content;

const fragment = document.createDocumentFragment();

body_parts.forEach((body_part) => {
  template.querySelector(".lista .card .front img").src = body_part.img;
  template.querySelector(".lista .card .front img").alt = body_part.alt;
  template.querySelector(".lista .back h2").textContent = body_part.back;

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