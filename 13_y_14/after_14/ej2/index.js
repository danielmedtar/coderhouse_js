const KEY = 'Y8LpfAGP17fXcDGBYzNR6VJnNllVeH9x'

//CON JQUERY

//     const llamarApi = (busqueda) => {

//         $.get(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${encodeURI(busqueda)}&limit=20`, function(response){ //ENCODE URI SIRVE PARA ELIMINAR LOS ESPACIOS (DE TENER) CUANDO UN USUARIO HACE UNA BUSQUEDA

//         $('.row').html('')

    //      response.data.forEach(element => {
        
    //     $('.row').append(`    
    //         <li class="card col-3">
    //             <img src=${element.images.downsized_medium.url} alt="">
    //         </li>
    //     `)
    // });
//     })    
// }


//CON FETCH

const llamarApi = async (busqueda) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${encodeURI(busqueda)}&limit=20`)
    const {data} = await resp.json()
    const arrayImgs = data.map(el => el.images.downsized_medium.url)

    $('.row').html('')

    arrayImgs.forEach(img => {
        
        $('.row').append(`    
            <li class="card col-3">
                <img src=${img} alt="">
            </li>
        `)
    });
}


$('form').on('submit', (event) => {
    event.preventDefault()
    llamarApi($('input').val())
})

