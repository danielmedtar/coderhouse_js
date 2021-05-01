let arrayProductos = [
    {id: 1, nombre: "Remera", precio: 1000, stock: 100},
    {id: 2, nombre: "Remera", precio: 2000, stock: 100},
    {id: 3, nombre: "Pantalon", precio: 1500, stock: 100},
    {id: 4, nombre: "Pantalon", precio: 1700, stock: 100},
    {id: 5, nombre: "Pantalon", precio: 5000, stock: 100},
    {id: 6, nombre: "Pantalon", precio: 3000, stock: 100},
    {id: 7, nombre: "Calzado", precio: 7000, stock: 100},
    {id: 8, nombre: "Calzado", precio: 8000, stock: 100},
    {id: 9, nombre: "Calzado", precio: 13000, stock: 100},
    {id: 10, nombre: "Buzo", precio: 6000, stock: 100},
    {id: 11, nombre: "Buzo", precio: 19000, stock: 100},
    {id: 12, nombre: "Buzo", precio: 800, stock: 100},
]

let carrito = []

//Con esta de abajo se comprueba si el carrito ya tenia algun elemento guardado anteriormente. Asi no se vacía al refrescar la página
let carritoEnLS = JSON.parse(localStorage.getItem('carrito'))

if (carritoEnLS) {
    //Se pregunta al usuario si quiere seguir con su ultima compra
    let continuar = prompt('¿Quiere continuar su última compra?')

    //Si dice que si, se toman los datos ya almacenados anteriormente
    if (continuar == 'si') {
        carrito = carritoEnLS
    } else {
        localStorage.removeItem('carrito')
        // localStorage.clear()
    }
    //Si dice que no, se limpia el LS para comenzar compra nueva desde 0
}

console.log(carrito)

function agregarAlCarrito() {
    //Se pide al usuario ingrese un id
    let id = parseInt(prompt('Ingrese ID de producto'))

    //Se recorre el arrayProductos a ver cual ID coincide con el ingresado por el usuario y se almacena en la variable producto
    let producto = arrayProductos.find(el => el.id == id)

    //Una vez definido se agrega el elemento elegido en el array carrito. Se verifica primero con el if si el id ingresado es válido
    if (producto) {
        carrito.push(producto)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        //Con este setitem se guarda el producto en el LS como el carrito
    }

    console.log(carrito)
    
}
