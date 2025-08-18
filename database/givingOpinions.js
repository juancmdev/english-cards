export const givingOpinions = [
  {
    front: "Yo pienso",
    back: "I think",
  },
  {
    front: "En mi opinión",
    back: "In my opinion",
  },
  {
    front: "Me gusta",
    back: "I like",
  },
  {
    front: "No me gusta",
    back: "I don't like",
  },
  {
    front: "Estoy de acuerdo",
    back: "I agree",
  },
  {
    front: "No estoy de acuerdo",
    back: " I don't agree",
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

const data = shuffleArray(givingOpinions);

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
