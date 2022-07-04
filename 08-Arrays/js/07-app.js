//Añadir a un Array elementos utilizando el Spread operator (Rest operator)

const carrito = [];//creamos un carrito de array vacio

//Le vamos a a añadir productos

const producto = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,

}

const producto2 = {
    nombre:"Smartphone",
    precio: 900,

}

const producto3 ={
    nombre: "teclado",
    precio: 20,
}
//Spread operator para añadir elementos 
// en una variable que no modifica el contenido de Carrito
let nuestroCarrito = [...carrito, producto];
nuestroCarrito = [...nuestroCarrito, producto2];

//añadir al inicio
nuestroCarrito = [producto3,...nuestroCarrito, ];


console.log(carrito);
console.log(nuestroCarrito);