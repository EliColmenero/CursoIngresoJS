function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

while(contador<5){
	contador++;
	  //contador<5 se ejecuta el ciclo 5 veces
	numero=prompt("Ingrese 5 valores");
	numero=parseInt(numero);
	acumulador+=numero;
} 
while(isNaN(numero)){
	promedio=acumulador/contador;
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN