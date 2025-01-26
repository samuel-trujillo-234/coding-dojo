//¿Contamos los números pares?//

var contarPares = 0;
var numeros = [6, 4, 12, 7, 15, 20, 10, 2, 5, 9, 13, 16, 17, 21];


for(var i=0; i<numeros.length; i++) {
    if (numeros[i] % 2 == 0){
        contarPares += 1
    }
}    
console.log("Hay " + contarPares + " números pares.");