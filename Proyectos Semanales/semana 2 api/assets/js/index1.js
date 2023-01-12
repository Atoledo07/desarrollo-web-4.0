const url="https://reqres.in/api/users?page=2";

fetch(url).then(respuesta=>{

    respuesta.json()
    .then(datos=>{

        console.log(datos.data[0].email);
    })
    .catch(err2=>{

        console.log(err2);
    });
}).catch(err=>{

    console.log(err);
});