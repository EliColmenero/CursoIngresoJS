function mostrar()
{
var nota;
var i=0;
var contadorNotas=0;
var acumuladorNotas=0;
var promedio;
var sexo;
var notaBaja=0;
var minimo=0;
var sexoBaja=0;
var contadorM=0;


for(i=0; i<5; i++){
    nota=prompt("Ingrese nota");
    nota=parseInt(nota);
    
    while(isNaN(nota) || nota<1 || nota>10){
        alert("Ingrese una nota valida");
    }
  
    acumuladorNotas+=nota;

    sexo=prompt("Ingrese sexo");

    while(sexo!='f' && sexo!='m'){
        alert("Ingrese un sexo valido");
    }
    if(contadorNotas==1 || nota<minimo){
        notaBaja=nota;
        sexoBaja=sexo;
        minimo=nota;
    }
    if(sexo=='m' && nota>=6){
        contadorM++;
    }
    contadorNotas++;
}

promedio=acumuladorNotas/contadorNotas;


alert("El promedio es "+promedio);
alert("La nota mas baja es "+notaBaja+" y el sexo "+sexoBaja);
alert("La cantidad de hombres con nota mayor igual a 6 es "+contadorM);
}
