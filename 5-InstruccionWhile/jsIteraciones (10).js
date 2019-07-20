function mostrar()
{

	var contador=0;
	var promedioNegativo;
	var promedioPositivo;
	var contadorNegativos;
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
			promedioNegativo=negativo/contador;
			contadorNegativos=contadorNegativos.length;

		}
		else 
		{
			if(numero>0)
			{
				positivo=positivo+numero;
				promedioPositivo=positivo/contador;
			}
	
	}
	respuesta=prompt("Desea seguir? Ingrese 'si' ");
		}

	document.write("El resultado de la suma es "+negativo+" </br>");
	document.write("El resultado de la suma es "+positivo+" </br>");
	document.write("El promedio es </br>"+promedioNegativo);
	document.write("El promedio de positivos es </br>"+promedioPositivo);
	document.write("La suma de negativos y positivos es "+negativo+positivo+" </br>");


}//FIN DE LA FUNCIÓN