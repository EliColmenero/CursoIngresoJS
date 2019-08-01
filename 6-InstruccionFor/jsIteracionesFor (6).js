function mostrar()
{
var i=1;
var numero;
cantidadPares=0;

numero=prompt("Ingrese un numero");
for(i=1;i<=numero;i++){
    
    if(i==1 || i%2==0){
        console.log(i);
        cantidadPares++;
        
        
    }
}
alert(i);
alert("La cantidad de pares es "+cantidadPares);


}//FIN DE LA FUNCIÓN