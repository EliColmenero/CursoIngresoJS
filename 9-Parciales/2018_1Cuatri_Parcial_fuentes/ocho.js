function mostrar()
{
var numero;
var letra;
var contador=0;
var respuesta="si";
var cantidadPares=0;
var cantidadImpares=0;
var cantidadCeros=0;
var cantidadPositivos=0;
var acumuladorPositivos=0;
var positivo=0;
var negativo=0;
var cantidadNegativos=0;
var acumuladorNegativos=0;
var promedio;
var minimo=0;
var maximo=0;
var letraMaxima=0;
var letraMinima=0;


while(respuesta=='si'){ 
    contador++;
    letra=prompt("Ingrese una letra");
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);

    while(isNaN(numero) || (numero>=100 || numero<=-100)){
        numero=prompt("Ingrese un numero valido");
        numero=parseInt(numero);

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
         if(numero>0){
            positivo=positivo+numero;
            cantidadPositivos++;
            acumuladorPositivos=acumuladorPositivos+numero;
         } else {
             negativo=negativo+numero;
             cantidadNegativos++;
             acumuladorNegativos=acumuladorNegativos+numero;
         }

         if(contador==0){
            minimo=numero;
            maximo=numero;
            letraMinima=letra;
            letraMaxima=letra;
         } else {
             if(numero>maximo){
                 maximo=numero;
                 letraMaxima=letra;
             } else {
                 if(numero<minimo){
                     minimo=numero;
                     letraMinima=letra;
                 }
             }
        }
         
    respuesta=prompt("Quiere seguir? 'si' o 'no' ");
} 
    promedio=acumuladorPositivos/cantidadPositivos;
    
       

    document.write("La cantidad de pares es "+cantidadPares+" <br>");
    document.write("La cantidad de impares es "+cantidadImpares+" <br>");
    document.write("La cantidad de ceros es "+cantidadCeros+" <br>");
    document.write("El promedio de los numeros positivos es "+promedio+" <br>");
    document.write("La suma de los negativos es "+acumuladorNegativos+" <br>");
    document.write("El maximo es "+maximo+" <br>");
    document.write("El minimo es "+minimo+" <br>");
    document.write("La letra maxima es "+letraMaxima+" <br>");
    document.write("La letra minima es "+letraMinima+" <br>");
}
