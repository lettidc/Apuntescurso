//Foreach y Map

let pendientes=['repasar','ejercicios con bucles','ejercicios con funciones','cruzar los dedos'];

//recorrer con un forEach con arrow function

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`) ;
  }  
);


//arrays de objetos

const carrito = [
    {id: 1, producto:"libro"},
    {id: 2, producto:"Camisa negra"},
    {id: 1, producto:"disco de vinilo"},
];

//recorrer con un forEach con arrow function


carrito.forEach( (variableCualquiera) => 
console.log(variableCualquiera.producto)
);




