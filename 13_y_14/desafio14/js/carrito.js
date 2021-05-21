//AGREGAR AL CARRITO
let carrito = []

let carritoLS = JSON.parse(localStorage.getItem('carrito'))//Se recupera lo que haya dentro del carrito al refrescar la página

if (carritoLS) {  //Si había algo al refrecar la página, entonces carrito será = a lo que haya en el LS y se ejecuta la funcion agregarAlCarrito para que lo muestre
    carrito = carritoLS
    actualizarCarrito()
}


function agregarAlCarrito(id) {
    
    const productoElegido = productos.find(el => el.id === id) //Se indica que lo elegido tomará el valor del id seleccionado

    if (productoElegido) {
        carrito.push(productoElegido) //Se ingresa al carrito
    }
    actualizarCarrito() //Se actualiza con lo que tenga

    localStorage.setItem('carrito', JSON.stringify(carrito)) //Se guarda en el local lo seleccionado. Al refrescar toma lo que habia y comienza a agregar si el usuario elige mas productos
}

// //ELIMINAR PRODUCTO

function eliminarProducto(id) {
    const quitarProducto = carrito.find(el => el.id == id)
    const indice = carrito.indexOf(quitarProducto)
    carrito.splice(indice, 1)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}

// //ACTUALIZAR CARRITO

function actualizarCarrito() { //Para actualizar con lo que se elija y anexe al modal
    
    const contenedorCarrito = document.getElementById('contenedor-carrito')
    
    const precioTotal = document.getElementById('precio-total')
    const precioIva = document.getElementById('precio-iva')
    const precioPagar = document.getElementById('aPagar')
    const contadorCarrito = document.getElementById('contador-carrito')

    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        contenedorCarrito.innerHTML += `
        <div class="producto-carrito">
            <p>${producto.desc}</p>
            <p>Precio: $${producto.precio}</p>
            <button onclick=eliminarProducto(${producto.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
    
        `
    })
    
    let sumaProductos = carrito.reduce((acum, el) => acum += el.precio, 0)
    let ivaProductos = carrito.reduce((acum, el) => acum += el.precio * 0.21, 0)
    
    precioTotal.innerText = sumaProductos.toFixed(2)
    precioIva.innerText = ivaProductos.toFixed(2)
    precioConDecimal = sumaProductos + ivaProductos
    precioPagar.innerText = precioConDecimal.toFixed(2)
    localStorage.setItem('precioConDecimal', JSON.stringify(precioConDecimal))
    

    contadorCarrito.innerText = carrito.length
    localStorage.setItem('contadorCarrito', JSON.stringify(carrito.length))
}

function eliminarTodo() {
    localStorage.clear(carrito)
    carrito = []
    actualizarCarrito()
}


