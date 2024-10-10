import { animals } from "../database/database.js";

const lista = document.querySelector("#lista");
const template = document.querySelector("#template").content;

const fragment = document.createDocumentFragment();

animals.forEach((animal) => {
  //   template.querySelector(
  //     ".lista .card .front"
  //   ).innerHTML = `<img src="${item.img}" alt="" />`;
  template.querySelector(".lista .card .front img").src = animal.img;
  template.querySelector(".lista .card .front img").alt = animal.alt;
  template.querySelector(".lista .back h2").textContent = animal.back;

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
