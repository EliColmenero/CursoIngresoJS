function mostrar()
{

	var contador=0;
	var maximo=0;
	var minimo=0;
	var numero;
	var respuesta='si';

while(respuesta!='no')
{
	contador ++;
	numero=prompt("Ingrese un número");
	numero=parseInt(numero);

	while(isNaN(numero))
	{
		numero=prompt("Ingresre un número válido");
		numero=parseInt(numero);
	}

	if(contador==0)
	{
		minimo=numero;   //En el primer ingreso, contador en 0, el max y min son iguales
		maximo=numero;
	}
	if(numero>maximo)
	{
		maximo=numero;
	} 
	else
	{
		if(numero<minimo)
		{
			minimo=numero;
		}
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;	
	respuesta=prompt("Desea seguir? ");
}

}//FIN DE LA FUNCIÓN