//Ejercicio 01
let listaGenerica = [];
console.log(listaGenerica);
//Ejercicio 02
let lenguajesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion)
//Ejercicio 03
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);
//Ejercicio 04
console.log(lenguajesDeProgramacion.toString());
//Ejercicio 05
console.log(lenguajesDeProgramacion.reverse());
let indiceLista =lenguajesDeProgramacion.length;
while(indiceLista != 0){
    indiceLista--;
    let inverso = lenguajesDeProgramacion.at(indiceLista)
    console.log(`${indiceLista}.- ${inverso}`);
}
//Ejercicio 06
let listaCalificaciones =[9,7,6,5,3];
let contador = 0;
let calificaciones = 0;
while(listaCalificaciones.length != contador){
    calificaciones = calificaciones + listaCalificaciones[contador];
    contador++;
}
let promedio = calificaciones / listaCalificaciones.length;
console.log(`El promedio es de ${promedio}`);
//Ejercicio 07
let numeroMaximo = Math.max.apply(null,listaCalificaciones);
let numeroMinimo = Math.min.apply(null, listaCalificaciones);
console.log(`El numero minimo es ${numeroMinimo} y maximo es ${numeroMaximo}`);
//Ejercicio 08
console.log(`La suma de estos numeros: ${listaCalificaciones.toString()} es igual a ${calificaciones}`);
//Ejercicio 09
let parametro = 4;
if(listaCalificaciones[parametro] != undefined){
    console.log(`El ${parametro} es el indice de ${listaCalificaciones[parametro]}`);
} else {
    console.log(-1);
}
//Ejercicio 10
let lista1 = [10, 7, 20, 12, 15];
let lista2 = [2, 10, 15, 18, 3];
let contadorListas = 0;
let sumaListas = 0;
if(lista1.length == lista2.length){
    while(lista1.length != contadorListas){
        sumaListas = lista1[contadorListas] + lista2[contadorListas];
        console.log(`${lista1[contadorListas]}   +   ${lista2[contadorListas]}   =   ${sumaListas}`);
        contadorListas++;
    }
}else{
    console.log('El tamano de las dos listas no es el mismo')
}
//Ejercicio 11
let numerosLista = [2, 6, 10, 5, 1];
let contadorCuadrado = 0;
let numeroCuadrado = 0;
let listaAlCuadrado = [];
while(numerosLista.length != contadorCuadrado) {
    numeroCuadrado = numerosLista[contadorCuadrado]**2;
    listaAlCuadrado.push(numeroCuadrado);
    contadorCuadrado++;
}
console.log(`El cuadrado de estos numeros ${numerosLista.toString()} es igual a ${listaAlCuadrado.toString()}`);