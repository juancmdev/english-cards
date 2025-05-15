const timeout = document.querySelector(".timeout");
const btnAlert = document.querySelector(".btn-alert");

const btnCategories = document.querySelector("#btn-categories");
const menuCategorias = document.querySelector("#menu-categorias");

btnCategories.addEventListener("click", () => {
  menuCategorias.classList.remove("oculto");
})

menuCategorias.addEventListener("mouseleave", () => {
  menuCategorias.classList.add("oculto");
})

setTimeout(() => {
  timeout.classList.add("display");
}, 3000);

btnAlert.addEventListener("click", () => {
  timeout.classList.add("display-none");
});
