function OnClickOn()
{
    document.getElementById('myImage').src='../img/pic_bulbon.gif';
}

function OnClickOff()
{
    document.getElementById('myImage').src='../img/pic_bulboff.gif';
}

function CambioTamañoParrafo(id)
{
    var elemento = document.getElementById(id);
    if (elemento.style.fontSize == "70px") elemento.style.fontSize = "20px";
    else document.getElementById(id).style.fontSize = "70px";

}

function AlertaPersonalizada(mensaje)
{
    window.alert(mensaje)
}

function EscrituraConsola(doc)
{
    console.log(doc);
}

function Imprimir()
{
    window.print();
}

function Write()
{
    document.write(document.doctype);
}

function MostrarFecha()
{
    var f = new Date();
    f.getDate()
    document.getElementById('fecha').innerHTML = f.toLocaleDateString() + " " + f.toLocaleTimeString();
    
}



// función que ejecute constantemente MostrarFecha() para actualizarlo cada segundo


