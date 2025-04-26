// Ciclos

/* los ciclos o bucles permiten repetir una o más instrucciones de manera eficiente hasta que se cumpla una condición específica */

/* ****Ciclo FOR **** */

// es uno de los mas utlizados para ejecutar un bloque de codigo una cantidad de veces necesarias

/* 
incluye tres partes principales:
- Inicialización: Establece el estado del contador, por ejemplo, let i = 0.
- Condición: El ciclo se ejecuta mientras la condición sea verdadera. Por ejemplo, i < 10.
- Actualización: Actualiza el valor del contador después de cada iteración. Por ejemplo, i++.
*/

for (let num = 1; num <= 5; num++) {
  console.log(num);
}

/* Ciclo WHILE */

// a diferencia del ciclo for, el ciclo while sigue ejecutandose hasta que la condicion sea verdadera. La inicialización y actualización del contador suelen hacerse fuera y dentro del ciclo

/* 
En el ciclo while, la condicion va dentro del parentesis enseguida del while

Declaracion fuera de: 

let i = 0

ciclo while:

while (condicion) {
    console.log(i);
    Actualizacion i++;
}
*/

let variable1 = 1;
while (variable1 < 2) {
  console.log(variable1);
  variable1++;
}

/* Cicho DO... WHILE */

// este garantiza que el cuerpo del bucle se ejecute al menos una vez, ya que la condición se evalúa después de la ejecución del código dentro del bucle.

/* 
En el ciclo do... while, la condicion va en el while mientras la declaracion se hace fuera del bucle, y la actualizacion y accion se hace dentro del do

Declaracion: 
let i = 0

Actualizacion y accion:
do {
    console.log(i);
    i++;
} CONDICION while(i<4);
*/

let var2 = 10;
do {
  console.log(var2);
  var2++;
} while (var2 < 12);

// CONTROLANDO CICLOS

//BREAK y CONTINIUE

// BREAK
// Utilizado para salir de un ciclo de forma inmediata

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// CONTINUE
// Omite la iteracion actual del ciclo y continua con la siguiente, siempre y cuando la condicion del ciclo siga siendo verdadera
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Ejemplo con Array

const usuarios = [
  { nombre: "Edder", edad: 25, aceptoTerminos: true },
  { nombre: "Danny", edad: 27, aceptoTerminos: false },
  { nombre: "Ally", edad: 5, aceptoTerminos: true },
  { nombre: "Alessandro", edad: 3, aceptoTerminos: true },
];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].edad >= 25 && usuarios[i].aceptoTerminos) {
    console.log(usuarios[i].nombre);
  }
}
