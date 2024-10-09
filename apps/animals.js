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

const prueba = lista.querySelectorAll(".front");
const pruebados = lista.querySelectorAll(".back");

console.log(prueba);

prueba.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("rotate-front");
    const pruebados = lista.querySelectorAll(".back");
    pruebados.forEach((itemdos) => {
      itemdos.classList.toggle("rotate-back");
    });
  });
});
