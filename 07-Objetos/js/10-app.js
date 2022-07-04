// Otra forma más moderna de unir dos objetos
//es a traves del Spread Operator, o rest operator

const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si
    
};

const medidas = {
    peso: "lo que sea",
    medida: "otra cosa",
};

// ... es el spread operator o operador rest
const resultado = {...producto, ...medidas };

console.log(resultado);