const timeout = document.querySelector(".timeout");
const btnAlert = document.querySelector(".btn-alert");

const btnCategories = document.querySelector(".btn-categories");

btnCategories.addEventListener("mouseenter", () => {
  console.log('Funciona');
  
})

setTimeout(() => {
  timeout.classList.add("display");
}, 3000);

btnAlert.addEventListener("click", () => {
  timeout.classList.add("display-none");
});
