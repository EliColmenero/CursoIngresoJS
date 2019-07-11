/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var descuento;

    importe=document.getElementById('importe').value;

    descuento = parseInt(importe) * 25/100;
    resultado = parseInt(importe) - parseInt(descuento);
    resultado=document.getElementById('resultado').value;
    //el getElementById va despues de definir resultado, porque todavia no le asigne un valor hasta que no la defino, despues llevo lo de id

    alert("El resultado con el descuento es "+descuento);

}
