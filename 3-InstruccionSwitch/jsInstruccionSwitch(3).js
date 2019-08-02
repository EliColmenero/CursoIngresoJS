function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
    case 'Febrero': {
        alert("Este mes no tiene mas de 29 dias"); //Febrero no tiene masd e 29 dias y el resto lo mandamos con default
        break;
    }
    default: {
        alert("Este mes tiene 30 o mas dias");
    }
}


}//FIN DE LA FUNCIÓN