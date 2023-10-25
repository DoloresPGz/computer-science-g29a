class Alumno {
  constructor(nombreAlumno,apellido, califFinal, inscrito=true){
    // Atributos
    this.nombre = nombreAlumno,
    this.apellido = apellido,
    this.califFinal = califFinal,
    this.inscrito = inscrito, //false
    this.test = null
  }
  // Metodos
  saludar(){
    console.log('Hola ' + this.nombre)
  }

  cursaSemestre() {
    if(this.inscrito === true){
      console.log("El alumno " + this.nombre + " cursa el semestre 🤓")
    } else {
      console.log("El alumno " + this.nombre + " NO cursa el semestre 😅")
    }
  }
  obtenerCalificacionFinal(){
    console.log("La calificacion final de " + this.nombre + " es: " + this.califFinal)
  }
}


const alumno1 = new Alumno('Juan', 'Perez', 8.5, false)
const alumno2 = new Alumno('Pedro', 'Perez', 6.5, true)
const alumno3 = new Alumno('Carlos', 'Perez', 5.5, true)


alumno1.saludar()
alumno1.obtenerCalificacionFinal()
alumno1.cursaSemestre()

// alumno2.saludar()
// alumno2.obtenerCalificacionFinal()
// alumno2.cursaSemestre()

// console.log(alumno1)




const test = {
  nombre: "Test",
  saludo: function () {
    console.log('Hola ' + this.nombre)
  },
  test: () => {
    console.log('Hola  Test')
  }
}

// test.saludo()
// test.test()