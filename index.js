let hola = "Hola";
let mundo = "Mundo!";

let saludo = `${hola} ${mundo}`;

console.log(saludo);

let frase = "Esta es una frase epica \n"
+ "otra frase epica";

console.log(frase);

let frase2 = `Esta es una frase epica V2
Esta es otra frase epica V2`;

console.log(frase2);

let persona = {
    nombre : "Erik",
    edad : 35,
    pais: "MX"
}

console.log(persona.nombre, persona.pais)

let {nombre, edad} = persona;
console.log(nombre, edad)
