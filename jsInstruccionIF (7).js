function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=prompt("Ingrese su edad");
estadoCVivil=prompt("Ingrese estado civil");
edad=document.getElementById('edad').value;
estadoCivil=document.getElementById('estadocivil').value;
    
if(edad<18 && estadoCivil != 'Soltero'){ //Podria ser estadoCivil.toLowercase para volverlo minuscula
    alert("Es muy pequeño para no ser soltero");
}


}//FIN DE LA FUNCIÓN