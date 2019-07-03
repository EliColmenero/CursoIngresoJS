/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
/*var numeroUno;
var numeroDos;
numeroUno = 666;
/numeroDos = numeroUno
numeroUno = numeroDos;

alert(numeroUno);
alert(numeroDos);
*/
var dato;
dato = prompt('Ingresa tu nombre');
document.getElementById('elNombre').value = dato;

alert("Tu nombre "+dato);
}

