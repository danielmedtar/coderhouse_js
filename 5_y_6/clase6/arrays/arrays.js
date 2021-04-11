/*

//length
const frutas = ["sandia", "arandanos"]

console.log(frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
*/

/*
//toString: convierte todo en string
const frutas = ["sandia", "arandanos"]

console.log(frutas)

console.log(frutas.toString)
console.log(frutas)
*/

//Join: une los elementos con el simbolo que se le pasa. En este caso un *
/*
const frutas = ["sandia", "arandanos"]

console.log(frutas)

console.log(frutas.join("*"))
// console.log(frutas)
*/

//CONCAT: Une nuevos elementos dentro de un nuevo array
/*
const frutas = ["sandia", "arandanos"]
const verduras = ["Lechuga", "Cebolla", "Verdeo"]

console.log(frutas)

const frutasYverduras = frutas.concat(verduras)
console.log(frutasYverduras)
*/

//PUSH agrega nuevo elemento al final del array
// const frutas = ["sandia", "arandanos"]
// const verduras = ["Lechuga", "Cebolla", "Verdeo"]

// console.log(frutas)

// const frutasYverduras = frutas.concat(verduras)
// console.log(frutasYverduras)

// frutasYverduras.push("frutilla")
// console.log(frutasYverduras)

//unshift agrega elementos al inicio de los arrays
/*
const frutas = ["sandia", "arandanos"]
const verduras = ["Lechuga", "Cebolla", "Verdeo"]

console.log(frutas)

const frutasYverduras = frutas.concat(verduras)
console.log(frutasYverduras)

frutasYverduras.unshift("frutilla")
console.log(frutasYverduras)
*/


class Perro {

    constructor(nombre, raza) {
        this.nombre = nombre
        this.raza = raza
    }
}

const perritos = []

const getAll = () => {
    return perritos
}

const create = (perrito) => {
    perritos.push(perrito)
}

const findOne = (nombre) => {


    //2 formas de escribirlo
    //1 corta
    const perroLista = perritos.find(perro => perro.nombre === nombre)
    
    //Definir error si se busca un perro que no este en el array
    if (!perroLista) {
        throw new Error(`No existe ${nombre}`)
    }
    
    
    //2 larga
    /*
    const perroLista = perritos.find((perro) => {
        if (perro.nombre === nombre) {
            return perro
        }
    })
*/
    return perroLista
}

update = (nombre, raza) => {

    const perro = findOne(nombre)

    if (perro) {
        perro.raza = raza
    }
}

const remove = (nombre) => {
    const index = perritos.findIndex(perro => perro.nombre === nombre)
    if (index >= 0) {
        perritos.splice(index, 1)
    }
}

const perro1 = new Perro("Argos", "Groenendal")
const perro2 = new Perro("Malena", "Dachshund")
const perro3 = new Perro("Pacha", "Grandanes")

create(perro1)
create(perro2)
create(perro3)


console.log(getAll())

remove("Pacha")

console.log(getAll())