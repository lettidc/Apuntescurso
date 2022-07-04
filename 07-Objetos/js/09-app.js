//Vamos a unir dos objetos se usa generalmente
//para obtener datos de una Base de Datos
//ID


const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si
    
};

const medidas = {
    peso: "lo que sea",
    medida: "otra cosa",
};

//Una forma de hacerlo es con el object method assing

const resultado = Object.assign(producto, medidas);


console.log(resultado);


