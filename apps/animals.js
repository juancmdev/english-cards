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

//-------------------------no funciona hacia abajo

const prueba = lista.querySelectorAll(".card");

prueba.forEach((item) => {
  item.addEventListener("click", () => {
    item.firstElementChild.classList.toggle("rotate-front");
    item.lastElementChild.classList.toggle("rotate-back");
  });
});
