import { verbtobe, prueba } from "../database/verbtobe.js";

const lista = document.querySelector("#lista-verbtobe");
const template = document.querySelector("#template-verbtobe").content;

const fragment = document.createDocumentFragment();

prueba.forEach((tobe) => {
  template.querySelector(".lista .card .front h2").textContent =
    tobe.front;
  template.querySelector(".lista .back h2").textContent = tobe.back;
  template.querySelector(".lista .back h3").textContent =
    tobe.example;

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