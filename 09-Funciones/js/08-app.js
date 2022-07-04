//Funciones que retornan valores
/*
function sumar(a,b){
   return a+b; // palabra reservada para devolver un dato
}

const resultado = sumar(1,2);

console.log(resultado);
*/
//Ejemplo más avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio; 
}

function calcularImpuesto(total){
    return 1.21 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar con iva es de ${totalPagar}`);



