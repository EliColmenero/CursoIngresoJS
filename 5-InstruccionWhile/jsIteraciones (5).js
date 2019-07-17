function mostrar()
{

var sexo;
sexo=prompt("ingrese f ó m .");
sexo=sexo.toLowerCase();

while(sexo!="f" && sexo!="m"){
    sexo=prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN