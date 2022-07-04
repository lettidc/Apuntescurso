//3 metodos para acceder como iteradores de objetos
// 1. keys
//2. values
//3. entries



const producto = {
    nombre: "Moni",
    precio: 30,
    disponible: true,
};


console.log(Object.keys(producto)); //nos devolvera
//un array con los keys(claves) del objeto
console.log(Object.values(producto)); // nos devolvera
//un array con los valores del objeto
console.log(Object.entries(producto));// nos devuelve
//una matriz (array de arrays) con un par llave, valor

