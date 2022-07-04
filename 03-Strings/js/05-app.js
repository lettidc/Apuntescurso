//3 metodos para modificar cadenas

//Replace

const producto='Monitor de 767677 Pulgadas';
console.log(producto.replace("767677","32"));
console.log(producto.replace("Pulgadas",'"'));

//Slice extraer una parte de una cadena

console.log(producto.slice(0,10).length);//inicia en 0 y corta hasta la 10
console.log(producto.slice(8));//inicia en 8 y corta hasta el final
console.log(producto.slice(7,20));//inicia en 7 y corta hasta el 20

console.log(producto.slice(2,1));//no se puede

//subString

console.log(producto.substring(0,10));//inicia en 8 y corta hasta el final
console.log(producto.substring(10,6));//    SI SE PUEDE
//Como mostramos la inicial de nuestro nombre en la Web
const nombre= "Teodosio";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));//Seleccionar un caracter en dicha posicion