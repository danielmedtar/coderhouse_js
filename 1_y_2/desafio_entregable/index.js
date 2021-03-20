let numero = prompt("Ingresa un número entre el 10 y el 50");
numero = parseInt(numero);

if (numero >= 10 && numero <= 50) {
    alert("Tu número es " + numero);
} else {
    alert("Error. Ingresa un numero del 10 al 50");
}