//break y continue
//Para salirse si se cumple la condicion y que no termine el bucle
/*for(let i = 0; i <=10; i++){
    if (i === 5 ){
    console.log(`Numero es : ${i} er sinco`);
    break;
    }
    console.log(i);
}

//para continuar , es el valor por defecto, pero....
for(let i = 0; i <=10; i++){
    if (i === 5 ){
    console.log(`Numero es : ${i} er sinco`);
    continue;
    }
    console.log(i);
}
*/
//donde podemos usar el continue??...

const carrito=[
    {nombre: "Monitor", precio:500},
    {nombre: "teclado", precio:5},
    {nombre: "tablet", precio:50, descuento: true },
    {nombre: "Movil", precio:5000},
    {nombre: "Velociraptor", precio:5000000,descuento: true  },
]

for(let i = 0; i < 10; i++){
    if (carrito[i].descuento ){
        console.log(`El producto : ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}
