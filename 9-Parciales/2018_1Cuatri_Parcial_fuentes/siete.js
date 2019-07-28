function mostrar()
{
var nota;
var sexo;
var respuesta='si';
var contadorNotas=0;
var acumuladorNotas;

while(respuesta=='si'){ 
    contadorNotas++;
    nota=prompt("Ingrese la nota");
    nota=parseInt(nota);
    sexo=prompt("Ingrese sexo 'f' o 'm' ");

    if(nota>0 && nota<10){
        alert("La nota es "+nota);
    } else {
        alert("La nota ingresada no es válida");
    }
    
    if(sexo='f'){
        alert("Es mujer");
    } else {
        alert("Es hombre");
    }
}
respuesta=prompt("Desea seguir ingresando notas? responder 'si' o 'no' ");
}
