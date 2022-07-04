//Como eliminamos elementos en un array

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
//añadimos
carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

/*eliminar con shift() el primer elemento de un array

carrito.shift();

//eliminar el ultimo elemento

carrito.pop();
carrito.pop();*/

//Eliminar elementos concretos o del centro del Array
carrito.splice(1,1);
//el primer parametro nos dice el indice del elemento a borrar
// el segundo nos dice cuantos elementos se van a a borar
//desde el indice
carrito.splice(1,2);//borra 2 elementos
carrito.splice(1);//borra hasta el final


console.log(carrito);



