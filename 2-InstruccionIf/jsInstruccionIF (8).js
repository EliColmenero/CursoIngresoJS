function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=document.getElementById('edad').value;
document.getElementById('estadoCivil').value=estadoCivil;

if(edad>=18 && estadoCivil=="Soltero"){
    alert("Es oltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN