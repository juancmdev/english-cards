export const verbtobe = [
  {
    front: "Yo soy o estoy",
    back: "I am",
  },
  {
    front: "Tú eres o estás",
    back: "You are",
  },
  {
    front: "Él es o está",
    back: "He is",
  },
  {
    front: "Ella es o está",
    back: "She is",
  },
  {
    front: "Eso es o está",
    back: "It is",
  },
  {
    front: "Nosotros somos o estamos",
    back: "We are",
  },
  {
    front: "Ustedes son o están",
    back: "You are",
  },
  {
    front: "Ellos son o están",
    back: "They are",
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
