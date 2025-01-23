//¿Vamos a la playa?//

var haceCalor = true;
var estáLloviendo = false;
var temperatura = 25; // supongamos que son grados Celsius
var quéCosasLlevar = "Llevaré";


if(haceCalor) {
    quéCosasLlevar += " traje de baño, toalla";
}
if(estáLloviendo) {
    quéCosasLlevar += " un paraguas";
}
if(temperatura < 20) {
    quéCosasLlevar += ", un abrigo";
}
quéCosasLlevar += " y una sonrisa!";
   
console.log(quéCosasLlevar);