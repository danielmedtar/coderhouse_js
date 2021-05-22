let carrito = [] //Se asigna en let para que pueda mantenerse lo que se ingresó antes de refrescar la pag

//Para agregar los productos al html
let contenedorProductos = $("#contenedor_productos");

muestraProductos(productos)

function muestraProductos(productos) {
    
     contenedorProductos.html('');//para evitar que el appendChild agregue todos los productos cuando se filtre, se coloca que el div se vacíe y solo deje lo filtrado
    
    for(const producto of productos) {
        contenedorProductos.append(`
        <div class="card_productos">
            <img class="img-producto" src=${producto.img} alt="producto">
            <div class="info_producto">
                <p class="producto_descripcion">${producto.desc}</p>
                <p class="producto-precio">$${producto.precio}</p>
                <button onclick=agregarAlCarrito(${producto.id}) class="boton-comprar">Agregar al Carrito</button>
            </div>
        </div>
            `                    
        )}
        
}

//Funcion para filtrar los productos
const filtroProducto = $("#filtro-producto")

function filtrar(event) { //En jQuery la forma correcta de recibir un value es a través de un event.

    const filter = event.target.value; //El valor de filter segun lo seleccionado, pasa a la función filtrar. Dentro de event una de las propiedades es target ( que es el html target al que apunta) y dentro de ese target se le puede apuntar al value, al name , al id, etc

//Funcion para filtrar los productos
    if (filter === 'all') { //Si el valor seleccionado corresponde a la opcion "Todos". Mostrará todos los productos
        muestraProductos(productos)
    } else {
        const productoFiltrado = productos.filter(el => el.tipo === filter)//Si se elige otro producto, filtra desde el stock evaluando que el tipo sea === al value del seleccionado
        muestraProductos(productoFiltrado)
    }    
}

filtroProducto.on('change', (event) => { //Se indica que cuando "escuche" el cambio del valor del producto (todos, notebooks o remeras) muestre el resultado de la funcion filtrar.
    filtrar(event)
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

//ELIMINAR PRODUCTO

function eliminarProducto(id) {
    const quitarProducto = carrito.find(el => el.id == id)
    const indice = carrito.indexOf(quitarProducto)
    carrito.splice(indice, 1)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    actualizarCarrito()
}

//ACTUALIZAR CARRITO

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