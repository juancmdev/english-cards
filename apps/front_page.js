import { front_pages } from "../database/database.js";

const lista = document.querySelector("#lista-front-page");
const template = document.querySelector("#template-front-page").content;
console.log(template);

const fragment = document.createDocumentFragment();

front_pages.forEach((front_page) => {
  //   template.querySelector(
  //     ".lista .card .front"
  //   ).innerHTML = `<img src="${item.img}" alt="" />`;
  template.querySelector(".lista a").href = front_page.a;
  template.querySelector("img").src = front_page.img;
  template.querySelector("a h2").textContent = front_page.text;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
