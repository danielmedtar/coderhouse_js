// let color = "verde";

// //LOCAL STORAGE 

// //Iniciar un elemento del local storage
// localStorage.setItem("color", color);

// // //Eliminar elemento del local storage
// // // localStorage.removeItem("rojo")

// // //Obtener datos del local storage:
// // let colorLS = localStorage.getItem("color")

// // //Limpiar el local storage
// // localStorage.clear()

// // console.log(colorLS)


// //SESSION STORAGE
// sessionStorage.setItem("color", color)

//Local storage con arrays

//ejemplo 1
// let perros = ["Inti", "Floyd"]

// localStorage.setItem("perros", perros)

// let perrosLS = localStorage.getItem("perros")

// console.log(typeof perrosLS)

//ejemplo 2
//Arroja un string llamado [object object] porque todo lo guarda como string
// const perro = {
//     nombre: "Greta",
//     edad: 20
// }

// localStorage.setItem("perro", perro)

// let perroLS = localStorage.getItem("perro")

// console.log(perroLS)

//JSON

// const perro = {
//     nombre: "Greta",
//     edad: 20
// }

// localStorage.setItem("perro", JSON.stringify(perro))

// let perroLS = localStorage.getItem("perro")

// console.log(perroLS) //Ya no vendra como object object, si no que va a mostrar el objeto pero como si fuera un string

// console.log(JSON.parse(perroLS))//Con esto lo parsea a un objeto como tal.


let perros = ["Inti", "Floyd"]
localStorage.setItem("perros", perros)
localStorage.setItem("perrosJ", JSON.stringify(perros))
let perroLS = JSON.parse(localStorage.getItem("perrosJ"))

console.log(perroLS)

