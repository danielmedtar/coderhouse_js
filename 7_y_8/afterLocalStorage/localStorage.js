
//Local Storage - Session Storage

// const usuario = 'Daniel'
// const edad = 34

//Recibe 2 parámetros: la key o nombre del objeto que se guarda. Y el valor del objeto guardado
// localStorage.setItem('usuario', usuario)
// localStorage.setItem('edad', edad)
//Si se manda otro objeto con la misma key, reemplaza el primero con el útimo valor que se pasa
// localStorage.setItem('usuario', 'kaskjhkhal')

//Todo lo que se almacena en el LS se almacena como un string, aunque sean números siempre se almacena como string

//Para recuperar un valor del LS se usa getitem()
//Dentro del paréntesis se le pasa el valor de la key que se quiere recuperar
// let usuarioLocal = localStorage.getItem('usuario')
// let edadLocal = localStorage.getItem('edad')

/*
console.log(usuarioLocal)
console.log(edadLocal)
console.log(typeof edadLocal)//da string como resultado


//removeItem - clear
//Igualmente se le pasa la key que se quiere remover
localStorage.removeItem('edad')

//Para borrar todo del LS se usa clear
localStorage.clear()
*/


//JSON
//Ya que el LS solo acepta strings, al pasarle un objeto el LS storage no lo reconoce. JSON traduce objetos a un string para poder almacenar en el LS

/*
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

const carrito = []

carrito.push(arrayProductos[0])
carrito.push(arrayProductos[3])

//Ya que lo pusheado para guardarse en el LS se necesita que sea un string se usa el stringify pasandole el nombre del array carrito
// let carritoJSON = JSON.stringify(carrito)
console.log(carrito)

//Para guardar los productos seleccionados en el carrito en el LS para que se mantenga si el usuario cierra el sitio y vuelve luego se hace stringify

//stringify
localStorage.setItem('carrito', JSON.stringify(carrito))


//Luego de guardarlo en el localStorage, es necesario revertir el proceso para continuar trabajando el objeto. Eso se hace con JSON parse
//parse
//Se recupera el array carrito pero con los objetos ya dentro
let carritoLS = JSON.parse(localStorage.getItem('carrito'))
// localStorage.setItem('carrito', carritoJSON)
*/
