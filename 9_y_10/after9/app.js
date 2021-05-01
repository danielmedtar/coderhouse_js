
const contenedorProductos = document.getElementById('contenedor-productos')

// forma 3 - forma híbrida
mostrarProductos(stockProductos)

function mostrarProductos(array) {

    contenedorProductos.innerHTML = ''

    array.forEach((producto) => {
    
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Talle: ${producto.talle}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
    
    })
}


function agregarAlCarrito(id) {
    const productoElegido = stockProductos.find( el => el.id == id )
    if (productoElegido) {
        carrito.push(productoElegido)
    }
    actualizarCarrito()
}

function eliminarProducto(id) {
    const productoEliminar = carrito.find( el => el.id == id )
    const indice = carrito.indexOf(productoEliminar)
    carrito.splice(indice, 1)

    actualizarCarrito()
}


function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('carrito-contenedor')
    const precioTotal = document.getElementById('precioTotal')
    const contadorCarrrito = document.getElementById('contadorCarrito')

    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        contenedorCarrito.innerHTML += `
            <div class="productoEnCarrito">
                <p>${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <button onclick=eliminarProducto(${producto.id})  class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
        `
    })

    precioTotal.innerText = carrito.reduce( (acc, el) => acc += el.precio, 0 )
    contadorCarrrito.innerText = carrito.length
}

function filtrar() {
    
    const talles = document.getElementById('talles')
    
    if (talles.value == 'all') {
        mostrarProductos(stockProductos)
    } else {
        const arrayFiltrado = stockProductos.filter(producto => producto.talle == talles.value)
        mostrarProductos(arrayFiltrado)
    }
}

const talles = document.getElementById('talles')

talles.addEventListener('change', ()=>{
    filtrar()
})

// talles.addEventListener('input', ()=>{
//     filtrar()
// })

// talles.addEventListener('mouseover', hover)
// function hover() {
//     console.log('hiciste hover')
// }


const carrito = []

const ordenPrecios = document.getElementById('precios')

ordenPrecios.addEventListener('change', ()=>{
    if (ordenPrecios.value == 1) {
        stockProductos.sort( (a, b) => a.precio - b.precio )
        mostrarProductos(stockProductos)
    } else {
        stockProductos.sort( (a, b) => b.precio - a.precio )
        mostrarProductos(stockProductos)
    }
})
