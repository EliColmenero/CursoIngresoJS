
function mostrar()
{
var ancho;
var alto;
var perimetro;

ancho=prompt("Ingrese el ancho del rectángulo");
alto=prompt("Ingrese el alto del rectángulo");
ancho=parseInt(ancho);
alto=parseInt(alto);

perimetro=ancho*2 + alto*2;

alert("El perímetro del rectángulo es "+perimetro);
}
