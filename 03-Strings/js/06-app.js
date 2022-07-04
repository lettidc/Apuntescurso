//Repeat
const producto="Monitor 24 pulgadas";
const texto="En Promoción".repeat(3);//modifica el valor de texto

console.log(texto);
console.log(producto.repeat(3));//no modifica el valor de producto
console.log(producto.repeat(2.5));//lo repite 2 veces, redondeando hacia abajo

console.log(`${producto} ${texto} !!!!!!!!!`);

//Split

const actividad= "Estoy enseñando JS";//Nos separa en vectores
console.log(actividad.split(" "));//y nos extrae el parametro (char/string/cadena) indicado

const hobbies='Frodo, Sam, Merry, Pippin';
console.log(hobbies.split(","));
//No os pongais nerviosos a esto no le hagais caso
let auxiliar=hobbies.split(", ");
auxiliar=auxiliar[2].split(' y');

console.log(auxiliar);


