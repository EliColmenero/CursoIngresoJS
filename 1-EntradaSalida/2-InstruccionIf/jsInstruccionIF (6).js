function mostrar()
{
//tomo la edad  

var edad;
var mensaje;


edad=document.getElementById('edad').value;
if(edad<13){
    mensaje="Es un niño";
}
    if((edad>13)&&(edad<17))      //Se va a cumplir cuando los dos sean verdaderos                   
                                //Si el primero es falso, no sigue evaluando
    {
        mensaje="Es adolescente";
    }                                       
        if((edad<13) || (edad>17))
        {
            mensaje="No es adolescente";
        }

alert(mensaje);


}//FIN DE LA FUNCIÓN
