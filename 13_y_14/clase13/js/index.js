$("body").prepend('<h3 class="mensaje">Buen sábado!!</h3>')


// $('h3').show() //Quita display none
// $('h3').hide() //Agrega display none


// $(".mensaje").fadeIn() aparece poco a poco. se le puede determinar el tiempo para aparecer 

//Aparece hacia abajo
// $('#btnDown').on('click', () => {
//     $(".mensaje").slideDown()
// })

// //Desaparece hacia arriba
// $('#btnUp').on('click', () => {
//     $(".mensaje").slideUp()
// })

// //Aparece y desaparece segun el click
// $('#btnToggle').on('click', () => {
//     $(".mensaje").slideToggle()
// })

// $("#btn").on('click', () => {
//     $(".mensaje").css({
//         "background-color": "blue",
//         "color": "red"
//     })
// })


//ACTIVAR Y DESACTIVAR CLASE DE CSS
// $("#btn").on('click', () => {
//     $(".mensaje").toggleClass('mensaje-modificado')
// })

//ANIMATE

// $("#btn").on('click', () => {
//     $(".mensaje").animate ({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'

//     },
//         10000, () => {
//             $(".mensaje").addClass('mensaje-modificado')
//         })
// })


//ENCADENAR EFECTOS
 $("#btn").on('click', () => {
     $(".mensaje")
        .toggleClass('mensaje-modificado')
        .delay(500) //debe estar entre 2 y es el tiempo que pasará entre uno y otro
        .slideToggle()
})