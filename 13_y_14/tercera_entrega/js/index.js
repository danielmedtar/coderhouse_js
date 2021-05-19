$("body").fadeIn(1500)

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