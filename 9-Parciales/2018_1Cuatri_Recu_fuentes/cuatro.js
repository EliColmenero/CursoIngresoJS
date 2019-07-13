function mostrar()
{
var numeroUno;
    var numeroDos;
    var mensaje;

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
