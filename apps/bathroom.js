import { bathroom } from "../database/database.js";

const lista = document.querySelector("#lista-bathroom");
const template = document.querySelector("#template-bathroom").content;

const fragment = document.createDocumentFragment();

bathroom.forEach((bath) => {
  //   template.querySelector(
  //     ".lista .card .front"
  //   ).innerHTML = `<img src="${item.img}" alt="" />`;
  template.querySelector(".lista .card .front img").src = bath.img;
  template.querySelector(".lista .card .front img").alt = bath.alt;
  template.querySelector(".lista .back h2").textContent = bath.back;

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
