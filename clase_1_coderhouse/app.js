console.log("Si puedo leer esto, mi archivo esta bien vinculado");

/* Variables:
1. DECLARAR
2. ASIGNAR VALOR
3. LLAMAR/INVOCAR/INICIALIZAR
*/

// DECLARAR UNA VARIABLE
let variable = "";

/* TIPOS DE DATOS = 01110100001111

tipos de datos basicos PRIMITIVOS:
- numerico Number()
    - int - numeros enteros (sin coma)
    - float - numeros con decimales (con coma)
- String - cadenas de caracteres
    'Hola!'
    CARACTERES
    - Letras en mayus
    - letras en minus
    - espacios en blanco
    - numeros
    - simbolos !? .-/*><=
- Boolean true/false
*/

// ejemplo, variable con tipo de dato numerico
let year = 2025; // int - numero SIN coma
let price = 20.5; // float - numero CON coma

// ejemplo String -cadena de caracteres
let message = prompt("Ingrese Mensaje de Bienvenida");
let course = prompt("Ingrese Nombre de Curso");
let institution = prompt("Ingrese Nombre de Institución");

let name = prompt("Ingrese Nombre");

//OPERADOR +
// - SI ESTA ENTRE NUMEROS, SUMA
// SI NO ESTA ENTRE NUMEROS, CONCATENA (une)
// TRADICIONAL - CONCATENAMOS VARIOS STRINGS CON VARIAS VARIABLES
console.log(
  message +
    " " +
    name +
    "al curso de" +
    " " +
    course +
    " " +
    "de" +
    " " +
    institution
);

// PLATILLAS LITERALES
// A PARTIR DE UN UNICO STRING, VAMOS INSERTANDO VARIABLES DENTRO
// BACKTICKS (`) OBLIGATORIOS, SINO NO FUNCIONA
console.log(`${message} ${name} al curso de ${course} de ${institution}`);

/* OPERADOR +
10 + 5 = 15 - SUMA
10 + "HOLA" - CONCATENA
HOLA + 10 = HOLA10 - CONCATENA
*/

// CONVERTIR EL TIPO DE DATO A NUMERO, PARA LUEGO PODER SUMARLO (parseInt()) Convierte a INT numeros sin comas
// parseFloat (convierte a FLOAT) - numero con comas
