function mostrar()
{

	var contador;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var acumulador=0;
	var numero; 
	var negativo=0;
	var positivo=0;
	var respuesta="si";


	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("Ingrese un numero valido");
			numero=parseInt(numero);
		}
		if(numero<0)
		{
			negativo=negativo+numero;
			contadorNegativos=contadorNegativos+numero;

		}
		else 
		{
			if(numero>0)
			{
				positivo=positivo+numero;
			}

		respuesta=prompt("Desea seguir? Ingrese 'si' ");
	
	}
		}

	document.write("El resultado es "+negativo+" </br>");
	document.write("El resultado es "+positivo+" </br>");


}//FIN DE LA FUNCIÓN