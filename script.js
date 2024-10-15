const timeout = document.querySelector(".timeout");
const btnAlert = document.querySelector(".btn-alert");

setTimeout(() => {
  displayNone();
  timeout.classList.add("display");
}, 3000);

btnAlert.addEventListener("click", () => {
  timeout.classList.add("display-none");
});

function displayNone() {
  console.log("funciona");

  //   setTimeout(() => {
  //     timeout.classList.remove("display");
  //   }, 3000);
}
