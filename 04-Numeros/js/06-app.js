// un par de funciones para convertir datos a numeros

const numero1="20";
const numero2="20.2";
const numero3="veinte";
const numero4=20;

console.log(numero1);

//convertir String a Numeros reales o enteros

console.log(Number.parseInt(numero1));// conversor a Entero
console.log(Number.parseFloat(numero2));// conversor a Real
console.log(Number.parseFloat(numero3));//No se puede

//Revisar si un numero es entero
console.log(Number.isInteger(numero1));
console.log(Number.isInteger(numero4));

//convertir numero a String

console.log(numero4.toString());
