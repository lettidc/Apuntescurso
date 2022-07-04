//Simulacro de aplicación con funciones

// Comunicar funciones entre si funciones llaman a funciones
iniciarApp();


function iniciarApp(){
    console.log("Iniciando App....");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Haciendo cosas ... desde la segundaApp");
    usuarioIdentificado("Sebas no se ha echado la siesta");
}

function usuarioIdentificado(usuario){
    console.log('Identificando usuario... por favor espere');
    console.log(`Usuario identificado, bienvenido ${usuario}`)
}




