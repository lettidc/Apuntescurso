//Cuando se cumple más de una condición

let rol = 'ADMIN';

if (rol ==='ADMIN' ){
    console.log("El usuario puede Editar, elminar y ver todo");
} else if (rol === 'EDITOR'){
        console.log("El usuario solo puede Editar");
        }else if(rol === 'AUTOR'){
            console.log("El usuario es AUTOR, solo puede ver");
            }else{
                console.log("El usuario es visitante, solo puede ver");
            }

//Else if es complicado de leer
let rol2 = 'ADMIN';

if (rol2 ==='ADMIN' ){
    console.log("El usuario puede Editar, elminar y ver todo");
}else if (rol2 === 'EDITOR'){
    console.log("El usuario solo puede Editar");
}else if(rol2 === 'AUTOR'){
    console.log("El usuario es AUTOR, solo puede modificar");
}else{
    console.log("El usuario es visitante, solo puede ver");
}






