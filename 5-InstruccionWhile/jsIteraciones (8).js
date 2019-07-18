function mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	var acumulador=0;
	var contador=0;


while(respuesta=='si')
{
	contador++;
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	while(isNaN(numero))
	{
		numero=prompt("Error, Ingrese un numero válido");
		numero=parseInt(numero);
	}
	
	if(numero>0)
	{
		positivo=positivo+numero;
	} 
	else 
	{
		if(numero<0)
		{
			negativo=negativo*numero; //Si lo hago coo acumulador*numero, va a dar 0 porque el acumulador es 0
		}
			
		}
	
	respuesta=prompt("Desea seguir? Presionar 'si' ");

}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN