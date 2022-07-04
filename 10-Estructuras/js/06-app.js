//Switch

const metodoPago = "efectivo";

switch(metodoPago){
    case "efectivo" :
        console.log(`Has pagado con ${metodoPago}` );
        break;
    case "cheque" :
        console.log(`Has pagado con ${metodoPago} revisaremos que tenga fondos.` );
        break;
    case "tarjeta" :
        console.log(`Has pagado con ${metodoPago} espera a que tenga cobertura`  );
        break;
    default:
        console.log("Aun no has pagado");
        break;
}





