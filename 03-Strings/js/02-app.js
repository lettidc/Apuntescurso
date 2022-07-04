//vamos a ver algunos metodos para manipular
//string o cadenas de texto:

let producto="teclado quenoscuenta";
let precio='30 libras';

console.log(producto.length);
//Para conocer la longitud de una cadena
//No usa parentesis porque es una propiedad no un metodo en si mismo

//Nos dice la posición que tiene un texto en caso de encontrarlo
console.log(producto.indexOf('quenoscuenta'));
console.log(producto.indexOf('pulgada'));//-1 si no la encuentra

//Podemos saber si un texto concreto existe
console.log(producto.includes('quenoscuenta'));//dará true si lo encuentra
console.log(producto.includes('Quenoscuenta'));// false si no lo encuentra