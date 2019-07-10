/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio;
    var cantidad;
    var PrecioDescuento;
    var importeFinal;

    cantidad=prompt("Ingrese la cantidad");
    document.getElementById('Cantidad').value=cantidad;
    document.getElementById('precioDescuento').value=PrecioDescuento;

    precio=35;
    
    switch(cantidad){
        case >=6: {
            
        }
    }
    
    
    
    
    
    
    /*precio50=(precio*50/100);
    precio40=(precio*40/100);
    precio30=(precio*30/100);
    precio15=(precio*15/100);

    PrecioDescuento(precio*cantidad);
    if(cantidad>=6){
        alert("El precio con el descuento es: "+precioDescuento);
    } else {
        if(cantidad=5){
            alert("El precio con el descuento es: "+precioDescuento*40/100);*/
        }
