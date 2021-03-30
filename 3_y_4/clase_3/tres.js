//FOR

/* 
let frutas = ["manzana", "banana", "naranja", "papaya"]

//El ciclo se repite mientras i sea menor al largo del array, así se asegura que no quede ningún elemento por fuera.

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} 
*/

//BREAK
/*
for (let i = 1; i <= 10; i++) {
    //Si la variable es igual a 5 se corta el for
    if(i === 5) {
        break;
    }
    alert(i);
}
*/

//CONTINUE
/*
for (let i = 1; i <= 10; i++) {
    //Si la variable es igual a 5 se corta el for
    if(i === 5) {
        continue;
    }
    alert(i);
}
*/

//WHILE


//ejemplo 1
/*
let entrada = prompt("Ingrese un dato");
while(entrada !== "ESC") {
    alert("El usuario ingresó " + entrada);
    entrada = prompt("Ingresar otro dato")
}
*/

//Ejemplo 2
/*
let frutas = ["manzana", "banana", "naranja", "papaya"]

let posicionFrutaEnElArray = 0;
let cantidadElementosEnElArray = frutas.length


while(posicionFrutaEnElArray < cantidadElementosEnElArray) {
    console.log(frutas[posicionFrutaEnElArray]);
    posicionFrutaEnElArray++;
}
*/

//EJEMPLO 3
/*
let nombreUsuario = prompt("Ingrese su nombre");

while(nombreUsuario !== "Daniel") {
    console.log("Usuario inválido");
    nombreUsuario = prompt("Ingrese su nombre")
}
console.log("Bienvenido Daniel")
*/

//DO...WHILE
/*
do {
    //
} while(false) {
    console.log("De lejos no se ve")
}
*/

//SWITCH
/*
let signo = prompt('De qué signo sos?').toLowerCase() //TO LOWERCASE UBICADO ALLI ES PARA QUE SIN IMPORTAR LA FORMA DE INGRESARLO SE PASE TODO A MINUSCULA Y SE EJECUTE CORRECTAMENTE EL CODIGO EN LOS CASOS PRESENTADOS EN EL SWITCH

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
*/