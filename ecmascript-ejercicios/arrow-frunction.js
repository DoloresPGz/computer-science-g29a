function saludar(){
    console.log("Hola")
}

saludar()

const saludarArrow = () => {
    console.log("Hola con arrow")
}

saludarArrow()


function potencia(a) {
    return a ** 2
}

const potenciaArrow = a => a ** 2

console.log(potencia(3));
console.log(potenciaArrow(2));