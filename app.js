let numeroSecreto = 0;
let contador = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 2;
let maximoDeJuegos = -1;
function asignarTextoElemento(elemento, texto){
    let elementoHTML =document.querySelector(elemento);//se manipula el  elemento al html
    elementoHTML.innerHTML = texto;//Le pone el titulo al h1
    return;
}
//crea la funcion para el boton intentar
function verificarIntento() {
    contador++;
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${contador} ${contador == 1 ? 'vez' : 'veces'}, felicidades.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es menor');
        limpiar();
    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
        limpiar();
    }
    
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escribe un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto(); //Genera nuevo numero secreto
    contador = 0; //Reinicia el valor de intentos
    if(maximoDeJuegos == 0){
        document.getElementById('intentar').removeAttribute('disabled');//habilita el boton
    }
    
}
function limpiar(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto(){
    maximoDeJuegos++;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los numeros...
    console.log(`Numero maximo = ${maximoDeJuegos}`);
    //if(maximoDeJuegos == 4){
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros de intentos posibles, reinicia la pagina');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    }else {
        //Si el numero generado esta en la lista...
        if(listaNumerosSorteados.includes(numeroGenerado)){ //includes verifica si el numero ya existe en la lista (true)
            maximoDeJuegos--;
            return generarNumeroSecreto();
            
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
condicionesIniciales();
function reiniciarJuego() {
    limpiar(); //Limpia el textbox
    condicionesIniciales(); //Reinicia las condiciones
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');  ///Desactiva el boton reiniciar
}