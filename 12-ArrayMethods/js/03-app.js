// .reduce
//Nos acumula varios valores en uno solo
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Que nos muestre el precio total del carrito

//con un foreach clásico
let total=0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

// con .reduce


let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);
