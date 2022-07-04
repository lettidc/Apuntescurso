//const y reasignación de valores en objetos
/*const producto2 = "pak";

producto2 = "Monitor";
Como hemos visto no se puede reasignar una variable CONST
*/
const producto = {
    nombre: "Monitor 20 pulgadas",//muy importante la coma
    precio: 999,
    disponible: true, //puede tenerla o no, pero se recomienda que si
    
};

//Comportamiento diferente ya que sus propiedades
//si pueden ser modificadas pese a ser const

producto.disponible=false;

console.log(producto);

color = "verde";

console.log(color);
