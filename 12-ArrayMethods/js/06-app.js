//.every
// todos los elementos del Array deben cumplir una condicion
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//foreach

let cumple=true; //variable chivata que nos dice que se cumple la condicion

carrito.forEach( producto => {
    if(producto.precio < 700){
        cumple=false;
        return;
    }

});

console.log(cumple);
    
    
const resultado = carrito.every( producto => 
    producto.precio < 700 );


 console.log(resultado); 



