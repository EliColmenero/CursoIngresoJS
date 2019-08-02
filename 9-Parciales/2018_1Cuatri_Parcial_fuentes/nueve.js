function mostrar()
{
var marca;
var peso;
var temperatura;
var i=0;
var respuesta="si";
var temperaturaPar=0;


while(respuesta=="si"){ 

peso=prompt("Ingrese peso");
temperatura=prompt("Ingrese temperatura");
    
    while(isNaN(peso) || isNaN(temperatura)){
        peso=prompt("Ingrese peso correcto");
        temperatura=prompt("Ingrese temperatura valida");
    }
    if(peso<1 || peso>100){
        peso=prompt("Ingrese un peso correcto")
    } else {
        if(temperatura<=-30 || temperatura>=30){
            temperatura=prompt("Ingrese temperatura correcta");
        }
    }
    if(temperatura%2==0){
        temperaturaPar++;
    }
    


respuesta=("Desea seguir? 'si' o 'no' ");
}

document.write("La cantidad de temperaturas pares es "+temperaturaPar);
document.write("")

}
