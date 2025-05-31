const courses = [
  {
    id: 1,
    name: "Curso 1",
    instructor: "Profesor 1",
    duration: 6,
    level: "Beginner",
  },
  {
    id: 2,
    name: "Curso 2",
    instructor: "Profesor 2",
    duration: 6,
    level: "Beginner",
  },
  {
    id: 3,
    name: "Curso 3",
    instructor: "Profesor 3",
    duration: 6,
    level: "Intermedium",
  },
  {
    id: 4,
    name: "Curso 4",
    instructor: "Profesor 4",
    duration: 6,
    level: "Intermedium",
  },
  {
    id: 5,
    name: "Curso 5",
    instructor: "Profesor 5",
    duration: 9,
    level: "Advanced",
  },
  {
    id: 6,
    name: "Curso 6",
    instructor: "Profesor 6",
    duration: 8,
    level: "Advanced",
  },
];

//funcones de orden superior son aquellos que reciben como parametro otra funcion o que retornan otra funcion.

//forEach - itera sobre el array y hace algo por cada elemento del mismo
courses.forEach((course) => console.log(course.name));

courses.forEach((course) => console.log(course.instructor.toUpperCase()));

// find- busca el PRIMER elemento que cumpla con la condicion solicitada
let found = courses.find((course) => course.id == 6);
if (found != undefined) {
  console.log(found);
} else {
  console.log("Curso no encontrado");
}

// filter - crea un nuevo array con todos los elementos que cumplan la condicion dada
const filteredList = courses.filter((course) => course.duration > 6);
if (filteredList.lenght > 0) {
  console.log(filteredList);
} else {
  console.log("No se encontraron cursos");
}
