function mostrar()
{

	var numero;
	numero=prompt("Ingrese un número entre 0 y 9");
	numero=parseInt(numero);

	while(isNaN(numero)){
		numero=prompt("Ingrese un número entre 0 y 9");
	}
	while(numero<0 || numero>9){
		numero=prompt("ingrese un número entre 0 y 9.");
	
	}


}//FIN DE LA FUNCIÓN