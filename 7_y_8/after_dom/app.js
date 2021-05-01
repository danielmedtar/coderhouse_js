//formas de obtener elementos del DOM

// let titulo = document.getElementsByTagName('h1')
// let titulo = document.getElementsByClassName('titulo')
// let usuario = prompt('Ingresa tu nombre')

// let titulo = document.getElementById('titulo')

// //agregar texto dentro de un elemento en el html
// // titulo.innerText = 'Bienvenido Coders'

// //agregar otro tipo de elementos al HTML
// titulo.innerHTML = 'Bienvenido ' +  usuario

//formas de incluir elementos HTML con JS
//forma 1 - create element
//crear div de tarjeta
// let div = document.createElement('div')
// div.classList.add('producto')

// let img = document.createElement('img')
// img.src = "img/buzo.jpg"
// div.appendChild(img)

// let titulo = document.createElement('h3')
// titulo.innerText = 'Buzo 1'
// div.appendChild(titulo)

// let precio = document.createElement('p')
// precio.innerText = '1200'

// div.appendChild(precio)

// const contenedorProductos = document.getElementById('contenedor-productos')
// contenedorProductos.appendChild(div)

//FORMA 2 - COPIANDO HTML
// const contenedorProductos = document.getElementById('contenedor-productos')

// contenedorProductos.innerHTML += `
// <div class="producto">
//     <img src="img/buzo.jpg" alt="">
//     <h3>Buzo 1</h3>
//     <p>Un buzo que re va con vos</p>
//     <p>Talle: L</p>
//     <p class="precioProducto">Precio: $1200</p>
//     <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
// </div>
// `

//FORMA 3 - FORMA HIBRIDA
//EJEMPLO 1
// const contenedorProductos = document.getElementById('contenedor-productos')

// let div = document.createElement('div')
// div.classList.add('producto')

// div.innerHTML += `
//     <img src="img/buzo.jpg" alt="">
//     <h3>Buzo 1</h3>
//     <p>Un buzo que re va con vos</p>
//     <p>Talle: L</p>
//     <p class="precioProducto">Precio: $1200</p>
//     <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
// `

// contenedorProductos.appendChild(div)


//EJEMPLO 2 CON ARRAY DE PRODUCTOS EN ARCHIVO STOCK COPIANDO Y PEGANDO LOS DATOS DEL ARRAY
// let producto1 = stockProductos[0]
// let producto2 = stockProductos[11]

// const contenedorProductos = document.getElementById('contenedor-productos')

// let div = document.createElement('div')
// div.classList.add('producto')

// div.innerHTML += `
//     <img src=${producto1.img} alt="">
//     <h3>${producto1.nombre}</h3>
//     <p>${producto1.desc}</p>
//     <p>Talle: ${producto1.talle}</p>
//     <p class="precioProducto">Precio: $${producto1.precio}</p>
//     <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
// `
// let div2 = document.createElement('div')
// div2.classList.add('producto')

// div2.innerHTML += `
//     <img src=${producto2.img} alt="">
//     <h3>${producto2.nombre}</h3>
//     <p>${producto2.desc}</p>
//     <p>Talle: ${producto2.talle}</p>
//     <p class="precioProducto">Precio: $${producto2.precio}</p>
//     <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
// `

// contenedorProductos.appendChild(div)
// contenedorProductos.appendChild(div2)

//EJEMPLO 3
//Asi se evita escribir un largo código de html y toma todos los datos del js
// const contenedorProductos = document.getElementById('contenedor-productos')

// stockProductos.forEach((producto) => {
// console.log(producto)

//     let div = document.createElement('div')
//     div.classList.add('producto')
    
//     div.innerHTML = `
//         <img src=${producto.img} alt="">
//         <h3>${producto.nombre}</h3>
//         <p>${producto.desc}</p>
//         <p>Talle: ${producto.talle}</p>
//         <p class="precioProducto">Precio: $${producto.precio}</p>
//         <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
//     `
    
//     contenedorProductos.appendChild(div)
// })

//ejemplo 4. Completo haciendo funcionar el boton de filtrar

const contenedorProductos = document.getElementById('contenedor-productos')

mostrarProductos(stockProductos)

function mostrarProductos(array) {
    
    contenedorProductos.innerHTML = ''//para evitar que el appendChild agregue todos los productos cuando se filtre, se coloca que el main se vacíe y solo deje lo filtrado

    array.forEach((producto) => {
        console.log(producto)
        
            let div = document.createElement('div')
            div.classList.add('producto')
            
            div.innerHTML = `
                <img src=${producto.img} alt="">
                <h3>${producto.nombre}</h3>
                <p>${producto.desc}</p>
                <p>Talle: ${producto.talle}</p>
                <p class="precioProducto">Precio: $${producto.precio}</p>
                <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
            `
            
            contenedorProductos.appendChild(div)
        })
}

function filtrar() {
    const talles = document.getElementById('talles')

    if (talles.value == 'all') {
        mostrarProductos(stockProductos)
    } else {
        const arrayFiltrado = stockProductos.filter(el => el.talle == talles.value)
        mostrarProductos(arrayFiltrado)
    }

}





