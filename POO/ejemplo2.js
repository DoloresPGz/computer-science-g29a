function Animal(nombre,edad){
  this.nombre = nombre
  this.edad = edad
}

Animal.prototype.hablar = function () {
  console.log(this.nombre + ' hace un ruido.')
}

function Perro(nombre,edad){
  Animal.call(this, nombre, edad) // llammamos al constructor de Animal
}

Perro.prototype = Object.create(Animal.prototype) // Creamos el objeto Perro con el prototipo de Animal
Perro.prototype.constructor = Perro // Asignamos el constructor de Perro

Perro.prototype.hablar = function () {
  console.log(this.nombre + ' ladra.')
}

let perro = new Perro('Rex', 5)
perro.hablar()