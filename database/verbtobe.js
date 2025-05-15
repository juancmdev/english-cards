export const verbtobe = [
  {
    front: "I am",
    back: "Yo soy o Yo estoy",
  },
  {
    front: "You are",
    back: "Tú eres o Tú estás",
  },
  {
    front: "He is",
    back: "Él es o Él está",
  },
  {
    front: "She is",
    back: "Ella es o Ella está",
  },
  {
    front: "It is",
    back: "Eso es o Eso está",
  },
  {
    front: "We are",
    back: "Nosotros somos o Nosotros estamos",
  },
  {
    front: "You are",
    back: "Nosotros somos o Nosotros estamos",
  },
  {
    front: "They are",
    back: "Ellos son o Ellos están",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// shuffleArray(vocabulary);

const data = shuffleArray(verbtobe);

const itemsPerPage = 8;
let currentPage = 1;

const displayPage = (page) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  // Muestra pageData en tu elemento HTML

  return pageData;
};

export const prueba = displayPage(currentPage);
console.log(prueba);

const fa_arrows_rotate = document.querySelector(".fa-arrows-rotate");

fa_arrows_rotate.addEventListener("click", () => {
  location.reload();
});

/*-----------------------------------FUTURE IMPLEMENTATION-------------------------------------------*/

// function createPaginationControls() {
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   // Crea botones o enlaces para cada página
//   // Agrega event listeners para cambiar currentPage y llamar a displayPage()
// }

// // Inicialización
// displayPage(currentPage);
// createPaginationControls();
