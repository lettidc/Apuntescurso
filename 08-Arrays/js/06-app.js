//supongamos que creamos un carrito de la compra, desde
//la consola, más adelante intentaremos hacerlo de un interfaz grafico

const carrito = [];//creamos un carrito de array vacio

//Le vamos a a añadir producto

const producto = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,

}

const producto2 = {
    nombre:"Smartphone",
    precio: 900,

}
/*esta forma nos obliga a saber el estado del carrito
//antes de añadir el producto
carrito[0]=producto;
carrito[1]=producto2;*/

//Si no conocemos el estado del producto
carrito.push(producto);
carrito.push(producto2);

//añadir al inicio del carrito
const producto3 ={
    nombre: "teclado",
    precio: 20,
}

carrito.unshift(producto3);

console.log(carrito);