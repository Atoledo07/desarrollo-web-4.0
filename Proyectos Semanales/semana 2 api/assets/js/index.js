let url="https://reqres.in/api/users?page=2";
let contenido=document.querySelector("#contenido");
let button1=document.querySelector("#boton1");
let button2=document.querySelector("#boton2");
let li=document.querySelectorAll('li');
let page=1;

const crear=(page)=>{
    url=`https://reqres.in/api/users?page=${page}`;
contenido.innerHTML='';
traer(url).then(data=>{
    tabla(data);

});
}

button1.onclick=()=>{

    page=1;
    li[0].classList="page-item active";
    li[1].classList="page-item";
    //li[1].className+="La nueva clase";
    crear(page);
    
   
    
}

button2.onclick=()=>{
    page=2;
    li[0].classList="page-item";
    li[1].classList="page-item active";
    crear(page);
}

const traer=async(url)=>{
    const {data}=await(await fetch(url)).json();
    return data;
    }
function tabla(datos){
    for(let valor of datos){
        //console.log(valor);
        contenido.innerHTML +=`

        <tr>
            <th scope="row">${valor.id}</th>
            <td>${valor.email}</td>
            <td>${valor.first_name}</td>
            <td>${valor.last_name}</td>
            <td>
            <img src=${valor.avatar}>
            </td>
        </tr>
        `
    }
}

crear(page);


/*
const peticion=async()=>{

    return await (await fetch(url)).json();
    
}

        fetch(url).then(respuesta=>{

            respuesta.json()
            .then(datos=>{
        
                //console.log(datos.data);
                tabla(datos.data);
            })
            .catch(err2=>{
        
                console.log(err2);
            });
        }).catch(err=>{
        
            console.log(err);
        });

peticion().then(data=>{
    
    console.log(data.data);
    
})
.catch();*/