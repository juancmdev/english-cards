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

  const prueba = template.querySelector(".lista .card .front");

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);

lista.addEventListener("click", () => {
  lista.classList.toggle("opacity");
});
