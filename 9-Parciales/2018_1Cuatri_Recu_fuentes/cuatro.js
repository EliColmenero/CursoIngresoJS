function mostrar()
{
<<<<<<< HEAD
    var numeroUno;
    var numeroDos;

    numeroUno=prompt("Ingrese el primer valor");
    numeroDos=prompt("Ingrese el segundo valor");

        if(numeroUno==numeroDos){
            resultado=numeroUno+numeroDos;
        } 
        else
        {
            if(numeroUno>numeroDos){
                alert("El resultado es "+numeroUno/numeroDos);
            }
        }

    alert(resultado);
=======
var numeroUno;
    var numeroDos;
    var mensaje;
>>>>>>> daf79979c9220fb658bf3e4d8dc66d2f9d02655b

    numeroUno=prompt("Ingrese el primer valor");
    numeroDos=prompt("Ingrese el segundo valor");
    if(numeroUno==numeroDos)
    {
        mensaje=(numeroUno+""+numeroDos);
    } else {
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        if(numeroUno>numeroDos)
        {
            mensaje=numeroUno/numeroDos;
        } else {
            mensaje=numeroUno+numeroDos;
        }
            if((numeroUno+numeroDos)<50)
            {
                mensaje="La suma es "+(numeroUno+numeroDos)+" y es menor a 50";
            } 
    } 
alert(mensaje);
    }
}
