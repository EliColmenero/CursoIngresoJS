function mostrar()
{
var nota;
var sexo;
var contadorNotas=0;
var acumuladorNotas=0;
var promedio;
var minimo;
var maximo;
var sexobaja;
var contador=0;

while(contadorNotas<5)
{ 
    nota=prompt("Ingrese un numero del 0 al 10");
    nota=parseInt(nota);
    contadorNotas++;

    while(isNaN(nota) || (nota<0||nota>10))
        {
            nota=prompt("Ingrese una nota valida");
            nota=parseInt(nota);
         }

         sexo=prompt("Ingrese sexo m o f");

        while(sexo!="m" && sexo!="f"){

        sexo=prompt("El sexo es invalido, ingrese sexo f o m");

            }
            acumuladorNotas=acumuladorNotas+nota;

                if(contadorNotas==1)
                {
                    maximo=nota;
                    minimo=nota;
                }
                if(nota<minimo)
                {
                    minimo=nota;
                    sexobaja=sexo;
                }
                else
                {
                    if(nota>maximo)
                    {
                        maximo=nota;
                    }
                }

                if(sexo=="m" && nota>=6)
                {
                    contador++;
                }
    }

                promedio=acumuladorNotas/contadorNotas;


      alert("El promedio es : "+promedio);
      alert("La nota es "+minimo+" y el sexo es "+sexobaja);
      alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es : "+contador);



}

    /*nota=prompt("Ingrese la nota");
    nota=parseInt(nota);
    sexo=prompt("Ingrese sexo 'f' o 'm' ");

    while(isNaN(nota))
    {
        alert("Ingrese una nota válida");
    }



    if(sexo=="f" || sexo=="m"){
        if(nota>=0 && nota<=10){
            alert("La nota es "+nota+" Y el sexo es "+sexo);
            } else {
            alert("La nota ingresada no es válida");
            }
            if(nota>maximo && (sexo=="f" || sexo=="m")){
                maximo=nota;
                alert("La nota es mas alta es "+maximo+" y el sexo es "+sexo);
            } 
                if(nota<minimo && (sexo=="f" || sexo=="m")){
                    minimo=nota;
                    alert("La nota mas baja es "+minimo+" y el sexo es "+sexo); 
                } if(sexo=="m" && nota>=6){
                    cantidadM++;
                    alert("La cantidad de varones con nota mayor o igual a 6 es "+cantidadM);
                }
            
    } else {
        alert("El sexo no es valido");
    } 
    acumuladorNotas+=nota; 
    
}
    promedio=acumuladorNotas/contadorNotas;    
    alert("El promedio es "+promedio);
    alert("La nota es "+nota+" Y el sexo es "+sexo);*/


