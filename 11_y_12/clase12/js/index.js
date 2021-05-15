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

//Agregamos inputs con jQuery
$("body").prepend(`<input type="text"   class="inputsClass">
                   <input type="number" class="inputsClass">
                   <select class="inputsClass">
                        <option value="1" selected >ID 1</option>
                        <option value="2">ID 2</option>
                        <option value="3">ID 3</option>
                    </select>`);
//Asociamos el evento change a todos los inputs
$(".inputsClass").change(function (e) { 
    console.log(e.target.value);
    console.log(this.value);
})


// $('#app').append('<h3>[APPEND] Hola desde jQuery</h3>')
// $('#app').prepend('<h3>[PREPEND] Hola desde jQuery</h3>')