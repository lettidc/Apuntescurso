//Metodos propios de JS para Arrays
//Convertimos foreach y Map a Arrow Functions


const carrito = [
    {nombre:"monitor",precio:900},
    {nombre:"tablet",precio:500},
    {nombre:"teclado",precio:100},
    {nombre:"raton",precio:9},
    {nombre:"smartphone",precio:600},
]

//ForEach es un método de JS
const arrayNuevo2 = carrito.forEach ((producto)=>`${producto.nombre} ${producto.precio} `);

//Muy similar a Foreach , metodo MAP
//nos crea un array nuevo y se puede guardar su información 
//con forEach no se puede guardar
const arrayNuevo = carrito.map ((producto) => `${producto.nombre} ${producto.precio} `);

console.log(arrayNuevo);//Map nos guarda el valor en una variable
console.log(arrayNuevo2);//Foreach No nos guarda el valor 