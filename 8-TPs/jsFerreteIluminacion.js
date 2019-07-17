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
    var cantidad;
    var precioDescuento;
    var marca;
    var importeFinal;
    /*var importeFinal;*/

    precio=35;

    marca=prompt("Ingrese la marca");
    cantidad=document.getElementById('Cantidad').value;
    precioDescuento=document.getElementById('precioDescuento').value;
    marca=document.getElementById('Marca').value;

    if(cantidad>=6){
        precioDescuento=precio*0.5;
    } else {
        if(cantidad==5 && marca=="ArgentinaLuz"){
            precioDescuento=precio-(precio*0.40);
        }  else {
            if(cantidad==5 && marca!=="ArgentinaLuz"){
        } else {
            if(cantidad==5 && marca!="ArgentinaLuz"){
            precioDescuento=precio-(precio*0.30);
            } else {
                if(cantidad==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
                if((cantidad==4) && (marca=="ArgentinaLuz" || "FelipeLamparas")){
                    precioDescuento=precio-(precio*0.25);
                } else {
                if(cantidad==4 && marca!="ArgentinaLuz" || marca!=="FelipeLamparas"){
                    precioDescuento=precio-(precio*0.20);
                } else {
                    if(cantidad==3 && marca=="ArgentinaLuz"){
                        precioDescuento=precio-(precio*0.15);
                    if((cantidad==4) && (marca!="ArgentinaLuz" || "FelipeLamparas")){ //no anda
                        precioDescuento=precio-(precio*0.20);
                    } else {
                        if(cantidad==3 && marca=="ArgentinaLuz"){
                         precioDescuento=precio-(precio*0.15);
                        } else {
                        if(cantidad==3 && marca=="FelipeLamparas"){
                            precioDescuento=precio-(precio*0.10); 
                        } else {
                            if(cantidad==3 && marca!=="ArgentinaLuz" && marca!=="FelipeLamparas"){
                            if((cantidad==3) && (marca!="ArgentinaLuz" || "FelipeLamparas")){
                                precioDescuento=precio-(precio*0.05);
                            } else {
                                precioDescuento=precio;
                            }
                            if()
                            }
                        }
                    }
@@ -56,15 +57,14 @@ function CalcularPrecio ()

    alert(precioDescuento);
}

    /* var marca;
/* var marca;
    var cantidad;
    var precioDescuento;
    precio=35;
    marca=prompt("Ingrese la marca");
    cantidad=document.getElementById('Cantidad').value;
    marca=document.getElementById('Marca').value;
    precioDescuento=document.getElementById('precioDescuento').value;
    if(cantidad>5){
  31  9-Parciales/2018_1Cuatri_Recu_fuentes/cinco.js 
@@ -1,4 +1,35 @@
function mostrar()
{
    var dia;

    dia=prompt("Ingrese el día de la semana");

    switch(dia){
        case 'Lunes':{

        }
        case 'Martes':{

        }
        case 'Miercoles':{

        }
        case 'Jueves':{

        }
        case 'Viernes':{
            alert("A trabajar");
            break;
        }
        case 'Sabado':{

        }
        case 'Domingo':{
            alert("Buen finde");
            break;
        }
        default:{
            alert("No es un día válido");
        }
    }
}
    /* var canitdad;
     var marca;
     var precioDescuento;
     var precio;

     precio=35;

     cantidad=document.getElementById('Cantidad').value;
     precioDescuento=document.getElementById('precioDescuento').value;
     marca=document.getElementById('Marca').value;

     switch(marca){
         case 'ArgentinaLuz':
         if(cantidad>5){
            precioDescuento=precio*cantidad*0.5;
         } else if(cantidad==5){
             precioDescuento=precio*cantidad*0.6;
         } else if(cantidad==4){
             precioDescuento=precio*cantidad*0.75;
         }
     }

      
     if(cantidad>=6){
         descuento=0.5;
     } else if(cantidad==5 && marca=="ArgentinaLuz"){
         descuento=0.6;
        }else if(cantidad==4){
            if(marca=="ArgentinaLuz || marca=="FelipeLamparas"){
                descuento=0.75;
            } else {
                descuento=0.80;
            } else if {

            }
            }
        }
     }
     */
}
