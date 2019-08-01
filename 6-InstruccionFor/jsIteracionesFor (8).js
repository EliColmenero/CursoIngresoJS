function mostrar()
{
var numero;
var i=1;
var contadorDivisores=0;

numero=prompt("Ingrese un numero"); //Si encuentra mas de 2 div. no es primo.

for(i=1; i<=numero ; i++)
{
    console.log(i);

    if(numero%i==0)
    {
        contadorDivisores++;
    }
    
}
if(contadorDivisores==2)
{   
    
    alert("Es primo");
} else {
    alert("No es primo");
}
//Aparece en consola todos los numeros del 1 a ese numero porque evalua cada uno si es divisible o no
//Consola=sources, poner un break point y correr el programa hasta ahi. Va a hacer la repeticion del for hasta que llega a evaluar si es primo o no, pasando por todos los numeros
}//FIN DE LA FUNCIÓN