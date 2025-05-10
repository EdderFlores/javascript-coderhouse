// funciones anonimas - una funcion que se define sin nombre

const resta = function (num1, num2) {
  return num1 - num2;
};
console.log(resta(5, 2));

function restarNumeros(num1, num2) {
  let resta = num1 - num2;
  return resta;
}

let restaCalculada = restarNumeros(5, 2);
console.log(restaCalculada);

// funciones flecha - funcones anonimas con sintaxis simplificada

const multiplicacion = (num1, num2) => num1 * num2;
console.log(multiplicacion(8, 2));

const concatenacion = (text1, text2) => {
  if (text1 != "" && text2 != "") {
    return text1 + text2;
  } else {
    return "uno o mas datos estan vacion";
  }
};

console.log(concatenacion("", "Chau"));
