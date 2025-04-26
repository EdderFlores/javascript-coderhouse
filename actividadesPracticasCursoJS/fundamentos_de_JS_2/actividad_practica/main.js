// Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

// declarando los valores
console.log("Bienvenido a nuestra calculadora de JS");
let menu = prompt(
  "Elije una opción para tu operación\nMenu\n+ Suma\n- Resta\n/ Division\n* Multiplicacion\n s Salir"
);

while (menu != "s") {
  let num1 = parseFloat(prompt("Ingresa el primer numero"));
  let num2 = parseFloat(prompt("Ingresa el segundo numero"));

  switch (menu) {
    case "+":
      let suma = num1 + num2;
      console.log(`Suma Total de ${num1} + ${num2} = ${suma}`);
      break;
    case "-":
      let resta = num1 - num2;
      console.log(`Resta Total de ${num1} - ${num2} = ${resta}`);
      break;
    case "*":
      let multiplicacion = num1 * num2;
      console.log(
        `Multiplicacion Total de ${num1}x${num2} = ${multiplicacion}`
      );
      break;
    case "/":
      let Division = num1 / num2;
      console.log(`Division Total de ${num1} entre ${num2} = ${division}`);
      break;
  }

  menu = prompt(
    "Elije una opción para tu operación\nMenu\n+ Suma\n- Resta\n/ Division\n* Multiplicacion\n s Salir"
  );
}

console.log("Gracias por usar nuestra calculadora");
