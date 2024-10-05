import { data } from "./database/database.js";

const lista = document.querySelector("#lista");
const template = document.querySelector("#template").content;

const fragment = document.createDocumentFragment();

data.forEach((item) => {
  //   template.querySelector(
  //     ".lista .card .front"
  //   ).innerHTML = `<img src="${item.img}" alt="" />`;
  template.querySelector(".lista .card .front img").src = item.img;
  template.querySelector(".lista .card .front img").alt = "imagen";
  template.querySelector(".lista .back h2").textContent = item.back;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
