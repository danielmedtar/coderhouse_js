console.log('Ok')

$(document).ready(function() {
    console.log("El DOM esta listo")

})

const productos = [
    {id: 1, nombre: 'fernet', precio: 150},
    {id: 2, nombre: 'vino', precio: 500},
    {id: 3, nombre: 'ginebra', precio: 50}
]

for (const producto of productos) {
    $('#lista-productos').prepend(`
        
        <li id="producto-${producto.id}"> ${producto.nombre}</li>
        
        `)
        
        $(`#producto-${producto.id}`).on('click', () => {
            
            console.log(producto)

        })
}



// $('#app').append('<h3>[APPEND] Hola desde jQuery</h3>')
// $('#app').prepend('<h3>[PREPEND] Hola desde jQuery</h3>')