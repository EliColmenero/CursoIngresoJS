function mostrar()
{
var numeroUno;
var numeroDos;
var suma;
var resultado;

numeroUno=prompt("Ingrese el primer numero");
numeroDos=prompt("Ingrese el segundo numero");
numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);

if(numeroUno==numeroDos){
    resultado=numeroUno+" "+numeroDos;
} else {
    if(numeroUno>numeroDos){
        resultado=numeroUno-numeroDos;
    } else {
        resultado=numeroUno+numeroDos;
    }
    
}
        alert(resultado);
        if(numeroUno+numeroDos>10){
            suma=numeroUno+numeroDos;
                alert("La suma es "+suma+" y supero a 10");
        }
}
