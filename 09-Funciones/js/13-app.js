//Metodos de propiedad (Convertir nuestras funciones a metodos)
//Sintaxis muy parecida a la de los metodos

//convertir los metodos de propiedad en arrow function

const reproductor = {
    cancion: "",
    reproducir: (id) =>console.log(`Reproduciendo cancion id ${id}`),
    pausar: () => console.log('pausado...'),
    borrar: (id) => console.log("borrando...", id),
    crearPlaylist: (nombre) => console.log(`Creando playlist con nombre ${nombre}`),
    reproducirPlaylist: (nombre)=> console.log(`Reproducir playlist con nombre ${nombre}`),

    set nuevaCancion(cancion){ //añadir un valor 
        this.cancion = cancion;
        console.log(`Añadiendo cancion ${cancion}`);
    },
    get obtenerCancion(){ //obtener un valor 
           console.log(` ${this.cancion}`);
    }
}





reproductor.rebobinar = () => console.log("rebobinando");

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");

console.log(reproductor);

reproductor.rebobinar();



reproductor.nuevaCancion ='Its Raining Men';
reproductor.obtenerCancion;

//console.log(reproductor.cancion);