const cantidadProductos = Number(prompt("Ingresa el número de productos que deseas comprar"))
let totalApagar = 0
for (let index = 1; 
    index <= cantidadProductos; 
    index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
    }
    alert("El total a pagar por la compra es: " +totalApagar)