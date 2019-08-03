function mostrar()
{
var contador=0;
var marca;
var peso;
var temperatura;
var respuesta="si";
var temperaturaPar=0;
var productoPesado;
var productomenosPesado;
var pesoMaximo=0;
var pesoMinimo=0;
var maximo=0;
var minimo=0;
var contadorPeso=0;


while(respuesta=="si"){ 
  
    marca=prompt("Ingrese marca");
    peso=prompt("Ingrese peso");
    peso=parseInt(peso);
    
    while(isNaN(peso) || (peso<1 || peso>100)){
        peso=prompt("Ingrese peso correcto");
    }
    
        temperatura=prompt("Ingrese temperatura");
        temperatura=parseInt(temperatura);

        while(isNaN(temperatura) || (temperatura<-30 || temperatura>30)){
            temperatura=prompt("Ingrese temperatura correcta");
        }
            if(temperatura%2==0){
                temperaturaPar++;
            } else {    //corto con else la temperatura para empezar a validar el
               if(contadorPeso==0 || peso>maximo){
                   maximo=peso;
                   productoPesado=marca;
               }
               if(contadorPeso==0 || peso<minimo){
                   minimo=peso;
                   productomenosPesado=marca;
               }
            }

respuesta=prompt("Desea seguir? 'si' o 'no' ");
}
contadorPeso++;

document.write("La cantidad de temperaturas pares es "+temperaturaPar+" <br>");
document.write("La marca del producto mas pesado es: "+productoPesado+" <br>");

}
