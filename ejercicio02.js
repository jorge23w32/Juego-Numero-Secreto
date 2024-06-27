//Ejercicio 01
console.log('Hola Mundo');
//Ejercicio 02
let nombre = prompt('Escribe tu nombre:');
console.log(`Hola, ${nombre}.`);
//Ejercicio 03
let numero = prompt('Escribe un numero:');
console.log(`Tu numero al cuadrado es: ${numero * numero}`);
//Ejercicio 04
let numero1 = prompt('Escribe un numero:');
let numero2 = prompt('Escribe otro numero:');
let numero3 = prompt('Escribe otro numero:');
console.log(`El promedio de los numeros que escribiste son: ${(numero1+numero2+numero3)/3}`); 
//Ejercicio 06
let numeroo1 = prompt('Escribe un numero:');
let numeroo2 = prompt('Escribe otro numero:');
if(numeroo1 == numeroo2){
    console.log('Los dos numeros son iguales');
} else if(numeroo1 > numeroo2){
    console.log(`El numero mayor es: ${numeroo1}`);
} else {
    console.log(`EL numero mayor es: ${numeroo2}`);
}