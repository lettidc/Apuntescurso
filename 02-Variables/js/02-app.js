//let es como se declaran las variables en el JS Moderno
//Ambito de bloque

//Inicializado una variable con valor

let producto="monitor de 45645647 pulgadas";

//podemos reasignar valores

producto="ahora soy una tv";

//podemos tambien cambiar su tipo

producto=20;
producto=false;
producto=null;

//por que JS es de tipo dinamico

//Podemos declarar una variables sin asignarle valor

let disponible;
disponible=true;//podemos asignar valor a posteriori

let categoria="Ordenador", 
    marca, 
    consumo;

console.log(marca);

//reglas de variables:

//No puede empezar por numero pero si
//por _
var dias;

//Nombre a variable de varias palabras

let nombreproductoencamino;//regla tradicional de nombrado
let nombreProductoEnCamino;//Camel Case ***
let nombre_producto_en_camino;//guion bajo
let NombreProducto;//Pascal Case-->Clases

let Apellido;//Es una clase