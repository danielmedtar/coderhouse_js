let carrito = [] //Se asigna en let para que pueda mantenerse lo que se ingresó antes de refrescar la pag


//Para agregar los productos al html
const contenedorProductos = document.getElementById('contenedor_productos') //Se llama con el id del div que se creó para que entren los productos

muestraProductos(productos)

function muestraProductos(array) {

    contenedorProductos.innerHTML = ''//para evitar que el appendChild agregue todos los productos cuando se filtre, se coloca que el div se vacíe y solo deje lo filtrado

    array.forEach((producto) => {

        let div = document.createElement('div') //Se crea un div nuevo que sirva de card
        div.classList.add('card_productos') //Se le asigna su clase al div

        //Se crea el contenido de la card
        div.innerHTML = ` 
        <img class=img-producto src=${producto.img} alt="producto">
        <div class="info_producto">
        <p class="producto_descripcion">${producto.desc}</p>
        <p class="producto-precio">$${producto.precio}</p>

        <button onclick=agregarAlCarrito(${producto.id}) class="boton-comprar">Agregar al Carrito</button>  
        
        `
        contenedorProductos.appendChild(div) //Se agrega la card al contenedor principal del html contenedor_productos
    })
}

//Funcion para filtrar los productos
const filtroProducto = document.getElementById('filtro-producto')//Se llama con el id de la select

function filtrar() {

    if (filtroProducto.value === 'all') { //Si el valor seleccionado corresponde a la opcion "Todos". Mostrará todos los productos
        muestraProductos(productos)
    } else {
        const productoFiltrado = productos.filter(el => el.tipo === filtroProducto.value)//Si se elige otro producto, filtra desde el stock evaluando que el tipo sea === al value del seleccionado
        muestraProductos(productoFiltrado)
    }
}

filtroProducto.addEventListener('change', () => { //Se indica que cuando "escuche" el cambio del valor del producto (todos, notebooks o remeras) muestre el resultado de la funcion filtrar.
    filtrar()
})

//AGREGAR AL CARRITO

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
function eliminarProducto(id) {
    const quitarProducto = carrito.find(el => el.id == id)
    const indice = carrito.indexOf(quitarProducto)
    carrito.splice(indice, 1)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}

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


