//Destructuring de este objeto

const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si
    informacion : {
        peso: '1kg',
        medida :"1m",
    }
};

const { nombre, disponible, precio, 
    informacion: { peso, medida } } = producto;


console.log(nombre);
//console.log(informacion);
console.log(peso);
console.log(medida);



