//Saber si es polidromo o no //
function esPalindromo(arreglo) {
    for(var izquierda=0; izquierda<arreglo.length/2; izquierda++) {
        var derecha = arreglo.length-1-izquierda;
        if(arreglo[izquierda] != arreglo[derecha]) {
            return "No es un palíndromo :(";
        }
    }
    return "¡¡¡SI es un palíndromo!!!";
}
// Le damos las letras de la palabra una a una para que pueda comparar    
var resultado1 = esPalindromo( ["r", "a", "d", "a", "r"] );
console.log(resultado1);

var resultado2 = esPalindromo( ["c", "a", "s", "a"] );
console.log(resultado2);