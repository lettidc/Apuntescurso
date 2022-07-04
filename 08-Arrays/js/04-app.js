// Al igual que con los objetos un array se puede modificar
//pese a estar declarado con Const

const meses = ["enero", "febrero", "marzo", 'abril'];
//modificar el array
meses[0] = "nuevo mes";
//añadir un elemento nuevo
meses[4] = "ultimo mes";
 
console.log(meses);