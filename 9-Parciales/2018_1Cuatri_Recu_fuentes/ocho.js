function mostrar()
{
var letra;
var numero;
var respuesta='si';
var contadorPares=0;
var contadorCeros=0;
var cantidadPositivos=0;
var acumuladorPositivos=0;
var promedio;
var cantidadNegativos=0;
var acumuladorNegativos=0;
var minimo=0;
var maximo=0;
var letraMaxima=0;
var contador=0;


while(respuesta=='si'){ 
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);

    while(isNaN(numero) || (numero<-100 || numero>100)){
        numero=prompt("Ingrese un numero valido");
        numero=parseInt(numero);
        }
    letra=prompt("Ingrese una letra");
    while(!isNaN(letra) || letra.length>1){
        letra=prompt("Ingrese una sola letra");
    }

    if(numero%2==0){   //cantidad pares
        contadorPares++;
    }
    if(numero==0){
        contadorCeros++;
    }
    if(numero>0){
        cantidadPositivos++;
        acumuladorPositivos+=numero;
    } else {
        cantidadNegativos++;
        acumuladorNegativos+=numero;
    }


    if(contador==0 || numero>maximo){
        maximo=numero;
        letraMaxima=letra;
    }

    contador++;

respuesta=prompt("Desea seguir? si o no");
}

promedio=acumuladorPositivos/cantidadPositivos;

alert("La cantidad de numeros pares es "+contadorPares);
alert("La cantidad de ceros es "+contadorCeros);
alert("El promedio de los numeros positivos es "+promedio);
alert("La suma de los numeros negativos es "+acumuladorNegativos);
alert("El numero maximo es "+maximo+" y la letra maxima "+letraMaxima);
}
