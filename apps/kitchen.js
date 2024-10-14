import { kitchen } from "../database/database.js";

const lista = document.querySelector("#lista-kitchen");
const template = document.querySelector("#template-kitchen").content;

const fragment = document.createDocumentFragment();

kitchen.forEach((item) => {
  template.querySelector(".lista .card .front img").src = item.img;
  template.querySelector(".lista .card .front img").alt = item.alt;
  template.querySelector(".lista .back h2").textContent = item.back;

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
