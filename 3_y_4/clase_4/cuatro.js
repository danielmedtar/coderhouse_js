//FUNCIONES
//EJEMPLO 1
/*
function leerHoroscopoPorSigno() {
    
    let signo = prompt('De qué signo sos?').toLowerCase()

    switch ( signo ) {

        case 'tauro':
            console.log('leo horoscopo tauro')
            break
            
        case 'cancer':
            console.log('leo horoscopo cancer')
            break

        default:
            console.log('Eso no es un signo, habla con Saussure')
            break
    }
}
leerHoroscopoPorSigno();
*/
//EJEMPLO 2
/*
function obtenerSigno() {
   let signo = prompt('De qué signo sos?').toLowerCase();
   return signo;
}

function leerHoroscopoPorSigno(signo) {

    switch ( signo ) {

        case 'tauro':
            console.log('leo horoscopo tauro')
            break
            
        case 'cancer':
            console.log('leo horoscopo cancer')
            break

        default:
            console.log('Eso no es un signo, habla con Saussure')
            break
    }
}
let signo = obtenerSigno();
leerHoroscopoPorSigno(signo);
*/

//EJEMPLO 3
/*
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;

        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

const resultado = calculadora(1,2, "+");
console.log(resultado)
*/

//SCOPE (ÁMBITO DE UNA FUNCION). 
/*
let variableGlobal = "variableGlobal"

function fn() {
    console.log(variableGlobal)
    let variableLocal = "variableLocal"
    console.log(variableLocal)
}
fn();
//LA VARIABLELOCAL SOLO FUNCIONA DENTRO DE LA FUNCIONA, SI LA LLAMAS FUERA NO SIRVE
*/

//FUNCION ANONIMA
/*
const saludarDaniel = function() {
    console.log("Hola Daniel");
}
saludarDaniel();
*/

//FUNCIONES FLECHA
//Ejemplo 1
/*
const arrowFn = () => {
    console.log("Hola Daniel")
}

arrowFn();
*/

/*
const arrowFn = (nombre) => {
    console.log("Hola " + nombre)
}

arrowFn("Daniel");
*/

/*
const suma = function(num1, num2) {
    return num1 + num2;
}
let resultado = suma(1, 4);
console.log(resultado)
*/

const arrowSuma = (num1, num2) => num1 + num2

let resultado = arrowSuma(1, 4)
console.log(resultado)