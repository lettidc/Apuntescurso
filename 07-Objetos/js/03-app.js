//Vamos a asignar valores a un objeto

const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si

};

//const nombre = producto.nombre; //asignacion como hasta ahora

//otra forma de hacerlo y que es nueva, es algo llamado
//object destructuring...
//Destructuring significa, sacar de una estructura,
//aunque parace complejo no lo es tanto...
//const { nombre } = producto;
//const { precio } = producto;

const {nombre,precio} = producto;

console.log(nombre);
console.log(precio);
