const abrirCarrito = document.getElementById('boton-carrito')

const modalContenedor = document.getElementsByClassName('modal-contenedor')[0] //Por ser una clase se le indica que debe tomar el índice 0 indicando que queremos trabajar el primer elemento que tenga esa clase

const cerrarCarrito = document.getElementById('cerrar-carrito')

const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


//Con estas arrow functions se indica que cada vez que se haga clic en los elementos llamados, se les añada la clase active
abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

modalContenedor.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

//Con esta se evita que el modal se cierre al hacer clic incluso dentro de él
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})