class Cine {
  constructor(nombreCine, salas, direccion){
    this.nombreCine = nombreCine,
    this.salas = salas,
    this.direccion = direccion
  }
  // Metodos
  reproducir(Largometraje){
    return `Se esta reproduciendo en el Cine: ${this.nombreCine} con ${this.salas} salas y con la direccion ${this.direccion}: ${Largometraje.getDescription()}`
  }
}

module.exports = Cine