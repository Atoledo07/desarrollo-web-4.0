/*
let nombre=parseInt(prompt("¿Que accion te gustaria hacer?\n presiona 1 para suma\n presiona 2 para resta\n presiona 3 para multiplicacion\n presiona 4 para division"));
let numero1=parseInt(prompt("Danos el primer numero"));
let numero2=parseInt(prompt("Danos el segundo numero"));
let numero3=parseInt(prompt("Danos el tercer numero"));
*/

function sum(n1,n2,n3){

    return n1+n2+n3;

}

function rest(n1,n2,n3){

    return n1-n2-n3;

}

function mult(n1,n2,n3){

    return n1*n2*n3;

}

function div(n1,n2,n3){

    return n1/n2/n3;

}




let boton1=document.querySelector("#sum");
let boton2=document.querySelector("#rest");
let boton3=document.querySelector("#mult");
let boton4=document.querySelector("#div");
let resultado=document.querySelector("#resultado");

let num1,num2,num3;


boton1.onclick=function(){

    console.log("Realice un click al boton 1");
    ejemplo();
    resultado.innerText=`Tu resultado es: ${sum(num1,num2,num3)}`;
}

boton2.onclick=function(){

    console.log("Realice click al boton 2");
    ejemplo();
    rest(num1,num2,num3);
    resultado.innerText=`Tu resultado es: ${rest(num1,num2,num3)}`;
}

boton3.onclick=function(){

    console.log("Realice click al boton 3");
    ejemplo();
    mult(num1,num2,num3);
    resultado.innerText=`Tu resultado es: ${mult(num1,num2,num3)}`;
}

boton4.onclick=function(){

    console.log("Realice click al boton 4");
    ejemplo();
    div(num1,num2,num3);
    resultado.innerText=`Tu resultado es: ${div(num1,num2,num3)}`;
}

function ejemplo(){

     num1=parseInt(prompt("Ingresa el primer numero"));
     num2=parseInt(prompt("Ingresa el segundo numero"));
     num3=parseInt(prompt("Ingresa el tercer numero"));
    
}


//console.log(boton);


/*
switch(nombre){

    case 1:
        console.log("El usuario presiono 1");
        document.write(`Tu resultado es: ${sum(numero1,numero2,numero3)}`);
        break;
    case 2:
        console.log("El usuario presiono 2");
        document.write(`Tu resultado es: ${rest(numero1,numero2,numero3)}`);
        break;
    case 3: 
    console.log("Presionaste la tecla 3");
        document.write(`Tu resultado es: ${mult(numero1,numero2,numero3)}`);
    break;
    case 4:
        console.log("presionaste la tecla 4");
        document.write(`Tu resultado es: ${div(numero1,numero2,numero3)}`);
        break;
}



document.write(sum(numero1,numero2,numero3));

console.log(sum(numero1,numero2,numero3));*/