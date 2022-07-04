//Operador && y Booleans

// ambas condiciones sean ciertas

const usuario = false;
const puedePagar = true;


if (usuario && puedePagar){
    console.log("Pedido realizado con exito...")
}else{
    console.log("Ha ocurrido algo con el pago.")
}

//Añadimos más descripcion a los errores

if (usuario && puedePagar){
    console.log("Pedido realizado con exito...")
}else if (!usuario){
    console.log("El usuario no está logeado.")
}else if (!puedePagar){
    console.log("No tienes un duro!!!!")
}else{
    console.log("Ha ocurrido algo con el pago.")
}









