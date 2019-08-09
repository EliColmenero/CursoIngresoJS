function mostrar()
{
    var dia;

    dia=prompt("ingrese dia");
    
    switch(dia){
        case 'lunes':
        case 'martes':
        case 'miercoles':
        case 'jueves':
        case 'viernes':{
            mensaje="A trabajar";
            break;
        }
        case 'sabado':
        case 'domingo':{
            mensaje="Buen finde";
            break;
        }
        default:{
            mensaje="Dia incorrecto";
            break;
        }
    }
    
    
    
    alert(mensaje);
    



























    /*var dia;

    dia=prompt("Ingrese el día de la semana");

    switch(dia){
        case 'Lunes':{

        }
        case 'Martes':{

        }
        case 'Miercoles':{

        }
        case 'Jueves':{

        }
        case 'Viernes':{
            alert("A trabajar");
            break;
        }
        case 'Sabado':{
            
        }
        case 'Domingo':{
            alert("Buen finde");
            break;
        }
        default:{
            alert("No es un día válido");
        }
    }*/
}
