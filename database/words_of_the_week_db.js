export const words_of_the_week = [
  {
    front: "Cabello",
    back: "Hair",
  },
  {
    front: "Nariz",
    back: "Nose",
  },
  {
    front: "Boca",
    back: "Mouth",
  },
  {
    front: "Cara",
    back: "Face",
  },
  {
    front: "Oreja",
    back: "Ear",
  },
  {
    front: "Cuello",
    back: "Neck",
  },
  {
    front: "Brazo",
    back: "Arm",
  },
  {
    front: "Pie",
    back: "Foot",
  },
  {
    front: "Pecho",
    back: "Chest",
  },
  {
    front: "Muñeca",
    back: "Wrist",
  },
  {
    front: "Cejas",
    back: "Eyebrows",
  },
  {
    front: "Hombro",
    back: "Shoulder",
  },
  {
    front: "Estómago",
    back: "Stomach",
  },
  {
    front: "Tobillo",
    back: "Ankle",
  },
  {
    front: "Ojo",
    back: "Eye",
  },
  {
    front: "Pierna",
    back: "Leg",
  },
  {
    front: "Mano",
    back: "Hand",
  },
  {
    front: "Cabeza",
    back: "Head",
  },
  {
    front: "Rodilla",
    back: "Knee",
  },
  {
    front: "Mentón",
    back: "Chin",
  },
  {
    front: "Codo",
    back: "Elbow",
  },
  {
    front: "Dibujar",
    back: "To draw",
  },
  {
    front: "Desierto",
    back: "Desert",
  },
  {
    front: "Caliente",
    back: "Hot",
  },
  {
    front: "Isla",
    back: "Island",
  },
  {
    front: "Montaña",
    back: "Mountain",
  },
  {
    front: "Lleno",
    back: "Full",
  },
  {
    front: "Vacio",
    back: "Empty",
  },
  {
    front: "Pez",
    back: "Fish",
  },
  {
    front: "Río",
    back: "River",
  },
  {
    front: "Ciudad",
    back: "City",
  },
  {
    front: "Pueblo",
    back: "Town",
  },
  {
    front: "Elefante",
    back: "Elephant",
  },
  {
    front: "Delfín",
    back: "Dolphin",
  },
  {
    front: "Ártico",
    back: "Arctic",
  },
  {
    front: "Tiburón",
    back: "Shark",
  },
  {
    front: "Oso",
    back: "Bear",
  },
  {
    front: "Árbol",
    back: "Tree",
  },
  {
    front: "Bosque",
    back: "Forest",
  },
  {
    front: "Lago",
    back: "Lake",
  },
  {
    front: "Rio",
    back: "River",
  },
  {
    front: "Playa",
    back: "Beach",
  },
  {
    front: "Tierra",
    back: "Earth",
  },
  {
    front: "Agua",
    back: "Water",
  },
  {
    front: "Sabana",
    back: "Savanna",
  },
  {
    front: "Contaminación",
    back: "Pollution",
  },
  {
    front: "Lluvia",
    back: "Rain",
  },
  {
    front: "Deforestaqción",
    back: "Deforestation",
  },
  {
    front: "Reciclar",
    back: "Recicle",
  },
  {
    front: "Océano",
    back: "Ocean",
  },
  {
    front: "Planta",
    back: "Plant",
  },
  {
    front: "Camello",
    back: "Camel",
  },
  {
    front: "Coyote",
    back: "Coyote",
  },
  {
    front: "Canguro",
    back: "Kangaroo",
  },
  {
    front: "Pulpo",
    back: "Octopus",
  },
  {
    front: "Caballo de mar",
    back: "Seahorse",
  },
  {
    front: "Oso Polar",
    back: "Polar Bear",
  },
  {
    front: "Foca",
    back: "Seal",
  },
  {
    front: "Zorro Ártico",
    back: "Artic Fox",
  },
  {
    front: "León",
    back: "Lion",
  },
  {
    front: "Jirafa",
    back: "Giraffe",
  },
  {
    front: "Guepardo",
    back: "Cheetah",
  },
  {
    front: "Tigre",
    back: "Tiger",
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
