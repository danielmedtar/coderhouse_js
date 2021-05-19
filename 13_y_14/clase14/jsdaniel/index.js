  
const URL = 'http://localhost:3000'

$("#btn").on('click', () => {

    $.get(`${URL}/users`, (response, status) => {

        if ( status === 'success') {

            console.log(response)

            for( const user of response ) {
                $("body").prepend(`
                    <h3>${user.username}</h3>
                `)
            }

        }

    })

})