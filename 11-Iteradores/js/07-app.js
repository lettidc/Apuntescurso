//for in

//va a iterar sobre todas las propiedades de un objeto

//como carrito es un array no uso for in, en su lugar uso
//for of que es mucho más util
const carrito = [
    {id: 1, producto:"libro"},
    {id: 2, producto:"Camisa negra"},
    {id: 1, producto:"disco de vinilo"},
];

console.log(carrito[2]);
//for of itera sobre el value del array
for(let producto of carrito)
{
    console.log(producto.producto);
}

console.log("--------");
console.log("--------");
console.log("--------");
console.log("--------");



//for in se usa para objeto únicamente

let coche = {
    modelo: "shelby",
    motor: "6.0",
    anio: "1966",
    marca: "mustang",
    }

    for(let cochecito in coche)
    {
        console.log(`${cochecito} : ${coche[cochecito]}`);
    }







