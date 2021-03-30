//Ejemplo del chat

let turnoName = prompt("¡Bienvenido! Por favor ingrese su nombre:")

let contadorTurno = 0

while (turnoName !== "FIN") {

    contadorTurno++;

    alert( turnoName + " tu turno es el numero " + contadorTurno)

    turnoName = prompt("Ingrese otro nombre")
}

//Mis ejemplos
/*
1.
let veces = parseInt(prompt("Ingresa un número"));

for (let i = 0; i < veces; i++) {
    alert("Hola ");
}
*/

//2.
/*
let n1 = parseInt(prompt("Ingresa un número"));
let n2 = parseInt(prompt("Ingresa otro"));
let resultado = n1 + n2;

while (n1 > 0) {
    alert(resultado);
    n1 = parseInt(prompt("Ingresa un número"));
    n2 = parseInt(prompt("Ingresa otro"));
    resultado = n1 + n2;
}
*/