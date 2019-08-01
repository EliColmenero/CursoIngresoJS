function mostrar()
{
var numero;
var letra;
var respuesta="si";
var contador=0;
var cantidadPares=0;
var cantidadImpares=0;
var cantidadCeros=0;


while(respuesta=='si'){ 
    numero=prompt("Ingrese un numero");
    letra=prompt("Ingrese una letra");

    while(isNaN(numero) || (numero<100 || numero>-100)){
        numero=prompt("Ingrese un numero valido");

    }
    if(numero%2==0){
        cantidadPares++;
    }
         else {
            cantidadImpares++;
         }
         if(numero==0){
            cantidadCeros++;
         }

    
    respuesta=prompt("Quiere seguir? 'si' o 'no' ");
} 
    document.write("La cantidad de pares es "+cantidadPares+" <br>");
    document.write("La cantidad de impares es "+cantidadImpares+" <br>");
    document.write("La cantidad de ceros es "+cantidadCeros+" <br>");
}
