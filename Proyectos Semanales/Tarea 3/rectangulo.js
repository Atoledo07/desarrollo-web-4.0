let area_rectangulo=document.querySelector("#area_rectangulo");
let resultado=document.querySelector("#resultado");
let circulo=document.querySelector("#circulo");
let base,altura,radio;
let pi=3.14;



function area(n1,n2){

    return n1*n2;
}

function circulo1(pi,n2){

    return pi*n2*n2;

}

circulo.onclick=function(){

    ejemplo1();
    resultado.innerText=`Tu resultado es: ${circulo1(pi,radio,2)}`;
}

area_rectangulo.onclick=function(){

    ejemplo();
    resultado.innerText=`Tu resultado es: ${area(base,altura)}`;
}

function ejemplo(){

    base=parseInt(prompt("Ingresa el primer numero"));
    altura=parseInt(prompt("Ingresa el segundo numero"));

}

function ejemplo1(){

    radio=parseFloat(prompt("Ingresa el radio del circulo"));
    //pi=parseFloat(prompt("Ingresa el PI"));
}