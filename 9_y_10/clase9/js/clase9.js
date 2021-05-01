const btn0 = document.getElementById('btn0')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')


//CALLBACK CON FUNCION ANONIMA
btn0.addEventListener('click', () => {
    console.log('Click!')
})


//CALLBACK CON FUNCION NO ANONIMA
const clickOnButton = (event) => {
    console.log(event.target) //target retorna el elemento que se clickea
}


btn1.addEventListener('click', clickOnButton)
btn2.addEventListener('click', clickOnButton)

//OPCION 2
btn3.onclick = () => {
    console.log('Click3')
}

//EVENTOS MOUSE
const btn5 = document.getElementById('btn5')

btn5.onmousemove = () => {
    console.log('Se mueve!!')
}

btn5.onmouseleave = () => {
    console.log('VUELVEEE')
    btn5.className = 'btn-rojo'
}

btn5.onmouseover = () => {
    console.log('Over')
    btn5.className = 'btn-verde'
}

//EVENTOS TECLADO
const input = document.getElementById('input')

input.onkeyup = () => {
    // console.log('Levantaste el dedo de la tecla')
    console.log(input.value)
}
input.onkeydown = () => {
    // console.log('Presionaste una tecla')
}

input.onfocus = () => {
    console.log('entraste al input')
}

//FORM
const checkBox = document.getElementById('check-box')

let arepas = false;

checkBox.onchange = () => {
    arepas = !arepas
    console.log(`Le gustan las arepas: ${arepas}`)
}

FormData.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(event.target)
} )