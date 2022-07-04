const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Otro Array Method es findIndex...

meses.forEach( ( mes,index ) => {
    if (mes === "Diciembre"){
        console.log(`encontrado en el indice ${index}`);
    }
 }
 );

 //FindIndex nos dirá el indice, es decir, la ubicación del elemento en el Array

const indice = meses.findIndex (mes => mes === "Diciembre"); //podemos cambiar a Diciembre y ver que ocurre

console.log(indice);

//Si no lo encuentra nos devuelve -1

if (indice === -1){
    console.log("El elemento no existe en el Array");
}


