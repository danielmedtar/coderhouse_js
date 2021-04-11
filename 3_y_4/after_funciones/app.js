//PARA PROBAR EL FUNCIONAMIENTO, QUITAR COMENTARIO DE A UN EJERCICIO

//Ejercicio 1. Scope
//METODO CON FUNCTION
/*
// let saludo = "Hola mundo"

function saludar() { //Declaración de la función
    let saludo = "Hola coders" 
    console.log(saludo)
}

function saludarDeNuevo() {
    let saludo = "Hola mundo"
    console.log(saludo)
}

saludar() //Llamar la función para que se ejecute
saludarDeNuevo()
*/

//METODO CON ARROW FUNCTION
/*
let saludo = "Hola mundo"

const saludar = () => { //Declaración de la función
    let saludo = "Hola coders" 
    console.log(saludo)
}

const saludarDeNuevo = () => {
    let saludo = "Hola mundo"
    console.log(saludo)
}

saludar() //Llamar la función para que se ejecute
saludarDeNuevo()
*/


//-------------------------------------------------------------

//Ejercicio 2 Scope: Parámetros:

/*
let saludo = "Hola mundo"

function saludar() { //Declaración de la función
    let saludo = "Hola coders" 
    console.log(saludo)
}

function saludarDeNuevo(mensaje) {
    console.log(mensaje)
}

saludar() //Llamar la función para que se ejecute
saludarDeNuevo(saludo)
*/
//METODO CON ARROW FUNCTION
/*
let saludo = "Hola mundo"

function saludar() { //Declaración de la función
    let saludo = "Hola coders" 
    console.log(saludo)
}

const saludarDeNuevo = (mensaje) => {
    console.log(mensaje)
}

saludar() //Llamar la función para que se ejecute
saludarDeNuevo(saludo)
*/

//--------------------------------------------------------------


//Ejercicio 3: Llamar funciones dentro de otras funciones
/*
let saludo = "Hola mundo"

function saludar() { //Declaración de la función
    let saludo = "Hola coders" 
    console.log(saludo)

    saludarDeNuevo("Un mensaje cualquiera")
}

function saludarDeNuevo(mensaje) {
    console.log(mensaje)
}

// saludar() //Llamar la función para que se ejecute
*/

//METODO CON ARROW FUNCTIONS
/*
let saludo = "Hola mundo"

const saludar = () => { //Declaración de la función
    let saludo = "Hola coders" 
    console.log(saludo)

    saludarDeNuevo("Un mensaje cualquiera")
}

const saludarDeNuevo = (mensaje) => {
    console.log(mensaje)
}

saludar() //Llamar la función para que se ejecute
*/


//--------------------------------------------------------------

//EJERCICIO 4
//SUMA
/*
function sum(a, b) {
    return a + b
    //Para poder guardar este tipo de resultados 
}
let total = sum(10, 20) //Guardar el resultado en una variable

console.log(total) //La mas util
console.log(sum(1000, 310)) //Otra forma de hacer la operación
*/


//--------------------------------------------------------------
//EJERCICIO 5
//SUMAR RANGO DE NUMEROS
//Sumar un rango: inicio - final.
//Sume todos los valores entre el inicio y el final
//Ejemplo
//1 - 5
//sumar 1 + 2 + 3 + 4 + 5 = 15
/*
function rango(inicio, final) {

    let total = 0;

    for (inicio; inicio <= final; inicio++) {
        total += inicio;
    }

    return total
}

console.log(rango(1, 5))
*/

//Si queremos que esta funcion se ejecute en ambos sentidos, tanto pasando un numero menor en el inicio, como pasandole un numero mayor, es decir que pueda funcionar si es (1, 5) o si es (5, 1):
//Forma 1
/*
function rango(inicio, final) {

    let total = 0;

    if (inicio <= final) {
        for (inicio; inicio <= final; inicio++) {
            total += inicio;
        }
    } else {
        for (final; final <= inicio; final++) {
            total += final;
        }
    }
   
    return total
}
console.log(rango(1, 50))
*/

//Forma 2
/*
function rango(inicio, final) {

    let total = 0;

    if (inicio <= final) {
        for (inicio; inicio <= final; inicio++) {
            total += inicio;
        }
    } else {
        for (inicio; inicio >= final; inicio--) {
            total += inicio;
        }
    }
   
    return total
}

console.log(rango(1, 50))
console.log(rango(50, 1))
*/


//--------------------------------------------------------------
//EJERCICIO 6
//SIMULAR PRESTAMO
//Pasar el nombre del banco, monto:
//Funcion prestamo("macro", 100000) = 130000
//funcion prestamo ("santander", 100000) = 120000


//Forma 1, con if
/*
function calcularPrestamo(banco, monto) {

    let interes = 0;

    if (banco === "Santander") {
        interes = 1.10
    } else if (banco === "Macro") {
        interes = 1.23
    } else if (banco === "Provincia") {
        interes = 1.68
    } else {
        return "Banco inválido"
    }

    return monto * interes
}

let prestamo = calcularPrestamo("Santander", 100000)

console.log(prestamo)
*/

//Forma 2: CON SWITCH
/*
function calcularPrestamo(banco, monto) {

    let interes = 0;

    switch(banco) {
        case "Santander":
            interes = 1.10
            break
        case "Macro":
            interes = 1.23
            break
        case "Provincia":
            interes = 1.68
            break
        case "Galicia":
            interes = 2.14
            break
        default:
            return "Banco inválido"
    }
    return monto * interes
}

let prestamo = calcularPrestamo("Galicia", 100000)

console.log(prestamo)
*/