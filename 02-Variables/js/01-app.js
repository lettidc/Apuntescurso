//Las variables son una caracteristica de cualquier lenguaje de programación
/*
Existen 3 formas de crear variables en JS, 

Varibles con var

*/

var producto = "Monitor de 30 pulgadas";
//Reasignar valor con el mismo tipo
producto = "Monitor de 19";


//Podemos cambiar el tipo de producto a numero

producto = 242;


//inicializar una variable sin valor o sea declarado

var precio;
//Asignado un valor
precio = 1539;

//asignamos valor boolean a disponible tras 
//declarar al variable

var disponible;
disponible=true;

var categoria='motor',
    marca='peugeot',
    consumo=20;
//Distingue mayusculas de minusculas

var Categoria="la que estamos liando";
console.log(Categoria);

//reglas de variables:

//No puede empezar por numero pero si
//por _
var dias;

//Nombre a variable de varias palabras
var nombreproductoencamino;//regla tradicional de nombrado
var nombreProductoEnCamino;//Camel Case ***
var nombre_producto_en_camino;//guion bajo
var NombreProducto;//Pascal Case-->Clases

var Apellido;//Es una clase
