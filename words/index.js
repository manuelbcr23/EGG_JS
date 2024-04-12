// Input
const frase = prompt("Ingrese una palabra o frase");

// Cantidad de caracteres
const cantidad = frase.length;

// Mensaje de salida
const mensajeCantidad = "La cantidad de caracteres es "+cantidad;
console.log(mensajeCantidad);
alert(mensajeCantidad);

// Frase en minusculas
const fraseMinusculas = frase.toLowerCase();

// Frase en mayusculas
const fraseMayusculas = frase.toUpperCase();

// Mensaje de salida
const minMay = fraseMinusculas +" "+ fraseMayusculas;
console.log(minMay);
alert(minMay);
