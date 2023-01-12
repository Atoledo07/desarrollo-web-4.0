//let heroes=document.querySelector("#heroes");
//let respuesta=document.querySelector("#respuesta");
let answer;
let superheroes={

    "Iron man":{

        "poder":"Su traje y dinero",
        "nombre":"Tony Stark",

    },

    "spiderman":{

        "Poder":"Poder aracnido",
        "nombre":"Peter Parkers",

    }
    
}
/*
heroes.onclick=function(){

    answer=parseInt(prompt("Presiona 1 para spiderman\nPresiona 2 para Iron man"));

    if (answer==1) {
    
        console.log(superheroes["spiderman"]["Poder"])
        respuesta.innerText=superheroes["spiderman"]["Poder"];
    } else {
        if (answer==2){
            console.log(superheroes["Iron man"]["poder"]);
            respuesta.innerText=superheroes["Iron man"]["poder"];
        }
    }

}*/



const buscar=(superheroe)=>{

        let resultado=superheroes[superheroe];


        return new Promise((resolve,reject)=>{

            if(resultado){

                resolve(resultado);
            }else{
                reject("La conexion a la base de datos no fue exitosa");
            }



        });

}

buscar(superheroes).then((resultado)=>{

    console.log(resultado["poder"]);


}).catch((err)=>{

    console.log(err);


});


/*
const suma=(n1,n2)=>{

    return n1+n2;
}


const suma=(n1,n2)=>n1+n2;

console.log(suma(10,8));


console.log(superheroes["spiderman"]["Poder"]);
console.log(superheroes["Iron man"]["nombre"]);
*/
/*
if(resultado){
    console.log("Estoy dentro del if");
}else{
    console.log("Estoy dentro del else");
}
console.log(resultado)*/