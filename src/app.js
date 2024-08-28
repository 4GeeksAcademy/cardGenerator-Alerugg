/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const generatedCard = document.querySelector("#generatedCard");
  generatedCard.style.background = "linear-gradient(135deg, #ff4e50, #f9d423)";

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
    alert("OJO! Si tardas tanto tambien pierdes!"); // <-- alerta de aviso de que el tiempo te puede hacer perder
  };
  const alertaPerdiste = () => {
    alert("Te lo dije, Perdiste!"); // <-- alerta de aviso de que perdiste
  };

  // esta funcion genera una carta nueva //
  const refreshScreen = () => {
    const icons = document.querySelector(".randomPint"); // <-- selecciona el icono superior izquierdo del naipe.
    const icons2 = document.querySelector(".randomPint2"); // <-- selecciona el icono inferior derecho del naipe.
    const randomNumber = document.querySelector(".randomNumber"); // <-- selecciona numero del centro del naipe.

    const pint = randomPint();
    const number = randomNumbers();
    const color = pintColors(pint);

    // este condicional ejecuta la carta con los iconos y la imagen del joker cuando toca === "JOKER" del array numbers

    if (number === "JOKER") {
      topIcon.innerHTML = `<img src="${joker}" alt="Joker" style="width: 50px; height: 50px;border-radius: 10px">`;
      bottomIcon.innerHTML = `<img src="${joker}" alt="Joker" style="width: 50px; height: 50px;border-radius: 10px">`;
      middleNumber.innerHTML = `<img src="${joker2}" alt="Joker2" style="width: 40%; height: 40%; border-radius: 10px; border: solid red 3px">`;
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
  };

  setInterval(refreshScreen, 15000); // <-- este temporizador ejecuta la funcion para que genere una carta nueva en 15 segundos
  setInterval(alertaTiempo, 30000); // <-- este temporizador ejecuta la alerta para que avisar del tiempo a los 14  segundos

  const cardSize = () => {
    const card = document.querySelector("#generatedCard");
    const heightImput = document.querySelector("#heightImput").value; // <-- esta funcion toma el imput en px y aplica el height
    const height = heightImput ? `${heightImput}px` : "450px";

    card.style.height = height; // agregar aqui un evento change <------
  };

  const cardSize2 = () => {
    const card = document.querySelector("#generatedCard");
    const widthImput = document.querySelector("#heightImput").value; // <-- esta funcion toma el imput en px y aplica el width
    const width = widthImput ? `${widthImput}px` : "320px";

    card.style.width = width;
  };
  document
    .querySelector("#randomButton")
    .addEventListener("click", refreshScreen); // con este evento click sobre el boton, ejecutamos la funcion refreshScreen

  document.querySelector("#sizeButton1").addEventListener("click", cardSize); // <-- evento click que aplica el estilo height del imput
  document.querySelector("#sizeButton2").addEventListener("click", cardSize2); // <-- evento click que aplica el estilo width del imput
};

// cambiar el evento en vez de que al darle al boton se cambie, con change que tome el imput value y lo aplique sin darle boton, hay que validar ela entrada del imput
// reto validar inputs que sea numerico y mayor a 0, no puede ser letras solo numeros
// condicional que si no es numerico, haya una alerta que no puedes escribir texto
// refatorizar pintColors funcion con solo un if
