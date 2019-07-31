function mostrar()
{

var sexo;

do{
    sexo=prompt("Ingrese f o m"); 
    sexo=sexo.toLowerCase();

} while(sexo!="f" && sexo!="m");

document.getElementById('Sexo').value=sexo;

    /*var sexo;
sexo=prompt("ingrese f ó m .");
sexo=sexo.toLowerCase();

while(sexo!="f" && sexo!="m"){
    sexo=prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;*/

//En el do, si quiero que muestre un mensaje que diga que ingreso un dato erroneo:
//dentro del do if(sexo==indefined){ incorrecto } else { el sexo es.. }
}//FIN DE LA FUNCIÓN