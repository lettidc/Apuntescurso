//Los objetos pueden contener tb otros objetos
//Como cualquier tipo de dato 
//lo que llamamos objetos anidados


const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si
    informacion : {
        peso: '1kg',
        medida :"1m",
    }
};

console.log(producto);

console.log(producto.informacion);
//Podemos acceder mediante la sintaxis de punto
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);

