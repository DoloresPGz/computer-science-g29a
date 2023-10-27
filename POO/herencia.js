var Cine = require( './Cine.js')

// Clase Padre
class Largometraje {
  constructor(titulo,duracion,categoria){
    this.titulo = titulo,
    this.duracion = duracion,
    this.categoria = categoria
  }
  // Metodos
  getDescription () {
    return `El titulo de la Largometraje es ${this.titulo} y dura ${this.duracion} minutos y es de la categoria ${this.categoria}`
  }
}
// Clase Hija
class Pelicula extends Largometraje {
  constructor(titulo,duracion,categoria, clasificacion){
    super(titulo,duracion,categoria)
    this.clasificacion = clasificacion
  }
  getDescription () {
    return `El titulo de la Pelicula es ${this.titulo} y dura ${this.duracion} minutos y es de la categoria ${this.categoria}`
  }
}
// Clase Hija
class Documental extends Largometraje {
  constructor(titulo,duracion,categoria, narrador){
    super(titulo,duracion,categoria)
    this.narrador = narrador
  }
  getDescription() {
    return `El titulo del documental es ${this.titulo} y dura ${this.duracion} minutos y es de la categoria ${this.categoria} y es narrado por ${this.narrador}`
  }
  setNarrador(narrador){
    this.narrador = narrador
  }
}
//Instancias
const pelicula1 = new Pelicula('El Padrino', 175, 'Drama', 'B')
const documental1 = new Documental('La historia de las cosas', 120, 'Documental', 'Annie Leonard')

// pelicula1.titulo = 'El Padrino 2'



const cinepolis = new Cine('Cinepolis', 5, 'Av. Siempre Viva 123')

console.log(cinepolis.reproducir(pelicula1))
console.log(cinepolis.reproducir(documental1))


