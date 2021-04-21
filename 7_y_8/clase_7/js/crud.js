class Perro {

    constructor(nombre, raza) {
        this.nombre = nombre
        this.raza = raza
    }
}

let perritos = JSON.parse(localStorage.getItem("perros"))

if (!perritos) {
    perritos = []
}

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

const perro1 = new Perro("Molo", "Mestizo")
create(perro1)

const perro2 = new Perro("Almendra", "Belga")
create(perro2)

let nombre = prompt("Escriba el nombre del perro")
let raza = prompt("Escriba la raza")

const perro3 = new Perro(nombre, raza)
create(perro3)

let perrosDB = getAll()
console.log(perrosDB)

localStorage.setItem("perros", JSON.stringify(perrosDB))
