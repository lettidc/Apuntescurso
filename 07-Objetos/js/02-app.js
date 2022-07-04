//Como podemos acceder a las propiedades de un objeto

const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si

}

console.log(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//forma clásica de acceso a una propiedad

console.log(producto['precio']);

//Añadir propiedades nuevas a un objeto

producto.imagen = "image.jpg";

//eliminar una propiedad

delete producto.imagen;

console.log(producto);