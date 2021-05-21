//AJAX = ASYNCHRONOUS JAVASCRIPT AND XML

let id = 0



//LLAMAR API CON JQUERY
// const llamarApi = () => {
//     id++

//     $.get(`https://www.breakingbadapi.com/api/quotes/${id}`, function(response) {
//     console.log(response[0])

//     $('#quote').text(response[0].quote)
//     $('#author').text(response[0].author)




//     })
// }

// $('#siguiente').on('click', llamarApi)


//LLAMAR API CON FETCH JS NATIVO

// const llamarApi = ()=>{
//     id++
//     fetch(`https://www.breakingbadapi.com/api/quotes/${id}`)
//         .then(response => response.json())
//         .then( data => {

            // $('#quote').text(data[0].quote)
            // $('#author').text(data[0].author)
//         })
// }

// $('#siguiente').on('click', llamarApi)


//ASYNC Y AWAIT
//Solo se puede usar en funciones asincronicas
// const llamarApi = async () => {
    
//     id++
//     const resp = await fetch(`https://www.breakingbadapi.com/api/quotes/${id}`)

//     const data = await resp.json()

//     $('#quote').text(data[0].quote)
//     $('#author').text(data[0].author)
// }


$('#siguiente').on('click', llamarApi)