// console.log("Bienvenido a la clase 2");

// let edad = 45;
// console.log(edad);
// console.log("La edad del usuario es " + edad);

// let esArgentino = true;
// console.log(esArgentino);

// // solicitar ingreso de datos
// edad = parseInt(prompt("Ingreasa tu edad"));
// console.log(edad);
// console.log("La edad del usuario es " + edad);

// condicional IF
/* if (edad >= 18) {
  console.log("Puedes ingresar al bar");
} else {
  console.log("No puedes ingresar al bar");
} */

// if (edad < 3) {
//   console.log("El usuario es un bebe");
// } else if (edad < 6) {
//   console.log("El usuario es un niño preescolar");
// } else if (edad < 6) {
//   console.log("El usuario es un niño preescolar");
// } else if (edad < 14) {
//   console.log("El usuario es un niño");
// } else if (edad < 18)
//   console.log("El usuario es un adolecente");
// } else if (edad < 40) {
//   console.log("El usuario es un adulto joven");
// } else {
//   console.log("El usuario es un Adulto");
// }

// operadores logicos < <= > >= == (igual a) === (estrictamente igual a)
// operadores relacionales && AND || OR ! NOT

// let colorFavorito = prompt("Cual es tu color Favorito?");

/* if (colorFavorito == "rojo" || colorFavorito == "Rojo") {
  console.log("Esta manzana es roja 🍎");
} else if (colorFavorito == "naranja" || colorFavorito == "Naranja") {
  console.log("Esta naranja es naranja 🍊");
} else {
  console.log("Lo siento este color no lo tengo en mi sistema");
} */

// se puede usar SWITCH para reemplazar la condicional if, pero no se pueden hacer condiciones como el mayor que o menor que o igual a

/* switch (colorFavorito) {
  case "rojo":
    console.log("Esta manzana es roja 🍎");
    break;
  case "naranja":
    console.log("Esta naranja es naranja 🍊");
    break;
  default:
    console.log("Lo siento, este color no lo tengo en mi sistema");
    break;
} */

// bucle - ciclos FOR y WHILE || For solo permite repetir bucles un determinado numero de veces y el while es un run infinito hasta que la condicino se cumpla

let saludo = "Buen dia ☀️";

for (let i = 1; i < 3; i++) {
  console.log(i + " - saludo");
}

//calculadora
//crear un menu con las 4 operaciones y la opcion de salida
//pedirle num1 y num2 para operar con la operacion seleccionada anteriormente
// agregar un ciclo while y envolver el switch con las cosas

let operacion = prompt(
  "Calculadora\n+ Sumar \n- Restar\n* Multiplicar\n/ Dividir\ns Salir"
);

while ((operacion = !"s")) {
  let num1 = parseFloat(prompt("Ingresa el primer numero"));
  let num2 = parseFloat(prompt("Ingresa el segundo numero"));
}
