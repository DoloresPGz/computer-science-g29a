//Pila
//LIFO (Last In First Out)
//Ejemplo: Pila de platos
class Pila {
  constructor(){
    this.data = [];
  }
  //Agregar un elemento a la pila
  push(element){
    this.data.push(element)
  }
  //Sacar un elemento de la pila
  pop(){
    return this.data.pop()
  }
  //Ver el último elemento de la pila
  peek(){
    return this.data[this.data.length - 1]
  }
  //Ver el tamaño de la pila
  size(){
    return this.data.length
  }
  //Ver si la pila está vacía
  isEmpty(){
    return this.data.length === 0
  }
  // Mostrar todo el contenido de la pila
  print(){
    console.log(this.data)
  }
}
// Instanciar la clase Pila
let pilaPlatos = new Pila()
// Agregar platos a la pila
pilaPlatos.print()
pilaPlatos.push('Plato1')
pilaPlatos.push('Plato2')
pilaPlatos.push('Plato3')
pilaPlatos.push('Plato4')
// Mostrar el contenido de la pila
pilaPlatos.print()
// Sacar un plato de la pila
let elementoEliminado = pilaPlatos.pop()
pilaPlatos.print()
console.log(`El elemento eliminado es: ${elementoEliminado} `)

class PilaObjeto {
  constructor(){
    this.data = {}
    this.contador = 0
  }
  push(element){
    this.data[this.contador] = element
    this.contador++
  }
  pop(){
    if(this.contador === 0){
      return null
    }
    this.contador--
    let elemento = this.data[this.contador]
    delete this.data[this.contador]
    return elemento
  }
  peek(){
    return this.data[this.contador - 1]
  }
  size(){
    return this.contador
  }
  isEmpty(){
    return this.contador === 0
  }
  print(){
    console.log(this.data)
  }
}

