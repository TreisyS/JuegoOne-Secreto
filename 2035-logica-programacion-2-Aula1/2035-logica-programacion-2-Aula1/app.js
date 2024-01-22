/*let titulo = document.querySelector('h1');
titulo.innerHTML='Juego de adivinar el numero secreto';

let instruccionJuego = document.querySelector('p');
instruccionJuego.innerHTML='Adivina el numero entre 1 y 10';*/

let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function verificarIntento()
{
//let numeroUsuario = document.querySelector('input');
let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

if(numeroSecreto == numeroUsuario)
{

    asignarTextoElmento('p', `ACERTASTE EL NUMERO!! con ${intentos} ${(intentos == 1)? `vez` : `veces`}`)
    document.getElementById('reiniciar').removeAttribute('disabled');

}
else 
{

    if (numeroUsuario < numeroSecreto)
    {
asignarTextoElmento('p', 'El numero secreto es mayor.');
    }
    else{
        asignarTextoElmento('p', 'El numero secreto es menor');
    }
    intentos++;
    limpiarCaja('#valorUsuario');
}
return;
}

function limpiarCaja(elemento) {
document.querySelector(elemento).value='';

}
function asignarTextoElmento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
elementohtml.innerHTML=texto;
return;
}
function condicionesIniciales()
{

    asignarTextoElmento('h1','Juego de adivinar el numero secreto');
    asignarTextoElmento('p','Adivina el numero entre 1 y 10');
    numeroSecreto = generarNumeroSecreto();

    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


//generar numero aleatorio


function generarNumeroSecreto() 
{
    let numeroGenerado= Math.floor(Math.random() *10) + 1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if (listaNumerosSorteados.length == numeroMaximo)
{
   asignarTextoElmento('p', 'Ya se sortearon todos los numeros posibles');
}
 
else{
    if(listaNumerosSorteados.includes(numeroGenerado))
    {
    return generarNumeroSecreto();
    }
    else
    {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
        
}
}


function reiniciarJuego()
 {
    //limpiiar 
    limpiarCaja('#valorUsuario');
    condicionesIniciales();

  



}
console.log(numeroSecreto);

condicionesIniciales();
console.log(numeroSecreto);