function mostrar()
{  
var mesDelAño = document.getElementById('mes').value;

/*alert (mesDelAño);*/
switch(mesDelAño){
    case 'Julio': { //No escribo nada en Julio, lo dejo sin break para que tome lo de Agosto
        
    }
    case 'Agosto': {
        alert("Abrigate que hace frio");
        break;
        }
    case 'Enero': {

        }
    case 'Febrero': {

        }
    case 'Marzo': {

        }
    case 'Abril': {

        }
    case 'Mayo': {

        }
    case 'Junio': {
        alert("Aún no llego el invierno");
        break;
        }
    case 'Septiembre': {

        }
    case 'Octubre': {

        }
    case 'Noviembre': {

        }
    case 'Diciembre':{
        alert("Ya pasamos el frío, ahora calor!");
        break;
        }

}



}//FIN DE LA FUNCIÓN