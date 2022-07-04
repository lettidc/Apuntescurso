//Vamos a ver como prevenirlo
//Usaremos el modo estricto

"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si
    
};

//Usando el modo stricto tenemos acceso a un par de metodos de objeto
//llamados tb object Method
//1.Previene que un objeto sea modificado 

Object.freeze(producto);//coge como argumento un objeto

//producto.disponible=false;

// tb nos previene de añadirle nuevas propiedades

//producto.imagen="img.jpg";

//Tampoco podemos eliminar propiedades

//delete producto.nombre;

//Podemos consultar si un objeto está congelado o no

console.log(Object.isFrozen(producto));

console.log(producto);