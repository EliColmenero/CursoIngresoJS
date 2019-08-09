function mostrar()
{
var precio;
var descuento;
var precioFinal;

precio=prompt("Ingrese el precio");
descuento=prompt("Ingrese el descuento");
precio=parseInt(precio);
descuento=parseInt(descuento);

precioFinal=(precio*descuento)/100;

document.getElementById('elPrecioFinal').value=precioFinal;
}
