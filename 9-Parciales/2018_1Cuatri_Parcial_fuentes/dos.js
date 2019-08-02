function mostrar()
{
var nombre;
var localidad;

nombre=prompt("Ingrese su nombre");
localidad=prompt("Ingrese su localidad");
document.getElementById('laLocalidad').value=localidad;
document.getElementById('elNombre').value=nombre;

alert("Su nombre es "+nombre+" y vive en la localidad de "+localidad);

}
