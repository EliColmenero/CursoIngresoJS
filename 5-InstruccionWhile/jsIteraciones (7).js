function mostrar()
{

	var acumulador=0;
	var contador=0;
	var respuesta='si';
	var numero;
	var promedio;

	do{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

	} while(isNaN(numero) )
	
	
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	/*var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

while(respuesta=='si'){
	contador++;
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	
	while(isNaN(numero)){
			numero=prompt("Error, ingresar un numero");
			numero=parseInt(numero);
	
		}
	acumulador=acumulador+numero;
	respuesta=prompt("¿Desea seguir? Ingrese si");

}
promedio=acumulador/contador;

alert("El promedio es "+promedio);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;*/

}//FIN DE LA FUNCIÓN