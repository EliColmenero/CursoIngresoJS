/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt("Ingrese el primer numero");
    numeroDos = prompt("Ingrese el segundo numero");
    document.getElementById('numeroUno').value = numeroUno;
    document.getElementById('numeroDos').value = numeroDos;

    resultado = parseInt(numeroUno) + parseInt(numeroDos);

    alert("El resultado de la suma es: "+resultado);
}

