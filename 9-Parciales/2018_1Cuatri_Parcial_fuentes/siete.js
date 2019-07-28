function mostrar()
{
var nota;
var sexo;
var respuesta='si';
var contadorNotas=0;
var acumuladorNotas;

while(respuesta=='si'){ 
    
    nota=prompt("Ingrese la nota");
    nota=parseInt(nota);
    sexo=prompt("Ingrese sexo 'f' o 'm' ");

    
    if(sexo=="f" || sexo=="m"){
        if(nota>0 && nota<10){
            alert("La nota es "+nota+" Y el sexo es "+sexo);
            contadorNotas++;
        } else {
            alert("La nota ingresada no es válida");}
    } else {
        alert("El sexo no es valido");
    } 
}
    
respuesta=prompt("Desea seguir ingresando notas? responder 'si' o 'no' ");
}
