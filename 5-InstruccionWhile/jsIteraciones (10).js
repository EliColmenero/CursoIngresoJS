function mostrar()
{
	var contador=0;
	var promedioNegativo;
	var promedioPositivo;
	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorPares=0;
	var contadorCeros=0;
	var numero; 
	var negativo=0;
	var positivo=0;
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	var diferencia;
	var respuesta="si";

	while(respuesta!="no")  //podria poner var respuesta=si y while(respuesta==true), cerrando con un confirm
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
			contadorNegativos=contadorNegativos+1; //Le sumo 1 para qeu con cada numero me sume un lugar
			acumuladorNegativos=acumuladorNegativos+numero; //Tambien puede ir acumuladorNegativos+=numero;
			} 
			else 
			{

			if(numero>0)
			{
				positivo=positivo+numero;
				contadorPositivos=contadorPositivos+1; //Tambien puedo poner contadorPositivo++
				acumuladorPositivos=acumuladorPositivos+numero;
			} 
			else  //por default es cero
			{
				contadorCeros=contadorCeros+1; //o contadorCeros++;
			}
	}

	if(numero%2==0) //Porque es si el numero dividido 2da cero, es par
	{
		contadorPares=contadorPares+1; //o contadorPares++;
	}
	respuesta=prompt("Desea seguir? Ingrese 'si' ");
		}
	
		
		if(contadorPositivos!=0){
			promedioPositivo=acumuladorPositivos/contadorPositivos;
		}
		else
		{
			promedioPositivo = "No se ingresaron numeros positivos";
		}
		if(contadorNegativos!=0){
			promedioNegativo=acumuladorNegativos/contadorNegativos; //El contador no puede ser 0 porque me va a dar NaN
		} 
		else 
		{
			promedioNegativo = "No se ingresaron numeros negativos";
		}

	diferencia=(acumuladorPositivos-acumuladorNegativos);



	document.write("El resultado de la suma es "+negativo+" </br>");
	document.write("El resultado de la suma es "+positivo+" </br>");
	document.write("El promedio de los negativos es "+promedioNegativo+" </br>");
	document.write("El promedio de positivos es "+promedioPositivo+" </br>");
	document.write("La cantidad de numeros positivos es "+contadorPositivos+" </br>");
	document.write("La cantidad de numeros negativos es "+contadorNegativos+" </br>");
	document.write("La cantidad de ceros es "+contadorCeros+" </br>");
	document.write("La diferencia entre los positivos y los negativos es "+diferencia+" </br>");
	document.write("La cantidad de numeros pares es "+contadorPares+" </br>");

}//FIN DE LA FUNCIÓN
/* var respuesta=true;
 while(respuesta==true){
	 numero=prompt("Ingrese un numero");
	 numero=parseInt(numero);
		 respuesta=confirm("Desea seguir ingresando?");   Esto es porque use la variable igualada 
		 a true y puse en el while que evalue respuesta con true
 } */