const timeout = document.querySelector(".timeout");
const btnAlert = document.querySelector(".btn-alert");

setTimeout(() => {
  timeout.classList.add("display");
}, 3000);

btnAlert.addEventListener("click", () => {
  timeout.classList.add("display-none");
});
