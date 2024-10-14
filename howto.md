# Como incluir nuevos archivos:

- En pages crear el archivo htlm de la página en este caso bedroom.html.
- Localizo dentro de pages el archivo template.html, copio todo su contenido y lo pego en la nueva página que quiero trabajar en este caso en bedroom.html.
- Ubico todos los asteriscos e identifico lo que debo empezar a cambiar.
- Copio el id de la ul donde quiero insertar el contenido, busco el archivo styles.css, ahí ubico el css que contiene lo siguiente:

```
#lista,
#lista-front-page,
#lista-partsOfHouse,
#lista-bathroom,
#lista-daily-routine {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 40px;
}
```

- Pego el id que copié anteriormente lo cual quedaría:

```
#lista,
#lista-front-page,
#lista-partsOfHouse,
#lista-bathroom,
#lista-daily-routine,
#lista-bedroom {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 40px;
}
```

- Localizo la carpeta database y en el archivo database.js, al final del archivo se encuentra el siguiente template:

```
export const ***** = [
  {
    img: "/imgs/******.jpg",
    back: "text here",
    alt: "text here image",
  },
];
```

- Remplazo los asteriscos por los valores a ingresar así (aquí van todas las rutas de las imágenes y toda la información):

```
export const bedroom = [
  {
    img: "/imgs/ruta-a-la-imagen.jpg",
    back: "texto de la imagen",
    alt: "texto de la imagen image",
  },
];
```

- En la parte superior del archivo database.js se encuentra el objeto front_page, ahí colocamos la información que irá en la página principal:

```
export const front_pages = [
  {
    a: "/pages/animals.html",
    img: "/imgs/animals/monkey.jpg",
    alt: "Animals page image",
    text: "Animals",
  },
  {
    a: "/pages/partsOfHouse.html",
    img: "/imgs/parts_of_house/kitchen.jpg",
    alt: "Parts of house page image",
    text: "Parts of house",
  },

  {
    a: "/pages/bathroom.html",
    img: "/imgs/bathroom/bathroom.jpg",
    alt: "Bathroom page image",
    text: "Bathroom",
  },

  {
    a: "/pages/daily-routine.html",
    img: "/imgs/daily-routine/have_breakfast.jpg",
    alt: "Daily Routine page image",
    text: "Daily Routine",
  },

 {
    a: "/pages/bedroom.html",
    img: "/imgs/bedroom/bedroom.jpg",
    alt: "Bedroom page image",
    text: "Bedroom",
  },
];
```

- Ubico la carpeta apps y creo un nuevo archivo, en este caso se llama bedroom.js.
- Localizo el archivo template.js, copio todo su contenido y lo pego para este caso en debroom.js.
- Remplazo los asteriscos por sus valores correspondientes de bedroom.html y bedrooo.js:

```
import { ******* } from "../database/database.js";

const lista = document.querySelector("#lista-********");
const template = document.querySelector("#template-********").content;

const fragment = document.createDocumentFragment();

********_routine.forEach((****) => {
  template.querySelector(".lista .card .front img").src = *****.img;
  template.querySelector(".lista .card .front img").alt = *****.alt;
  template.querySelector(".lista .back h2").textContent = *****.back;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
```

- Así quedaría el archivo con sus valores remplazados:

```
import { ******* } from "../database/database.js";

const lista = document.querySelector("#lista-********");
const template = document.querySelector("#template-********").content;

const fragment = document.createDocumentFragment();

********_routine.forEach((****) => {
  template.querySelector(".lista .card .front img").src = *****.img;
  template.querySelector(".lista .card .front img").alt = *****.alt;
  template.querySelector(".lista .back h2").textContent = *****.back;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
```

- Localizo la carpeta database y en el archivo database.js, al final del archivo se encuentra el siguiente template:

```
export const ***** = [
  {
    img: "/imgs/******.jpg",
    back: "text here",
    alt: "text here image",
  },
];
```

- Remplazo los asteriscos por los valores a ingresar así (aquí van todas las rutas de las imágenes y toda la información):

```
export const bedroom = [
  {
    img: "/imgs/ruta-a-la-imagen.jpg",
    back: "texto de la imagen",
    alt: "texto de la imagen image",
  },
];
```

- En la parte superior del archivo database.js se encuentra el objeto front_page, ahí colocamos la información que irá en la página principal:

```
export const front_pages = [
  {
    a: "/pages/animals.html",
    img: "/imgs/animals/monkey.jpg",
    alt: "Animals page image",
    text: "Animals",
  },
  {
    a: "/pages/partsOfHouse.html",
    img: "/imgs/parts_of_house/kitchen.jpg",
    alt: "Parts of house page image",
    text: "Parts of house",
  },

  {
    a: "/pages/bathroom.html",
    img: "/imgs/bathroom/bathroom.jpg",
    alt: "Bathroom page image",
    text: "Bathroom",
  },

  {
    a: "/pages/daily-routine.html",
    img: "/imgs/daily-routine/have_breakfast.jpg",
    alt: "Daily Routine page image",
    text: "Daily Routine",
  },

 {
    a: "/pages/bedroom.html",
    img: "/imgs/bedroom/bedroom.jpg",
    alt: "Bedroom page image",
    text: "Bedroom",
  },
];
```

- Ubico la carpeta apps y creo un nuevo archivo, en este caso se llama bedroom.js.
- Localizo el archivo template.js, copio todo su contenido y lo pego para este caso en debroom.js.
- Remplazo los asteriscos por sus valores correspondientes de bedroom.html y bedrooo.js:

```
import { ******* } from "../database/database.js";

const lista = document.querySelector("#lista-********");
const template = document.querySelector("#template-********").content;

const fragment = document.createDocumentFragment();

********_routine.forEach((****) => {
  template.querySelector(".lista .card .front img").src = *****.img;
  template.querySelector(".lista .card .front img").alt = *****.alt;
  template.querySelector(".lista .back h2").textContent = *****.back;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
```

- Así quedaría el archivo con sus valores remplazados:

```
import { ******* } from "../database/database.js";

const lista = document.querySelector("#lista-********");
const template = document.querySelector("#template-********").content;

const fragment = document.createDocumentFragment();

********_routine.forEach((****) => {
  template.querySelector(".lista .card .front img").src = *****.img;
  template.querySelector(".lista .card .front img").alt = *****.alt;
  template.querySelector(".lista .back h2").textContent = *****.back;

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
```
