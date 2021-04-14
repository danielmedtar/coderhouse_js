//VARIABLES

class Cliente {
    constructor(nombre, genero) {
      this.nombre = nombre;
      this.genero = genero.toLowerCase();
    }
  }
  let productos = [{
      producto: "notebooks",
      precio: 100000
    },
    {
      producto: "remeras",
      precio: 2000
    }
  ]
  const calcularIva = a => a * 0.21;
  
  //EJECUCION DEL CODIGO
  //Recopilar datos del cliente
  
  let cliente1 = new Cliente(prompt("Cual es tu nombre?"), prompt("Sos mujer u hombre?"))
  if (cliente1.genero === "mujer") {
    console.log("Bienvenida " + cliente1.nombre + " " + "te mostraremos prendas de mujer")
  } else {
    console.log("Bienvenido " + cliente1.nombre + " " + "te mostraremos prendas de hombre")
  }
  
  
  //Determinar monto total a pagar

  let comprar = prompt("¿Querés comprar remeras o notebooks?").toLowerCase()
  if (comprar === "remeras" || comprar === "notebooks") {

    let cantidad = parseInt(prompt(`¿Cúantas ${comprar} querés?`))

    let subtotal = cantidad * productos.find((product) => product.producto === comprar).precio;

    let total = subtotal + calcularIva(subtotal);
    console.log(total);
  
  } else {
    alert("Elige solo entre remeras y notebooks")
  }