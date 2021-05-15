const inputTexto = $('.inputIngreso')
const botonAgregar = $('button#formButton')
const contenedorTareas = $('.listaTareas') 

let contadorTareas = 0

botonAgregar.on('click', function(event) {
    event.preventDefault()

    const valor = inputTexto.val()

    if (valor.length >= 1) {

        contenedorTareas.append(`
            <li class="tarea">
                <p id="tarea${contadorTareas}">${valor}</p>
                <button id="eliminar${contadorTareas}" class="boton boton-eliminar">Eliminar</button>    
            </li>
        `) 

            inputTexto.val('')

            $(`#tarea${contadorTareas}`).on('click', function() {
                $(this).toggleClass('tarea-completada')
            })

            $(`#eliminar${contadorTareas}`).on('click', function() {
                $(this).parent().remove()
            })

            contadorTareas++
        }
})