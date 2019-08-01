function mostrar()
{
var i=0;
var numero;
var cantidadDivisores=0;

numero=prompt("Ingrese un numero");

for(i=0; i<=numero ; i++){
    if(i%numero){
        console.log(i);
        cantidadDivisores++;
    }

}
alert(i);
alert("La cantidad de divisores es "+cantidadDivisores);


}//FIN DE LA FUNCIÓN