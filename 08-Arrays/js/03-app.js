//Vamos a hacer algunas operaciones útiles con Arrays

const meses = ["enero", "febrero", "marzo", 'abril'];

//si quiero saber cuantos elementos hay dentro de un Array

console.log(meses.length);
//declaro e inicializo el contador o iterador
//estipulo la condicion a cumplir durante
//indicamos los pasos del iterador
for (let i = 0;i < meses.length ;i++){
    console.log(meses[i]);
}

console.table(meses);
