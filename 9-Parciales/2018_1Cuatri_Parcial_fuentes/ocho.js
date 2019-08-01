function mostrar()
{
var numero;
var letra;
var respuesta="si";


while(respuesta=='si'){ 
    numero=prompt("Ingrese un numero");
    letra=prompt("Ingrese una letra");

    while(isNaN(numero) && (numero>100 && numero<=-100)){
        numero=prompt("Ingrese un numero valido");

    }
    respuesta=prompt("Quiere seguir? 'si' o 'no' ");
}

}
