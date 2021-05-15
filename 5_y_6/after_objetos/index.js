//Constructor Produttos - this 
function Producto(id, nombre, precio, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock

    this.agregarStock = function(cantidad) {
        this.stock += cantidad
    }
}

let producto1 = new Producto('Remera', 900, 20)
let producto2 = new Producto('Buzo', 1400, 5)
let producto3 = new Producto('Pantalon', 2000, 35)
let producto4 = new Producto('Zapatillas', 7000, 10)

console.log(producto1)
producto1.agregarStock(20)

console.log(producto1)



// function modificarStock(producto, cantidad) {
//     producto.stock = cantidad

// }

// modificarStock(producto1, 50)
// console.log(producto1)

// let pedido = parseInt(prompt('Ingrese su opcion'))

// if (pedido === producto1.id) {
//     console.log(producto1)
// } else if (pedido === producto2.id) {
//     console.log(producto2)
// } else if (pedido === producto3.id) {
//     console.log(producto3)
// } else if (pedido === producto4.id) {
//     console.log(producto4)
// }

//CLASE - MASCOTA

class Mascota {

    constructor(nombre, edad, tipo) {
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
    }

    cumplirAnios() {
        this.edad += 1
    }

    hablar() {
        switch(this.tipo) {
            case 'gato':
                console.log(this.nombre + ' dijo miaaau')
            break
            case 'perro':
                console.log(this.nombre + ' dijo guau guau')
            break
            case 'pez':
                console.log(this.nombre + ' dijo glu glu')
            break
        }
    }
}

let mascota1 = new Mascota('Capi', 10, 'gato')
let mascota2 = new Mascota('Borro', 4, 'perro')
let mascota3 = new Mascota('Dory', 20, 'pez')

mascota1.hablar()
mascota2.hablar()
mascota3.hablar()