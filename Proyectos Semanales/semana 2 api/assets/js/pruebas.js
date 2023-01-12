const url="https://api.chucknorris.io/jokes/random";
let chiste=document.querySelector("#chiste");
let chiste2=document.querySelector("#chiste2");


chiste2.onclick=function(){
fetch(url).then(respuesta=>{


    respuesta.json()
    .then(datos=>{

        chiste.innerText=datos.value;
        console.log(datos.value);

    })
    .catch(err2=>{

        console.log(err2);
    });

}).catch(err=>{

    console.log(err);
});
}