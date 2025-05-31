/* 
Automatización de pedidos de hamburguesa

Trabajas en una empresa que va a revolucionar el
mercado con su manera de preparar hamburguesas.
Debes automatizar los pedidos que incluyan el nombre, el
precio, los ingredientes y el número de combo de la
hamburguesa elegida por el usuario.

Para logralo deberás:
Crear en JS una clase con el nombre hamburguesa
En su constructor define "nombre", "precio",
"ingredientes" y "número de combo"
Luego de definir la clase JS, deberás instanciar al
menos 7 hamburguesas con las respectivas
características solicitadas por el constructor, para
hacerlo toma como base la siguiente información:

Automatización de pedidos de hamburguesa

("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4)
("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)

Almacena las instancias de la clase en un array de objetos
llamado 'hamburguesas', utilizando el método push().
Ten presente que el precio debe ser un valor numérico y
puede contener decimales (2). El número de combo
también es numérico y debe ser un número entero. Por
último, los ingredientes de cada hamburguesa deben estar
contenidos en un array de elementos.

*/

class Hamburguesa {
  constructor(nombre, precio, ingredientes, numeroCombo) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.numeroCombo = numeroCombo;
  }
}
