// JavaScript Document
var datos = {};
var misdatos = info => {
    console.log(info);
    datos.usuarios = info;
    var html = "";
    html +="<h2>Productos</h2>";
    html += "<table border='1'>";
    html += "<tr><th>Folio</th><th>Descripcion</th><th>Talla</th><th>precio</th></tr>";
    datos.usuarios.map(usuario => {
        html += "<tr>";
        html += "<td>" + usuario.Folio + "</td>";
        html += "<td>" + usuario.Descripcion + "</td>";
        html += "<td>" + usuario.Talla + "</td>";
        html += "<td>" + usuario.precio + "</td>";
        html += "</tr>";
    });
    /*datos.usuarios.map(usuarios=>{
        for(let propiedad of Object.keys(usuarios)){
            html += "<li>"+propiedad+": "+usuarios[propiedad]+"</li>";
        }
        html+="<hr/>";
    })*/
    html += "</table>";
    document.getElementById("resultados").innerHTML = html;
};