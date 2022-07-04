//Metodos de propiedad (Convertir nuestras funciones a metodos)
//Sintaxis muy parecida a la de los metodos

const reproductor = {

    reproducir: function(id){
        console.log(`Reproduciendo cancion id ${id}`);
    },
    pausar: function(){
        console.log('pausado...');
    },
    borrar: function(id){
        console.log("borrando...", id);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist con nombre ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproducir playlist con nombre ${nombre}`);
    },
}

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");





