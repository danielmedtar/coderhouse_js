const precioIndividual = 2000;
const iva = a => a * 0.21;

function precioTotal() {
    let cantidad = parseInt(prompt("¿Cúantas remeras querés?"))
    let subtotal = cantidad * precioIndividual;
    let total = subtotal + iva(subtotal);
    
    alert(total);
}
precioTotal()
