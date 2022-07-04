//Operador ternario
//Hacer un if en una sola linea de codigo

const autenticado= false;
const puedePagar = true;
//comprobamos si el usuario está identificado
console.log( autenticado ? 'Si, so está' : 'No, no lo esta');
//Si además puede pagar
console.log( autenticado && puedePagar ? 'Si, so está' : 'No, no lo esta');
//Anidando ternarios

console.log( autenticado ? puedePagar ?'Si, puede pagar' : 'No, no puede pagar' : 'No, no esta identificado');






