//arrow functions

//son otra forma de declarar funciones y son relativamente nuevas
//la sintaxis es mas corta

//funcion anónima
const aprendiendo = function (tecnologia , tecnologia2){
    console.log( "aprendiendo", tecnologia, "y tambien", tecnologia2);
};

//Arrow function
const aprendiendo2 = (tecnologia,tecnologia2) => {
    return  "aprendiendo " + tecnologia + " y tambien " + tecnologia2;
};

//Arrow function mas reducida solo nos sirve para un parámetro y una sola instruccion
const aprendiendo3 = tecnologia => `aprendiendo ${tecnologia}`;
;


aprendiendo("Javascript","HTML");
console.log(aprendiendo2("Javascript","HTML"));
console.log(aprendiendo3("Javascript"));




