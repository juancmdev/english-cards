export const personal_pronouns = [
  {
    front: "Yo",
    back: "I",
  },
  {
    front: "Tú, ustedes",
    back: "You",
  },
  {
    front: "Él (Persona)",
    back: "He",
  },
  {
    front: "Ella (Persona)",
    back: "She",
  },
  {
    front: "Él, eso (Animal, cosa)",
    back: "It",
  },
  {
    front: "Nosotros",
    back: "We",
  },
  {
    front: "Ellos",
    back: "They",
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

const data = shuffleArray(personal_pronouns);
