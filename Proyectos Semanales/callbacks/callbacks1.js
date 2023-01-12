let superheroes={

    "Capitan america":"Su poder es el escudo",
    "Iron man":"Traje y dinero",
    "Spider man":"Poder aracnido"

}

function buscar(superheroe,funcion){

    let resultado=superheroes[superheroe];
    funcion(resultado);

}


buscar("Iron man",function (resultado){

    console.log(resultado);

})