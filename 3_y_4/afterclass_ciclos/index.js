//CONTADOR

// const texto = "Hola Mundo!";

// for (let i = 0; i < texto.length; i++) {
//     console.log(texto[i])
// }

//Password

// const pass = "123456";
// let passInvalido = true;

// while(passInvalido) {
//     let passIngresado = prompt("Ingrese su contraseña")

//     if(passIngresado === pass) {
//         alert("Bienvenido Administrador")
//         passInvalido = false;
//     }
// }
// console.log("Ciclo terminado");

//Triangulo
//Solucion 1

// let triangulo = ""

// for(let i = 0; i < 10; i++) {
//     triangulo += "#"
//     console.log(triangulo);
// }

//Solucion 2


// for (triangulo = "#"; triangulo.length <= 10; triangulo += "#") {
//     console.log(triangulo);
// }

//Cuadricula 8x8

// for (let i = 0; i < 8; i++) {

//     if(i % 2 === 0) {
//         console.log("# # # # ")
//     } else {
//         console.log(" # # # #")
//     }
    
// }

//Cuadricula automatica segun valor

// const size = 4;

// for (let i = 0; i < size; i++) {

//     let linea = "";

//     if (i % 2 === 0) {
//         for(let j = 0; j < size; j++) {

//             if (j % 2 === 0) {
//                 linea += "#"
//             } else {
//                 linea += " "
//             }
//         }
//     } else {
//         for(let j = 0; j < size; j++) {

//             if (j % 2 === 0) {
//                 linea += " "
//             } else {
//                 linea += "#"
//             }
//         }
//     }

//     console.log(linea)
// }

//SWITCH

// let fruta = prompt("Ingrese la fruta que desea");

// switch (fruta) {

//     case "manzana":
//         alert("Precio de manzana: $120kg")
//         break;
//     case "cambur":
//         alert("Precio de cambur: $140kg")
//         break;
//     case "mandarina":
//         alert("Precio de mandarina: $80kg")
//         break;
//     case "fresa":
//         alert("Precio de fresa: $120kg")
//         break;
//     default:
//         alert("Fruta invalida")
//         break;
// }