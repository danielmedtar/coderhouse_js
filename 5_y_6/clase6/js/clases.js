class Persona {

    construcor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

const persona1 = new Persona("Santiago", 22)

// console.log(persona1)

persona1.saludar()