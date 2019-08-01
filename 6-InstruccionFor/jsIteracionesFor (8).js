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

}//FIN DE LA FUNCIÓN