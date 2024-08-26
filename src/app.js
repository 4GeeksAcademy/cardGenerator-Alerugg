/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // document.querySelector("#generatedCard").style.

  const pints = ["♦", "♥", "♠", "♣"]; // <-- array de las pintas.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "JOKER"]; // <--  array de numero y letra.
  const joker =
    "https://i.pinimg.com/originals/43/65/96/4365964f4a3180781f1492107a5095b1.jpg";
  const joker2 =
    "https://i.pinimg.com/originals/68/b8/a2/68b8a21ea1c731befec8687b6d553fbe.jpg";

  const randomPint = () => {
    return pints[Math.floor(Math.random() * pints.length)]; // <<-- nos da una pinta random.
  };

  const randomNumbers = () => {
    return numbers[Math.floor(Math.random() * numbers.length)]; // <<- nos da un numero/letra random.
  };

  const pintColors = pint => {
    const color = pint === "♥" || pint === "♦" ? "red" : "black"; // <-- ternario para cambiar el color segun la pinta obtenida.
    return color;
  };

  const alertaTiempo = () => {
    alert("OJO! Si tardas tanto tambien pierdes!");
  };
  const alertaPerdiste = () => {
    alert("Te lo dije, Perdiste!");
  };

  // esta funcion genera una carta nueva //
  const refreshScreen = () => {
    const icons = document.querySelector(".randomPint"); // <-- selecciona el icono superior izquierdo del naipe.
    const icons2 = document.querySelector(".randomPint2"); // <-- selecciona el icono inferior derecho del naipe.
    const randomNumber = document.querySelector(".randomNumber"); // <-- selecciona numero del centro del naipe.
    // const cardFront = document.querySelector("#cardFront");
    // const cardBack = document.querySelector("#cardBack");

    const pint = randomPint();
    const number = randomNumbers();
    const color = pintColors(pint);

    if (number === "JOKER") {
      topIcon.innerHTML = `<img src="${joker}" alt="Joker" style="width: 50px; height: 50px;border-radius: 10px">`;
      bottomIcon.innerHTML = `<img src="${joker}" alt="Joker" style="width: 50px; height: 50px;border-radius: 10px">`;
      middleNumber.innerHTML = `<img src="${joker2}" alt="Joker2" style="width: 60%; height: 60%; border-radius: 10px; border: solid red 3px">`;
      generatedCard.style.background = "black";
      alert("Perdiste!");
    } else {
      randomNumber.textContent = number;
      icons.textContent = pint;
      icons2.textContent = pint;
      icons.style.color = color;
      icons2.style.color = color;
      generatedCard.style.background = "white";
    }
    // cardFront.style.display = "flex";
    // cardBack.style.display = "none";
  };

  setInterval(refreshScreen, 5005);
  // setInterval(alertaTiempo, 4900);
  // setInterval(alertaPerdiste, 5000);

  document
    .querySelector("#randomButton")
    .addEventListener("click", refreshScreen); // con este evento click sobre el boton, ejecutamos la funcion refreshScreen
};

// lo haremos con eventlistener y cambiaremos los iconos por j de joker y el numero por la imagen de joker
// otro event listener para que cuando cargue la pagina tenga un fondo de atras de cartas
// agregar alert de joker perdiste
