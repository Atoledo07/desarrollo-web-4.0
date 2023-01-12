let pila=[];
const cartas=['C','D','H','S'];
const especiales=['A','J','K','Q'];
const btnPedir=document.querySelector("#btnPedir");
const btnNuevo=document.querySelector('#btnNuevo');
let puntosJugador=0;
let puntosComputadora=0;
const divJugador=document.querySelector('#jugador-cartas');
const divCartasComputadora=document.querySelector('#cartasComputadora');
const small=document.querySelectorAll('small');
const btnDetener=document.querySelector('#btnDetener');

const crearPila=()=>{

    for(let i=2;i<=10;i++){

        for(let carta of cartas){

            pila.push(i+carta);
        }
    }
    
    especiales.forEach((value)=>{

            for(let carta of cartas){

                pila.push(value+carta);
            }
    });

    pila=_.shuffle(pila);

}

const pedirCarta=()=>{

    if(pila.length==0){

        throw 'No hay cartas';
    }
    const carta=pila.pop();
    return carta;
}

const valorCarta=(carta)=>{

    const valor=carta.substring(0,carta.length-1);

    return (valor=='A')? 11:(valor<=10)?parseInt(valor):10;


}

crearPila();

const turnoComputadora=(puntosMinimos)=>{

    do{
        

    const carta=pedirCarta();
    puntosComputadora=puntosComputadora+valorCarta(carta);
    small[1].innerText=puntosComputadora;

    const imgCarta=document.createElement('img');
    imgCarta.setAttribute('src',`assets/cartas/${carta}.png`);
    imgCarta.classList="carta";
    divCartasComputadora.append(imgCarta);
    if(puntosMinimos>21){
        break;
    }

    } while((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));

    setTimeout(()=>{

    
    if(puntosComputadora==puntosMinimos){
        alert('Nadie gana');

    }else if(puntosMinimos>21){
        alert('La computadora gana');

    }else if(puntosComputadora>21){
        alert('El jugador 1 gana');

    }else if(puntosComputadora<21){
        alert('La computadora gana');
    }else{
        alert('Computadora gana');
    }
},100)
}


btnPedir.onclick=()=>{

    const carta=pedirCarta();
    puntosJugador=puntosJugador+valorCarta(carta);
    small[0].innerText=puntosJugador;
    const imgCarta=document.createElement('img');
    //imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.setAttribute('src', `assets/cartas/${carta}.png`);
    imgCarta.classList="carta";
    divJugador.append(imgCarta);

    if(puntosJugador>21){
        console.log('El jugador 2 acaba de perder');
        btnPedir.disabled=true;
        //btnDetener.disabled=true;
        btnDetener.setAttribute('disable','true');
        turnoComputadora(puntosJugador);
    }else if(puntosJugador==21){

        console.log('Jugador 1 gano');
        btnDetener.setAttribute('disable','true');
        btnPedir.disabled=true;
        turnoComputadora(puntosJugador);
    }
}

btnDetener.onclick=()=>{

    btnPedir.disabled=true;
    btnDetener.disabled=true;
    turnoComputadora(puntosJugador);

}

btnNuevo.onclick=()=>{

    console.clear();
    pila=[];
    puntosComputadora=0;
    puntosJugador=0;
    small[0].innerText=puntosJugador;
    small[1].innerText=puntosComputadora;
    divJugador.innerText='';
    divCartasComputadora.innerText='';

    btnPedir.disabled=false;
    btnDetener.disabled=false;

    crearPila();
}

/*
if(valor=='A'){
    return 11;

}else{
    if(valor<=10){
        return parseInt(valor);

    }else{

        return 10;
    }

}*/