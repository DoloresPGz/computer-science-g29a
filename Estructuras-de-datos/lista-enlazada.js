class Node{
    constructor(data){
        this.data = data
        this.next = null //apuntador
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }

    //Inseción de un elemento
    insert(data){
        //Creo mi nuevo nodo que se va a enlazar a mi estructura
        let node = new Node(data)

        //Primer caso: Mi lista se encuentra vacía (head -> null)
        if(this.head == null){
            this.head = node
        }else{
        //Segundo caso: Tengo por lo menos un nodo en la lista
            let current = this.head
            while(current.next !== null){//recorro la lista enlazada
                let lo_que_era_current = current
                current = lo_que_era_current.next
                // current = current.next
            }
            //Cuando salgo del while sé que current se encuentra en el último nodo
            current.next = node
        }
    }

    //Borrado de un elemento
    delete(data){
        let current = this.head
        let prev = this.head
        if(this.head !== null){
            //Primer caso: El elemento que quiero borrar está en la cabeza
            if(this.head.data == data){
                this.head = this.head.next
            }else{
            //Segundo caso: El data que quiero borrar no se encuentra en la primera posición
                while(current.next !== null && current.data !== data){
                    prev = current
                    current = current.next
                }
                //Cuando salgo del ciclo
                //1.- Encontré el elemento que quiero borrar
                if(current.data == data){
                    prev.next = current.next
                }
                //2.- El elemento no se encuentra en la estructura
            }
        }
    }

    //Recorrido de la lista
    print(){
        let listaEnlazada = "" //Cadena donde voy a concatenar los datos de mi lista enlazada
        let current = this.head
        while(true){
            if(!current) // es equivalente a poner (current == null)
                break

            listaEnlazada += `${current.data} -> `
            current = current.next
        }

        return listaEnlazada += "null"
    }

    //Búsqueda de un elemento
}

let ll = new LinkedList()

ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)

console.log(ll)

//ll.delete(4)
ll.delete(2)
console.log(ll)

console.log(ll.print())