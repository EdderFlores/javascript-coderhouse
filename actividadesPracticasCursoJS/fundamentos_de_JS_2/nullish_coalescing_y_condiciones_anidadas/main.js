// Condiciones Básicas y Anidadas

// En JS las estructuras de control permiten dirigir el flujo de ejecucion del programa basandose en condiciones logicas.

/* 
SINTAXIS:

if (condición) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}

*/

let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Condiciones anidadas

// Condiciones anidadas son estructuras if dentro de otras estructuras if o else. Esto permite evaluar multiples condicinoes en secuencia.

let edad2 = null;
let nombre = "Edder";

if (edad2 !== null && edad2 !== undefined) {
  console.log(`Tienes ${edad2} años`);
} else {
  if (nombre) {
    console.log(`Bienvenido, ${nombre}`);
  } else {
    console.log("Informacion Incompleta");
  }
}

/* 

OPERADORES LOGICOS

|| = retorna el primer valor verdadero o el ultimo si todos son falsos. Todos los valores o operandos que se consideran falsos son 0, '', false, null y undefined

Ejemplo:
let valor1 = 0;
let resultadoOR = valor1 || "Valor predeterminado";

console.log(resultadoOR); // "Valor predeterminado"

*/

let valor1 = 0;
let resultadoOR = valor1 || "2ndo Valor";

console.log(resultadoOR);

/* 
El operador Nullish Coalescing "??" siempre regresa el valor de la derecha si el valor de la izq es nulo o indefinido (null or undefined) 

resultado = a ?? b;

Si a es diferente de null o undefined, resultado será a.

Si a es null o undefined, resultado será b.

*/

let valor2 = 0;
let resultadoNullish = valor2 ?? "Valor de la Derecha";

console.log(resultadoNullish);
