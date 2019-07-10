function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota; 

	/*console.log(Math.random()*10)=nota;*/
	nota=Math.floor(Math.random()*(11-1)+1); //(11-1) = 10

	if(nota>8){
		alert("EXCELENTE");
	} else {
		if(nota>4){
		alert("APROBÓ");
	} else { 
		if(nota<4){
		alert("Vamos, la proxima se puede");
	} 
		 }  
			}

}//FIN DE LA FUNCIÓN