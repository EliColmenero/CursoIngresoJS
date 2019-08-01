function mostrar()
{
var nota;
var sexo;
var respuesta='si';
var contadorNotas=0;
var acumuladorNotas=0;
var promedio;
var minimo=10;
var maximo=0;
var cantidadM=0;

while(respuesta=='si' && contadorNotas<5){ 

        contadorNotas++;
    nota=prompt("Ingrese la nota");
    nota=parseInt(nota);
    sexo=prompt("Ingrese sexo 'f' o 'm' ");

    if(sexo=="f" || sexo=="m"){
        if(nota>=0 && nota<=10){
            
            alert("La nota es "+nota+" Y el sexo es "+sexo);
        } else {
            alert("La nota ingresada no es válida");
            }
            if(nota>maximo && (sexo=="f" || sexo=="m")){
                maximo=nota;
                alert("La nota es maxima es "+maximo+" y el sexo es "+sexo);
            } 
                if(nota<minimo && (sexo=="f" || sexo=="m")){
                    minimo=nota;
                    alert("La nota minima es "+minimo+" y el sexo es "+sexo); 
                } if(sexo=="m" && nota>=6){
                    cantidadM++;
                    alert("La cantidad de varones con nota mayor = a 6 es "+cantidadM);
                }
            
    } else {
        alert("El sexo no es valido");
    } 
    acumuladorNotas+=nota; 
    
    respuesta=prompt("Desea seguir ingresando notas? responder 'si' o 'no' ");
}
    promedio=acumuladorNotas/contadorNotas;    
    alert("El promedio es "+promedio);


}
