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


let madrid = ["Iker", "Zidane", "R Carlos"]
let manutd = ["David", "Veron", "Ruud V"]

let champions = [...madrid, ...manutd, "ball"]

console.log(champions);


const suma = (num1, num2) => num1 + num2
console.log(suma(1,2));

//ES7

let numeros = [1,2,3,4,5,6,7];

if (numeros.includes(9)){
    console.log("Si existe el numero")
}else {
    console.log("No existe el numero")
}


let base = 9;
let exp = 2;
let result = base ** exp;
console.log(result);

//ES8

const staticFF = {
    dpsMelee: "Rudra",
    dpsMagic: "Merz",
    mainHealer: "Cami",
    offHealer: "Lotus",
    mainTank: "Abel",
    offTank: "Milan"
}

const team1 = Object.entries(staticFF);
console.log(team1);
console.log(team1.length);


//ES10

let numbers = [1,2,3,4,5,6,7,8];

console.log(numbers.flatMap(numbers => [numbers * 3]));

let hello = "          hola!"
console.log(hello);
console.log(hello.trimStart());


//ES2021

let cadena = "Final Fantasy el mundo ha cambiado desde el lanzamiento de Final Fantasy 14"
let reemplazandoCadena = cadena.replace("Final", "Destiny");
console.log(reemplazandoCadena);

let reemplazandoCadena2 = cadena.replaceAll("Final", "Destiny");
console.log(reemplazandoCadena2);

