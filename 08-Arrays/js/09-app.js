//Array Destructuring - Al igual que con los objetos, algunas veces
//nos va a interesar crear una variable y un valor asociado a un Array

const numeros = [10,20,30,40,50];

const [,,,,quinta] = numeros;

//quiero mostrar el primer elemento , el tercero y todos los demas 
const [primera,,tercera,...otros] = numeros;

//con el spread operator se puede crear una subcadena de arrays
console.log(numeros);
console.log(primera);
console.log(tercera);
console.log(otros);