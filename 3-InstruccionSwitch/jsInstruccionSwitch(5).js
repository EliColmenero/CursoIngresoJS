function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	
	switch(laHora){
        case '7': {
        }
        case '8': {
        }
        case '9': {
        }
        case '10': {
        }
        case '11': {
            alert("Es de mañana");
            break;
        }
    }
    if(laHora>11 || laHora<7) {
        alert("No es de mañana");
    }



}//FIN DE LA FUNCIÓN
