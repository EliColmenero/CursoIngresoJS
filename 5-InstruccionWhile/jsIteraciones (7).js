function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

while(repuesta!='si'){
	contador++;
	respuesta=prompt("¿Desea seguir?");
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	acumulador+=numero;
	promedio=acumulador/contador;

}
while(isNaN(numero)){

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN