function mostrar()
{
var animal;
var peso;
var temperatura;
var respuesta='si';
var temperaturasPares=0;
var maximo=0;
var animalPesado=0;
var contador=0;
var contadorBajocero=0;
var promedio;
var contadorAnimales=0;
var acumuladorBajocero=0;
var acumuladorPeso=0;
var animalMenospesado=0;
var animalmasPesado=0;

while(respuesta=='si'){
animal=prompt("Ingrese el animal");
peso=prompt("Ingrese el peso del animal ingresado");
peso=parseInt(peso);

while(isNaN(peso) || (peso<1 || peso>1000)){
    peso=prompt("Ingrese un peso válido");
    peso=parseInt(peso);
}
    temperatura=prompt("Ingrese la temperatura del hábitat");
    while(isNaN(temperatura) || (temperatura<-30 || temperatura>30)){
        temperatura=prompt("Ingrese una temperatura válida");
    }

    if(temperatura%2==0){
        temperaturasPares++;
    }
    if(contador==0 || peso>maximo){
        maximo=peso;
        animalPesado=animal;
    }
    if(temperatura<0){
        contadorBajocero++;   
        acumuladorBajocero+=temperatura;
    }
    if(temperatura<0 && (contador==0 || peso>maximo)){
        maximo=peso;
        animalmasPesado=animal;
    } 
    if(temperatura<0 && (contador==0 || peso<minimo)){
        minimo=peso;
        animalMenospesado=animal;
    }

contador++;
contadorAnimales++;
acumuladorPeso+=peso;   //para el promedio del peso de todos los animales

respuesta=prompt("Desea seguir? si o no");
}

promedio=acumuladorPeso/contadorAnimales;

alert("La cantidad de temperaturas pares es "+temperaturasPares);
alert("El animal mas pesado es "+animalPesado+" y el peso maximo es "+peso);
alert("La cantidad de animales que viven a temperatura bajo cero es "+contadorBajocero);
alert("El promedio de la temperatura de todos los animales es "+promedio);
alert("El animal mas pesado de temperatura bajo cero es "+animalmasPesado);
alert("El animal menos pesado de temperaturas bajo cero es "+animalMenospesado);

}
