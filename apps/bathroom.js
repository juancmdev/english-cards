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
