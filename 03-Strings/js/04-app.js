//3 metodos nuevos para Strings

const producto='      Monitor de 295 pulgadas       ';

console.log(producto);
console.log(producto.length);

//Eliminar el inicio de la cadena

console.log(producto.trimStart());//Elimina todos los espacios en blanco del inicio
console.log(producto.trimEnd());//Elimina todos los espacios en blanco del final
console.log(producto.trimStart().trimEnd());//Elimina todos los espacios en blanco 

console.log(producto.trim().length);//Elimina todos los espacios en blanco 
console.log(producto.length);




