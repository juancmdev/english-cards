export const words_of_the_week = [
  {
    front: "Entonces",
    back: "So",
  },
  {
    front: "Realmente",
    back: "Really",
  },
  {
    front: "Malsano",
    back: "Unhealthy",
  },
  {
    front: "Estilo de vida",
    back: "Lifestyle",
  },
  {
    front: "Ellos",
    back: "They",
  },
  {
    front: "Cada día",
    back: "Everyday",
  },
  {
    front: "Azúcar",
    back: "Sugar",
  },
  {
    front: "Pollo",
    back: "Chicken",
  },
  {
    front: "Y",
    back: "And",
  },
  {
    front: "Él (Animal o cosa)",
    back: "It",
  },
  {
    front: "Amar",
    back: "Love",
  },
  {
    front: "Dolor de estómago",
    back: "Stomachache",
  },
  {
    front: "Hermana",
    back: "Sister",
  },
  {
    front: "Odiar",
    back: "Hate",
  },
  {
    front: "Hermano",
    back: "Brother",
  },
  {
    front: "Ambriento",
    back: "Hungry",
  },
  {
    front: "Gripa",
    back: "Flu",
  },
  {
    front: "Él (Persona)",
    back: "He",
  },
  {
    front: "Ella",
    back: "She",
  },
  {
    front: "Tú, ustedes",
    back: "You",
  },
  {
    front: "Yo",
    back: "I",
  },
  {
    front: "Nosotros",
    back: "We",
  },
  {
    front: "Ellos",
    back: "They",
  },
  {
    front: "Dolor de dientes",
    back: "Toothache",
  },
  {
    front: "Dentista",
    back: "Dentist",
  },
  {
    front: "Abuelo",
    back: "Grandfather, Grandpa",
  },
  {
    front: "Diabetes",
    back: "Diabetes",
  },
  {
    front: "Ataque al corazón",
    back: "Heart attack",
  },
  {
    front: "Primo",
    back: "Cousin",
  },
  {
    front: "Presión arterial alta",
    back: "High blood pressure",
  },
  {
    front: "Hijo",
    back: "Son",
  },
  {
    front: "Hija",
    back: "Daughter",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// shuffleArray(words_of_the_week);

const data = shuffleArray(words_of_the_week);

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
