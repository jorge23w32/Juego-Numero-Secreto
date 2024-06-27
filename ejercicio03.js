//Ejercicio 01
let altura = prompt('Escribe tu altura en metros: ');
let peso = prompt('Escribe tu peso: ');
let imc = peso / (altura *altura);
alert(`Tu IMC es de ${imc}`);
// Ejercicio 02
let numero = parseInt(prompt('Escribe un numero: '));
let factorial = 1;
while( numero != 0){
    factorial *= numero;
    numero--;
    
}
alert(`El factorial es ${factorial}`);
//Ejercicio 03
let valorMonedaBrasil = parseFloat(4.80);
let valorDolar = parseFloat(prompt('Tus dolares: '));
let conversionDolarABrasil = valorDolar * valorMonedaBrasil;
alert(`La conversion de ${valorDolar} ${valorDolar == 1 ? 'dolar' : 'dolares'} a moneda de Brasil es de: ${conversionDolarABrasil}`);

//Ejercicio 04

let alturaR = parseFloat(prompt('Escribe la altura de la sala rectangular: '));
let ancho = parseFloat(prompt('Escribe el ancho de la sala rectangular: '));
let area = alturaR * ancho;
let perimetro = (alturaR + ancho) * 2;
alert(`El area de la sala rectangular es de ${area} y su perimetro es de ${perimetro}`);

//Ejercicio 05
let pi = parseFloat(3.14);
let radio = parseFloat(prompt('Escribe el radio de la sala ciruclar: '));
let areaC = pi * radio**2;
let perimetroC = 2 * pi * radio;
alert(`El area de la sala circular es de ${areaC} y su perimetro es de ${perimetroC}`);
//Ejercicio 06
let numeroMultiplicar = parseInt(prompt('Escribe un numero: '));
let multiplciacion =0;
let contador = 0;
console.log(`Tabla de multiplicar del numero ${numeroMultiplicar}`);
while(contador < 10){
    contador++
    multiplciacion = numeroMultiplicar * contador;
    console.log(`${numeroMultiplicar}   *   ${contador}   =   ${multiplciacion}`);
}