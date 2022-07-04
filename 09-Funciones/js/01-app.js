//las funciones en cualquier lenguaje de progracion, son una serie de procedimientos o instrucciones
//que realizan una accion, de manera que perminte tener el codigo más ordenado, limpio
// y facil de entender, otra ventaja es que se puede reutilizar dicho codigo más de una vez


//Existen 2 formas principalmente de crear funciones en JS

//Declaración de un funcion,
function sumar(){
    console.log(2+2);
}
//llamar (invocar) a la funcion
sumar();

//Otra forma de crear una funcion
//Declaracion y asignación a una variable
const sumar2 = function(){
    console.log(3+3);
}
//invocación de la funcion
sumar2();
// esto no contiene valor de la funcion, sino su definición
console.log(sumar2);