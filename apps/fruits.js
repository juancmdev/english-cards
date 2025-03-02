import { fruits } from "../database/fruits.js";

const lista = document.querySelector("#lista-fruits");
const template = document.querySelector("#template-fruits").content;

const fragment = document.createDocumentFragment();

fruits.forEach((fruit) => {
  template.querySelector(".lista .card .front img").src = fruit.img;
  template.querySelector(".lista .card .front img").alt = fruit.alt;
  template.querySelector(".lista .back h2").textContent = fruit.back;

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
