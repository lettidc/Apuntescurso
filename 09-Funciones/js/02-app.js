//Hoisting Diferencias entre los dos tipos de creacion de funciones
// Sintaxis es diferente

function sumar(){
    console.log(2+2);
}
sumar();

sumar2();

const sumar2 = function(){
    console.log(3+3);
}


//Se ejecuta el codigo en 2 fases (Hoisting)
//Primero una fase de creación donde se crean todos los elementos
// y segundo una fase de ejecución
/*
const sumar2;
sumar2(); //undefined
sumar2 = function ()
{
    console.log(3+3);
}
*/


