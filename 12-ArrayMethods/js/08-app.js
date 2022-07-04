//utilizar rest operator o spread operator

//el spread es muy util para crear un Array nuevo sin modificar el original
const meses = ['Enero', 'Febrero', 'Marzo', 
'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// unimos 2 arrays como en el punto anterior
//metodo clasico para añadir elementos a un array
meses[7] = "Septiembre";
//con otro metodo para añadir al final
meses.push("Octubre");
//añadir al principio de un array
meses.unshift("primer mes");

//añadir al final con Spread
const meses2=[...meses, "Septiembre"];
//añadir al principio con Spread
const meses3=["primer mesecito",...meses ];

console.log(meses);
console.log(meses2);
console.log(meses3);

//Para arrays de obejtos
//primero creamos el obejto
const producto = {nombre:"disco duro", precio:300};

//luego lo añadimos al final o al principio de nuestro array carrito
const carrito2 = [...carrito, producto];

const carrito3 = [producto, ...carrito ];

console.log(carrito3);