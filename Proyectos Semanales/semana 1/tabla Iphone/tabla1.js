let tabla=document.querySelector("tbody");
//let tr=document.createElement("tr");
let agregar=document.querySelector("#agregar");
let numero=4;

agregar.onclick=function(){

    let tr=document.createElement("tr");
    let td=document.createElement("td");
    td.innerText=numero++;
    tr.append(td);

    td=document.createElement("td");
    td.innerText="Iphone XR";
    tr.append(td);

    td=document.createElement("td");
    td.innerText="$25,000";
    tr.append(td);

    td=document.createElement("td");
    td.innerText="Disponible";
    tr.append(td);

    td=document.createElement("td");
    let img=document.createElement("img");
    td.innerHTML="<img src=\"https://i.blogs.es/e5cf54/iphone-x/450_1000.jpg\" width=\"50\" height=\"50\">";
    td.append(img);
    tr.append(td);

    tabla.append(tr);
}

/*
let td=document.createElement("td");
td.innerText=4;
tr.append(td);

td=document.createElement("td");
td.innerText="Iphone X";
tr.append(td);

td=document.createElement("td");
td.innerText="$30,000";
tr.append(td);

td=document.createElement("td");
td.innerText="Disponible";
tr.append(td);

td=document.createElement("td");
let img=document.createElement("img");
td.innerHTML="<img src=\"https://i.blogs.es/e5cf54/iphone-x/450_1000.jpg\" width=\"50\" height=\"50\">";
td.append(img);
tr.append(td);
*/
//tabla.append(tr);
