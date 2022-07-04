//Funciones que tienen parametros y argumentos

sumar(10,300);
//a y b son unos numeros genericos para poder sumarlos
//a y b los vamos a llamar parámetros

function sumar( a, b){ //declarar una funcion
    console.log(a+b); //accion a realizar por la funcion
}


sumar(10,300);// llamada a una funcion
//son argumentos

//Funcion un poco más complicada

function saludar(nombre,apellido){
    console.log("Hola :", nombre,"mi apellido es :",apellido);
}

saludar();
