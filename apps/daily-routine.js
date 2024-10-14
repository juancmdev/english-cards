import { daily_routine } from "../database/database.js";

const lista = document.querySelector("#lista-daily-routine");
const template = document.querySelector("#template-daily-routine").content;

const fragment = document.createDocumentFragment();

daily_routine.forEach((daily) => {
  //   template.querySelector(
  //     ".lista .card .front"
  //   ).innerHTML = `<img src="${item.img}" alt="" />`;
  template.querySelector(".lista .card .front img").src = daily.img;
  template.querySelector(".lista .card .front img").alt = daily.alt;
  template.querySelector(".lista .back h2").textContent = daily.back;

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
