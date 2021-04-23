//Declarar las variables
	const formCompra = document.getElementById("formCompra")
	const calcularIva = a => a * 0.21;

	//Se prepara para obtener los datos ingresados en el formulario
	
    let nombre = document.getElementById("nombre")
    let cantidadProducto = document.getElementById("cantidadProducto")
    let comprar = document.getElementById("comprar")

	formCompra.addEventListener('submit', ( event ) => {
    // Previene la actualización de la página
    event.preventDefault()

// Ejecuta operación
// Con value se obtiene lo que haya ingresado en el campo correspondiente
    comprar = comprar.value
    cantidadProducto = cantidadProducto.value
	nombre = nombre.value

	let subtotal = cantidadProducto * productos.find((product) => product.producto === comprar).precio; 
	let total = subtotal + calcularIva(subtotal);
	
//Se crea el párrafo para indicar el monto a pagar
	let productoPedido = document.createElement('p')
        productoPedido.textContent = `Hola ${ nombre}, el total de tu pedido es: $${ total }`

//Se agrega párrafo al HTML
        totalCompra.appendChild(productoPedido)
	})