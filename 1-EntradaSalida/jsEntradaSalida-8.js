/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroUno;
    var numeroDos;
    var resto;

    numeroUno = prompt("Ingrese el primer valor");
    numeroDos = prompt("Ingrese el segundo valor");
    document.getElementById('numeroDividendo').value = numeroUno;
    document.getElementById('numeroDivisor').value = numeroDos;

    resto = parseInt(numeroUno) % parseInt(numeroDos);
        alert("El resultado del resto "+resto);
}
