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

// {
//   front: "Amazonas",
//   back: "Leticia",
// },
// {
//   front: "Antioquia",
//   back: "Medellín",
// },
// {
//   front: "Arauca",
//   back: "Arauca",
// },
// {
//   front: "Atlántico",
//   back: "Barranquilla",
// },
// {
//   front: "Bolívar",
//   back: "Cartagena de Indias",
// },
// {
//   front: "Boyacá",
//   back: "Tunja",
// },
// {
//   front: "Caldas",
//   back: "Manizales",
// },
// {
//   front: "Caquetá",
//   back: "Florencia",
// },
// {
//   front: "Casanare",
//   back: "Yopal",
// },
// {
//   front: "Cauca",
//   back: "Popayán",
// },
// {
//   front: "Cesar",
//   back: "Valledupar",
// },
// {
//   front: "Chocó",
//   back: "Quibdó",
// },
// {
//   front: "Córdoba",
//   back: "Montería",
// },
// {
//   front: "Cundinamarca",
//   back: "Bogotá",
// },
// {
//   front: "Guainía",
//   back: "Puerto Inírida",
// },
// {
//   front: "Guaviare",
//   back: "San José del Guaviare",
// },
// {
//   front: "Huila",
//   back: "Neiva",
// },
// {
//   front: "La Guajira",
//   back: "Riohacha",
// },
// {
//   front: "Magdalena",
//   back: "Santa Marta",
// },
// {
//   front: "Meta",
//   back: "Villavicencio",
// },
// {
//   front: "Nariño",
//   back: "Pasto",
// },
// {
//   front: "Norte de Santander",
//   back: "Cúcuta",
// },
// {
//   front: "Putumayo",
//   back: "Mocoa",
// },
// {
//   front: "Quindío",
//   back: "Armenia",
// },
// {
//   front: "Risaralda",
//   back: "Pereira",
// },
// {
//   front: "San Andrés y Providencia",
//   back: "San Andrés",
// },
// {
//   front: "Santander",
//   back: "Bucaramanga",
// },
// {
//   front: "Sucre",
//   back: "Sincelejo",
// },
// {
//   front: "Tolima",
//   back: "Ibagué",
// },
// {
//   front: "Valle del Cauca",
//   back: "Cali",
// },
// {
//   front: "Vaupés",
//   back: "Mitú",
// },
// {
//   front: "Vichada",
//   back: "Puerto Carreño",
// },
