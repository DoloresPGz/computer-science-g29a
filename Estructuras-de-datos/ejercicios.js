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

// function replace(pila, nuevo, viejo){
//   while(pila.peek() != viejo){
//       pila.pop()
//       if(pila.isEmpty())
//           return
//   }
//   pila.pop()
//   pila.push(nuevo)
//   pila.print()
// }

function reemplazar(pila,nuevo, viejo){
  let pilaTemporal = []
  let encontrado = false

  // Vamos sacando elementos de la pila hasat encontrar el valor "viejo" o hasta que la pila este vacia
  while(pila.length > 0 && !encontrado){
    let elemento = pila.pop()
    
    if(elemento === viejo){
      //Si encontramos el valor "viejo", lo reemplazamos por el "nuevo"
      pila.push(nuevo)
      encontrado = true
    } else {
      // Si no es el valor que buscamos, lo ponemos en la pila temporal
      pilaTemporal.push(elemento)
    }
  }
  // Volvemos a poner los elementos de la pila temporal en la pila original
  while(pilaTemporal.length > 0){
    pila.push(pilaTemporal.pop())
  }
  return pila
}

let pila = new Pila()
pila.push(3, 2, 3, 4, 6, 8, 1, 2, 5, 5)
let ejercicio2 = reemplazar(pila, 7, 2)
console.log(ejercicio2)

