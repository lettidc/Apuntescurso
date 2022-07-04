//Metodos propios de JS para Arrays

const carrito = [
    {nombre:"monitor",precio:900},
    {nombre:"tablet",precio:500},
    {nombre:"teclado",precio:100},
    {nombre:"raton",precio:9},
    {nombre:"smartphone",precio:600},
]

//recorrer un array de forma tradicional
//con un for que nos muestra su contenido


for (let j = 0; j < carrito.length; j++){
    console.log(`${carrito[j].nombre} ${carrito[j].precio} `);
}

//ForEach es un método de JS
const arrayNuevo2 = carrito.forEach (
    function(producto){
    return `${producto.nombre} ${producto.precio} `;
}
)

//Muy similar a Foreach , metodo MAP
//nos crea un array nuevo y se puede guardar su información 
//con forEach no se puede guardar
const arrayNuevo = carrito.map (
    function(producto){
    return `${producto.nombre} ${producto.precio} `;
}
)

console.log(arrayNuevo);
console.log(arrayNuevo2);


