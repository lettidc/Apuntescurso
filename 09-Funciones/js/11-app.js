//parámetros con  arrow function....
// un solo parametro y una sola instruccion
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

//Arrow function varios parametros y una sola instrucción
const aprendiendo2 = (tecnologia,tecnologia2) => "aprendiendo "+ tecnologia+" y tambien "+ tecnologia2;

//varios parametros e instrucciones

const aprendiendo3 = (tecnologia,tecnologia2) =>{
console.log( "aprendiendo "+ tecnologia+" y tambien "+ tecnologia2);
console.log("ultimo caso");
return "Ya ves";
};


aprendiendo('Javascript1');
console.log(aprendiendo2 ("Javascript2","HTML2"));
console.log(aprendiendo3 ("javascript3","HTML5"));