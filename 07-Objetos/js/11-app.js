//What is this!!!!
// vamos a ver que es la palabra this

//This se refiere al valor del objeto en el contexto
//en el que se está ejecuntando en ese momento
//const nombre="pepito";
//const precio="tu vales mucho";

const producto = {
    nombre: "Moni",
    precio:30,
    disponible: true,
    mostrarInfo: function(){
        return `El producto: ${this.nombre} tiene un precio
         de ${this.precio}`;
    }

}

console.log( producto.mostrarInfo() );