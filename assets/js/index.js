console.log("sesion web1");
function changeGretting(){
 //  obtener nombre cliente
const clientName = getNameOfClient();
 // TODO obtener referencia de label h1
const greattingReference = getNameOfClient();
greattingReference.innerHTML =" Hola" + clientName;
 // TODO cambiar el saludo

}
function getNameOfClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}
function getReferenceOfIdGreatting(){
    return document.getElementById("gretting");
}