function mostrar()
{
var precio;
var descuento;
var precioFinal;

precio=prompt("Ingrese precio");
descuento=prompt("Ingrese el descuento");
descuento=parseInt(precio)*parseInt(descuento)/100;
precioFinal=parseInt(precio)-parseInt(descuento);

document.getElementById('elPrecioFinal').value=precioFinal;
}
