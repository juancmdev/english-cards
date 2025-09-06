export const words_of_the_week = [
  {
    front: "Entonces",
    back: "So",
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
