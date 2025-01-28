// Arreglo principal    
var arregloPrincipal = [
    //   Arreglo 1   Arreglo 2       Arreglo interno 3
    [1, 2, 3], ['a', 'b', 'c'], [true, false, true]
];

// Imprimir la tercera letra del segundo arreglo (la letra c)
console.log(arregloPrincipal[1][2]);

function aplanar(arreglo) {
    var plano = [];

    for (i = 0; i < arreglo.length; i++) {
        for (a = 0; a < arreglo[i].length; a++) {
            plano.push(arreglo[i][a])
        }
    }
    return plano;
}

var resultado = aplanar([["d", "i", "s"], ["t", "a", "n"], ["c", "i", "a"]]);
console.log(resultado);