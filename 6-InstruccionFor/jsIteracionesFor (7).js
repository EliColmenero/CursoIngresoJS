function mostrar()
{
var i=0;
var numero;
var cantidadDivisores=0;

numero=prompt("Ingrese un numero");

for(i=1; i<=numero ; i++){
    if(numero%i==0){
        console.log(i);
        cantidadDivisores++;
    }

}
alert(i);
alert("La cantidad de divisores es "+cantidadDivisores);


}//FIN DE LA FUNCIÓN