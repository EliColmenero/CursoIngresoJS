function mostrar()
{
//tomo la edad  
var edad;
 edad=prompt("Ingrese su edad");
 document.getElementById('edad').value=edad;

 if(edad<13 || edad>17){
     alert("No es adolescente");
 }

}//FIN DE LA FUNCIÓN