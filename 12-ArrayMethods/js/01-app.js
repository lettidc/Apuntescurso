//metodos para facilitar el trabajo con arrays



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un elemento está o no está en un Array

meses.forEach(mes => {
    if (mes === "Enero"){
    console.log("Enero Existe");
    }
}
);

//Se puede hacer con un metodo de Arrays llamado includes

const resultado = meses.includes("Diciembre");//nos devuelve true si existe en el Array
console.log(resultado);//False si no existe en el Array

//Para Arrays con objeto utlitilamos .some

const existe = carrito.some( producto => producto.nombre === "Celular");
console.log(existe);

//Nos sirve tb para Arrays normales


const existe2 = meses.some (mes => mes ==="Febrero");
console.log(existe2);