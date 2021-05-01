const productos = [

    {
        'nombre': 'Alfajor',
        'stock': true,
        'precio': 50
    },
    {
        'nombre': 'Chocolate',
        'stock': false,
        'precio': 80
    },
    {
        'nombre': 'Coca',
        'stock': true,
        'precio': 75
    },
    {
        'nombre': 'Papas fritas',
        'stock': false,
        'precio': 50
    },
    {
        'nombre': 'Caramelos',
        'stock': true,
        'precio': 15
    }
]

const productosEnStock = productos.filter(producto => producto.stock)
const productosList = document.getElementById('productos')


for (let i = 0; i < productos.length; i++) {
    const itemProducto = document.createElement('li')
    itemProducto.textContent = `${productosEnStock[i].nombre} / Precio: ${productosEnStock[i].precio}`
    productosList.appendChild(itemProducto)
}