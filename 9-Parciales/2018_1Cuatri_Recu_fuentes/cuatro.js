function mostrar()
{
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

}
