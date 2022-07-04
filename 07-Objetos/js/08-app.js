"use strict";

//Otro metodo de objeto similar a Freeze es Seal
//Pero a diferencia de Freeze, no se puede agregar ni
//eliminar propiedades pero si se pueden modificar las existente


const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si
    
};

Object.seal(producto);

// se puede reasignar
producto.nombre="Lo que quiero";
//pero no se puede ni añadir ni borrar
/*producto.tamanyo=500;
console.log(producto);
delete producto.tamanyo;
*/
console.log(producto);



