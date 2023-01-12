let table=document.querySelector("tbody");
let tr=document.createElement("tr");

let td=document.createElement("td");
td.innerText=3;
tr.append(td);

td=document.createElement("td");
td.innerText="Oscar";
tr.append(td);

td=document.createElement("td");
td.innerText="Treviño";
tr.append(td);

td=document.createElement("td");
td.innerText="oscar@gmail.com";
tr.append(td);

td=document.createElement("td");
let img=document.createElement("img");
td.append(img);
tr.append(td);

table.append(tr);
