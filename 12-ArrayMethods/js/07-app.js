//Unir varios Arrays en uno

//.concat es un arrayMethod para concatenar


const meses = ["Enero","Febrero","Marzo","Abril"];
const meses2 = ["Mayo","Junio","Julio"];
const meses3 = ["Octubre","Noviembre","Diciembre"];

//Unir en un solo array con concat

const meses4 = meses.concat(meses3,meses2,"otro mes");

console.log(meses4);

//concatenar con spread operator ...

const meses5 = [...meses2, ...meses, "otro mes"];
//no se debe utilizar ... para string pues descompone el string en un 
//array con todos sus elementos
console.log(meses5);









