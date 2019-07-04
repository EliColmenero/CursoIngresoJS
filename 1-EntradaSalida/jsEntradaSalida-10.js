/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var descuento;

    importe = prompt("Ingrese el importe");
    document.getElementById('importe').value = importe;

    resultado = parseInt(importe) * 25/100;
    document.getElementById('resultado').value = resultado;
    descuento = parseInt(importe) - parseInt(resultado);

    alert("El resultado con el descuento es "+descuento);

}
