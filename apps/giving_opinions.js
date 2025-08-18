import { givingOpinions } from "../database/givingOpinions.js";

const lista = document.querySelector("#lista-givingOpinions");
const template = document.querySelector("#template-givingOptions").content;

const fragment = document.createDocumentFragment();

givingOpinions.forEach((opinion) => {
  template.querySelector(".lista .card .front h2").textContent = opinion.front;
  template.querySelector(".lista .card .back h2").textContent = opinion.back;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);

//---------------Rotate cards----------------------------------

// const toggle_cards = lista.querySelectorAll(".card");

// toggle_cards.forEach((toggle_card) => {
//   toggle_card.addEventListener("click", () => {
//     toggle_card.firstElementChild.classList.toggle("rotate-front");
//     toggle_card.lastElementChild.classList.toggle("rotate-back");
//   });
// });
