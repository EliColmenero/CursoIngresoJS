function mostrar()
{
//tomo la edad  
var edad;

edad=prompt("Ingrese su edad");
document.getElementById('edad').value=edad;

if(edad>18){
        alert("Mayor de edad");
} else {
    if(edad>13 && edad<17){
        alert("Es adolescente");
    }
    if(edad<13){ 
        alert("Es un Niño");
    }
        }
    
}//FIN DE LA FUNCIÓN