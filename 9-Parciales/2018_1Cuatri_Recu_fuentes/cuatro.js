function mostrar()
{
var numeroUno;
var numeroDos;
var suma;


numeroUno=prompt("Ingrese un número"); //pido los numeros
numeroDos=prompt("Ingrese el segundo número");
numeroDos=parseInt(numeroDos);
numeroUno=parseInt(numeroUno);

if(numeroUno==numeroDos){
    resultado=(" "+numeroUno+""+numeroDos); //Si el numero es igual al otro
} else { 
    if(numeroUno>numeroDos){ //si el primer numero es mayor al numero dos
    resultado=numeroUno/numeroDos;
    }else{
        resultado=numeroUno+numeroDos; //si el primer numero es menor al segundo numero
    }
    
}

alert(resultado);
if((numeroUno+numeroDos)< 50) 
    {
    suma=numeroUno+numeroDos;  //si la suma de los numeros de la division da menos de 50
    alert("La suma es "+suma+" y es menor a 50");
    }
}