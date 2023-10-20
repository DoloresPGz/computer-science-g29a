let persona = {
    nombre : 'Eduardo',
    edad : 25,
    ciudad: 'CDMX'
}

const {nombre, ...informacionAdicional} = persona

console.log(nombre);
console.log(informacionAdicional);


let personaCopy = {...persona, nombre:'Lucia'}

const {nombre : nombreCopy} = personaCopy

console.log(persona)
console.log(personaCopy.nombre)

console.log(nombreCopy)