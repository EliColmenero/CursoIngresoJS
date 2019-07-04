/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var resultadoSuma;
    numeroUno = prompt("Ingrese el primer valor");
    numeroDos = prompt("Ingrese el segundo valor");
    document.getElementById('numeroUno').value = numeroUno;
    document.getElementById('numeroDos').value = numeroDos;

    resultadoSuma = parseInt(numeroUno) + parseInt(numeroDos);
    alert("El resultado de la suma es "+resultadoSuma);
}

function restar()
{
	var numeroUno;
    var numeroDos;
    var resultadoResta;
    numeroUno = prompt("Ingrese el primer valor");
    numeroDos = prompt("Ingrese el segundo valor");
    document.getElementById('numeroUno').value = numeroUno;
    document.getElementById('numeroDos').value = numeroDos;

    resultadoResta = parseInt(numeroUno) - parseInt(numeroDos);
    alert("El resultado de la resta es "+resultadoResta);
}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var resultadoMultiplicacion;
    numeroUno = prompt("Ingrese el primer valor");
    numeroDos = prompt("Ingrese el segundo valor");
    document.getElementById('numeroUno').value = numeroUno;
    document.getElementById('numeroDos').value = numeroDos;

    resultadoMultiplicacion = parseInt(numeroUno) * parseInt(numeroDos);
    alert("El resultado de la multiplicacion es "+resultadoMultiplicacion);
}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var resultadoDivision;
    numeroUno = prompt("Ingrese el primer valor");
    numeroDos = prompt("Ingrese el segundo valor");
    document.getElementById('numeroUno').value = numeroUno;
    document.getElementById('numeroDos').value = numeroDos;

    resultadoDivision = parseInt(numeroUno) / parseInt(numeroDos);
    alert("El resultado de la division es "+resultadoDivision);
}

/*
function resultado()
{
    var resultadoSuma;
    var resultadoResta;
    var resultadoMultiplicacion;
    var resultadoDivision;


}
*/
