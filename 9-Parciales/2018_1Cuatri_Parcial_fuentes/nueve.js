function mostrar()
{
var marca;
var peso;
var contador=0;
var respuesta="si";
var temperaturaPar=0;
var temperatura;
var maximo=0;
var minimo=0;
var productoPesado=0;


while(respuesta=="si"){ 

peso=prompt("Ingrese peso");
peso=parseInt(peso);
    
    while(isNaN(peso) || (peso<1 || peso>100)){
        peso=prompt("Ingrese peso correcto");
    }
        temperatura=prompt("Ingrese la temperatura de almacenamiento");
        temperatura=parseInt(temperatura);

        while(isNaN(temperatura) || (temperatura<-30 || temperatura>30)){
            temperatura=prompt("Ingrese temperatura correcta");
        }
    if(temperatura%2==0){
        temperaturaPar++;
    }
    if(contador==0 || peso<maximo){ 
    maximo=peso;
    productoPesado=marca;
    }

respuesta=("Desea seguir? 'si' o 'no' ");
}

document.write("La cantidad de temperaturas pares es "+temperaturaPar);
document.write("El producto mas pesado es "+productoPesado+" y la marca es "+marca);

}
