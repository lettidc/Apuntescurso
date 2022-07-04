//Concatenar o unir 2 texto o variables
const producto='raton inalambrico';
const precio="20 Euros/pesetas";


//Añadir nuevo texto
console.log(producto.concat(' En descuento'));//concatenamos un string

//queremos unirlo en un solo mensaje 2 variables
console.log(producto.concat(precio));//concatenamos una variable ya existente

//Otras formas de concatenar

console.log(producto+precio);
console.log(producto+""+precio);
console.log("El producto "+producto+ " tiene un precio de "+precio);
console.log("El producto", producto, "tiene un precio de",precio);
//Nueva version de JS ES06 Template String, template literal
console.log(`El producto ${producto} tiene un precio de ${precio}`);





