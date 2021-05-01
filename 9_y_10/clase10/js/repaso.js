// //EJEMPLO DE MAP

// let tareas = [
//     {
//         'titulo': 'Tarea 1',
//         'estado': 'IN_PROGRESS'
//     },
    
//     {
//         'titulo': 'Tarea 2',
//         'estado': 'IN_PROGRESS'
//     },
    
//     {
//         'titulo': 'Tarea 3',
//         'estado': 'TO_DO'
//     },

//     {
//         'titulo': 'Tarea 4',
//         'estado': 'DONE'
//     }
// ]

// const titulosTareas = tareas.map((tarea) => tarea.titulo)

// // const titulosTareas = tareas.map(tarea => {
// //     return tarea.titulo.toUpperCase()
// // })

// //FILTER
// const tareasPorHacer = tareas.filter(tarea => tarea.estado === 'TO_DO')

// console.log(titulosTareas)
// console.log(tareasPorHacer)

//REDUCE
let carrito = [
    {
        'nombre': 'Alfajor',
        'stock': true,
        'precio': 50
    },
    
    {
        'nombre': 'Chocolate',
        'stock': true,
        'precio': 80
    },

    {
        'nombre': 'Coca',
        'stock': false,
        'precio': 90
    },
    
    {
        'nombre': 'Papas',
        'stock': true,
        'precio': 90
    }
]

const productosCarrito = carrito.map((producto) => {
    return producto.nombre.toUpperCase()
})

const totalPosta = carrito.filter(producto => producto.stock).reduce((subtotal, producto) => subtotal + producto.precio, 0)

const total = carrito.reduce((subtotal, producto) => subtotal + producto.precio, 0)

console.log(productosCarrito)
// console.log(productosStock)
console.log(totalPosta)