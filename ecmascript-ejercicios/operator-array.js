function master( programa , ...senseis ) {
    console.log("Bienvenido a " + programa)
    console.log(senseis)
}

master("Master en Coding", "Mali", "Maui", "Gera", "Fernando")


function sum(x, y, z, a){
    return x + y + z + a
}

let numbers = [1, 2, 3, 4]

console.log( sum(...numbers) )

let numbersCopy  = [...numbers]

numbers.push(5)

console.log(numbersCopy)

