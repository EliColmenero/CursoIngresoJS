function mostrar()
{
    var dia;

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
    }
}
