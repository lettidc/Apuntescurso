const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//.filter va a crear un array basado en un parametro que se filtra
//podemos poner una sóla condición o enlazar varias con && y con ||
let resultado = carrito.filter(producto => producto.precio > 400 && producto.precio >600);

let resultado2 = carrito.filter (producto => producto.nombre === "Celular");

let resultado3 = carrito.filter (producto => producto.nombre !== "Audifonos");


console.log(resultado);
console.log(resultado2);
console.log(resultado3);


