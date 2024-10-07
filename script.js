barba.init({
  transitions: [
    {
      name: "prueba",
      leave(data) {
        var done = this.async();
        document.body.classList.add("loading");
        setTimeout(function () {
          done();
        }, 300);
      },
      enter(data) {
        var done = this.async();
        document.body.classList.add("loading");
        setTimeout(function () {
          done();
        }, 300);
      },
    },
  ],
});

const front = document.querySelectorAll(".back");

console.log(front);
