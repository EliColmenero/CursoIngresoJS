function mostrar()
{
    //genero las variables
    var precio;
    var descuento;
    var porcentaje;
    var precioFinal;

    //pido valores al usuario por prompt
    precio = prompt("Ingrese el precio");
    descuento = prompt("Ingrese el porcentaje de descuento");
    //primero traigo el elemento de id
    document.getElementById('elPrecioFinal').value = precioFinal;
    //despues le asigno cuanto vale
    porcentaje = [precio * (descuento/100)];
    precioFinal = (precio - porcentaje);

    //muestro el resultado del precio menos el descuento por pantalla
    alert("El precio final es "+precioFinal);

}
