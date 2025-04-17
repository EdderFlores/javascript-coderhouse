//Condiciones y operadores

/* Los condicionales en JS son estructuras fundamentales que permiten tomar decisiones en un programa basandose en si una o mas condiciones se cumplen */

// if/else/else if

let grade = 58;

/* Always remember if you want to convert an input from a user to INT or Float, use parseInt() and parseFloat() */

// parseInt(grade);

if (grade >= 90) {
  console.log("Muy bien!!");
} else if (grade >= 70) {
  console.log("Bueno");
} else {
  console.log("Estas re burro, necesitas seguir estudiando");
}

// Los operadores de comparacion evaluan dos valores y retomanun valor booleano (true - false) dependiendo de si la comparacion es verdadera

/* 
== (Igual): Compara si dos valores son iguales, ignorando el tipo de dato.
jsx console.log(2 == '2'); // true

=== (Estrictamente igual): Compara si dos valores son iguales y del mismo tipo.
jsx console.log(2 === '2'); // false

!= (No igual): Compara si dos valores no son iguales, ignorando el tipo de dato.
jsx console.log(2 != '3'); // true

!== (Estrictamente no igual): Compara si dos valores no son iguales o no son del mismo tipo.
jsx console.log(2 !== '2'); // true

<, <=, >, >= (Menor que, Menor o igual que, Mayor que, Mayor o igual que): Utilizados para comparaciones numéricas.
jsx console.log(3 < 4); // true console.log(5 >= 5); // true
*/

/*
Operadores Lógicos
Los operadores lógicos se usan para combinar múltiples condiciones booleanas.

&& (AND): Retorna true si ambos operandos son verdaderos.
jsx console.log(true && false); // false

|| (OR): Retorna true si al menos uno de los operandos es verdadero.
jsx console.log(true || false); // true

! (NOT): Invierte el valor booleano del operando.
jsx console.log(!true); // false

*/

// usando && tienes que asegurarte que ambas condiciones sean verdaderas para continuar
let edad = 20;
let acceso = edad >= 18 && edad <= 30;
console.log(acceso);

// con || permites generar que el codigo corra si alguna de las condiciones climaticas es extrema
let temperatura = 35;
let advertencia = temperatura < 0 || temperatura > 32;
console.log(advertencia);
