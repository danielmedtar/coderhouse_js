class Perro {
    constructor(nombre, raza) {
        this.nombre = nombre.toLowerCase()
        this.raza = raza.toLowerCase()
    }
}

let perritos = JSON.parse(localStorage.getItem('perros'))

if ( !perritos ) {
    perritos = []
}

const getAll = () => {
    return perritos
}

const create = (perrito) => {
    perritos.push(perrito)
}

const findOne = (nombre) => {
    nombre = nombre.toLowerCase()
    const perroLista = perritos.find( perro => perro.nombre === nombre)
    if (!perroLista) {
        throw new Error(`No existe ${nombre}`)
    }
    return perroLista
}

const update = (nombre, raza) => {
    const perro = findOne(nombre)
    perro.raza = raza
}

const remove = (nombre) => {
    nombre = nombre.toLowerCase()
    const index = perritos.findIndex( perro => perro.nombre === nombre)
    if ( index >= 0) {
        perritos.splice(index, 1)
    }
}

const formPerro = document.getElementById("form-perro")
const inputNombre = document.getElementById("input-nombre")
const inputRaza = document.getElementById("input-raza")
const listaPerros = document.getElementById("lista-perros")

const showPerritos = (perritos) => {
    for (let i = 0; i < perritos.length; i++) {
        let itemPerro = document.createElement("li")
        
        itemPerro.textContent = `El nombre del perro es: ${perritos[i].nombre} y su raza es: ${perritos[i].raza}`
        listaPerros.appendChild(itemPerro)
    }
}
showPerritos(perritos)

//Cuando escucha el evento submit, se ejecutará el código
formPerro.addEventListener("submit", (event) => {
    //Previene la actualizacion de la pagina
    event.preventDefault()

    //Ejecuta
    const nombre = inputNombre.value
    const raza = inputRaza.value

    //Crea un nuevo perro agregandolo al array
    const perro = new Perro(nombre, raza)
    create(perro)
    
    //Actualizo el localStorage del usuario
    localStorage.setItem("perros", JSON.stringify(perritos))

    inputNombre.value = ""
    inputRaza.value = ""

    //Agregar el nuevo perro a la lista

    let itemPerro = document.createElement("li")
    itemPerro.textContent = `El nombre del perro es: ${ nombre} y su raza es: ${ raza}`

    listaPerros.appendChild(itemPerro)

    
})



