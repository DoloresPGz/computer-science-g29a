// Cola
// FIFO (First In First Out)

class Cola {
  constructor(){
    this.data = [];
  }
  //Agregar un elemento a la cola
  enqueue(element){
    this.data.push(element)
  }
  //Sacar un elemento de la cola
  dequeue(){
    return this.data.shift()
  }
  //Ver el primer elemento de la cola
  peek(){
    return this.data[0]
  }
  //Ver el tamaño de la cola
  size(){
    return this.data.length
  }
  //Ver si la cola está vacía
  isEmpty(){
    return this.data.length === 0
  }
  // Mostrar todo el contenido de la cola
  print(){
    console.log(this.data)
  }
}

// Instanciar la clase Cola
let cola = new Cola()
// Agregar elementos a la cola
cola.print()
cola.enqueue('Elemento1')
cola.enqueue('Elemento2')
cola.enqueue('Elemento3')
cola.enqueue('Elemento4')

// Mostrar el contenido de la cola
cola.print()

// Sacar un elemento de la cola
let elementoEliminado = cola.dequeue()
cola.print()
console.log(`El elemento eliminado es: ${elementoEliminado} `)