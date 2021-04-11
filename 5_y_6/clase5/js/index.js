// const persona = {
//     nombre: "Daniel",
//     edad: 34,
//     tutorear: function() {
//         console.log("Hola estoy tutoreando")
//     }
// }
// console.log(persona)

/*Para acceder a los valores de las claves
1) console.log(persona.nombre) Para acceder a las claves
2) console.log(persona["nombre"])
*/


//Para acceder a los metodos:
// persona.tutorear()


/*Obtener todos los datos del objeto
// const claves = Object.getOwnPropertyNames(persona)

// console.log(claves)

const entries = Object.entries(persona)

console.log(entries)*/

/*
Para agregar nuevas claves y valores al objeto:
persona.profesion = "Developer"
console.log(persona)
*/

/*
Modificar claves y valores

persona.nombre = "Alma"
console.log(persona)
*/



/*CONSTRUCTORES PARA OBJETOS CON MUCHAS CLAVES Y PROPIEDADES
//Siempre es importate contemplar dentro de los parámetros dentro de la función todo lo que se vaya a necesitar obtener. De lo contrario no se podrá agregar algo nuevo.

function Estudiantes (nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}

const Carla = new Estudiantes("Carla", 16, "programadora")
console.log(Carla.edad)
*/


/*
//THIS
const test = {
    prop: 42,
    func: function () {
        return this.prop
    }
}

console.log(test.func())
*/

//OPERADORES IN Y FOR...IN

//in: Para comprobar si un objeto tiene una propiedad o no
/*
const persona = {
         nombre: "Daniel",
         edad: 34,
         tutorear: function() {
             console.log("Hola estoy tutoreando")
         }
     }
    
    // console.log("nombre" in persona) //En este caso imprime true porque si existe una propiedad nombre dentro del objeto


//CON EL FOR SE recorre e ITERA todas las claves y propiedades que tiene el objeto persona y se guardan en una variable const propiedad.
    for (const propiedad in persona) {
        console.log(propiedad)
        console.log(persona[propiedad])
    }

    //el primero console log imprime el nombre de la clave, es decir nombre, edad, y tutorear. Y el segundo console log imprime los valores de las claves, es decir Daniel, 34, y la funcion
    */