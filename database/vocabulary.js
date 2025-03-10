export const vocabulary = [
  {
    front: "Debería",
    back: "Should",
  },
  {
    front: " No Debería",
    back: "Shouldn´t or Should not",
  },
  {
    front: "Comida Saludable",
    back: "Healthy Food",
  },
  {
    front: "Tener que (obligación)",
    back: "Have to",
    example: "I have to eat",
  },
  {
    front: "Manzana",
    back: "Apple",
  },
  {
    front: "Limón",
    back: "Lemon",
  },
  {
    front: "Uvas",
    back: "Grapes",
  },
  {
    front: "Banano",
    back: "Banana",
  },
  {
    front: "Brocoli",
    back: "Broccoli",
  },
  {
    front: "Fríjoles",
    back: "Beans",
  },
  {
    front: "Tomate",
    back: "Tomato",
  },
  {
    front: "Fresa",
    back: "Strawberry",
  },
  {
    front: "Aguacate",
    back: "Avocado",
  },
  {
    front: "Maiz",
    back: "Corn",
  },
  {
    front: "Zanahoria",
    back: "Carrot",
  },
  {
    front: "Arándano",
    back: "Blueberry",
  },
  {
    front: "Mora",
    back: "Blackberry",
  },
  {
    front: "Cebolla",
    back: "Onion",
  },
  {
    front: "Piña",
    back: "Pineapple",
  },

  {
    front: "Papa",
    back: "Potato",
  },
  {
    front: "Guayava",
    back: "Guava",
    example: "",
  },
  {
    front: "Lechuga",
    back: "Lettuce",
  },
  {
    front: "Ajo",
    back: "Garlic",
    example: "",
  },
  {
    front: "Coco",
    back: "Coconut",
  },
  {
    front: "Realmete me gusta",
    back: "I realy like",
  },
  {
    front: "No me gusta",
    back: "I don´t like",
  },
  {
    front: "Huevo",
    back: "Egg",
  },
  {
    front: "Ensalada",
    back: "Salad",
  },
  {
    front: "Arroz",
    back: "Rice",
  },
  {
    front: "Espagueti",
    back: "Spaghetti",
  },
  {
    front: "Carne",
    back: "Meat",
  },
  {
    front: "Café",
    back: "Coffe",
  },
  {
    front: "Leche",
    back: "Milk",
  },
  {
    front: "Queso",
    back: "Cheese",
  },
  {
    front: "Pan",
    back: "Bread",
  },
  {
    front: "Pizza",
    back: "Pizza",
  },
  {
    front: "Papas Fritas",
    back: "French Fries",
  },
  {
    front: "Helado",
    back: "Ice Cream",
  },
  {
    front: "Atún",
    back: "Tuna",
  },
  {
    front: "Sopa",
    back: "Soup",
  },
  {
    front: "Salsa",
    back: "Sausage",
  },
  {
    front: "Hamburguesa",
    back: "Burger",
  },
  {
    front: "Dulces",
    back: "Candies",
  },
  {
    front: "Donas",
    back: "Donuts",
  },
  {
    front: "Gaseosa",
    back: "Soda",
  },
  {
    front: "Demaciado",
    back: "Too much",
  },
  {
    front: "Beber",
    back: "Drink",
  },
  {
    front: "Porque",
    back: "Because",
  },
  {
    front: "Con qué frecuencia",
    back: "How Often",
  },
  {
    front: "Siempre",
    back: "Always",
  },
  {
    front: "Usualmente",
    back: "Usually",
  },
  {
    front: "Algunas veces",
    back: "Sometimes",
  },
  {
    front: "Cena",
    back: "Dinner",
  },
  {
    front: "Rara vez",
    back: "Seldom",
  },
  {
    front: "Vitaminas",
    back: "Vitamins",
  },
  {
    front: "Carbohidratos",
    back: "Carbohidrates",
  },
  {
    front: "Energía",
    back: "Energy",
  },
  {
    front: "Proteínas",
    back: "Proteins",
  },
  {
    front: "Calcio",
    back: "Calium",
  },
  {
    front: "Grasa",
    back: "Fat",
  },
  {
    front: "Aceite",
    back: "Oil",
  },
  {
    front: "Energía",
    back: "Store",
  },
  {
    front: "Reserva de Energía",
    back: "Energy Store",
  },
  {
    front: "Menú",
    back: "Menu",
  },
  {
    front: "Platos Principales",
    back: "Main Dishes",
  },
  {
    front: "Postre",
    back: "Dessert",
  },
  {
    front: "Restaurante",
    back: "Restaurant",
  },
  {
    front: "Pezcado",
    back: "Fish",
  },
  {
    front: "Lentejas",
    back: "Lentils",
  },
  {
    front: "Músculo",
    back: "Muscle",
  },
  {
    front: "Gustar",
    back: "Like",
  },
  {
    front: "Comer",
    back: "Eat",
  },
  {
    front: "Comida",
    back: "Food",
  },
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
    front: "Beber",
    back: "Drink",
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

const data = shuffleArray(vocabulary);

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

function createPaginationControls() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Crea botones o enlaces para cada página
  // Agrega event listeners para cambiar currentPage y llamar a displayPage()
}

// Inicialización
displayPage(currentPage);
createPaginationControls();

const fa_arrows_rotate = document.querySelector(".fa-arrows-rotate");

fa_arrows_rotate.addEventListener("click", () => {
  location.reload();
});
