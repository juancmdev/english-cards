barba.init({
  transitions: [
    {
      name: "prueba",
      leave(data) {
        // create your stunning leave animation here
        var done = this.async();
        document.body.classList.add("loading");
        setTimeout(() => {
          done();
        }, 300);
      },
      enter(data) {
        // create your stunning leave animation here
        var done = this.async();
        document.body.classList.add("loading");
        setTimeout(() => {
          done();
        }, 3000);
      },
    },
  ],
});
