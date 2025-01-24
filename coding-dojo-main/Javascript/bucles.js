//Imprimir pares del 1 al 30//
for (var i = 2; i <= 30; i += 2) {
    console.log(i);
}

//Imprimir múltiplos de 4 en orden descendente//

for (var i = 100; i >= 100; i -= 4) {
    if ([i] % 4 == 0) {
        console.log(i);
    }
}

//Imprime la secuencia//
for (var i = 10; i > -6; i -= 3) {
    console.log(i);
}

//Suma de todos los números impares del 1 al 50//
let sum = 0;

for (let i = 2; i <= 50; i += 2) {
    sum += i;
}
console.log(i + sum);

//Factorial//
let factorial = 1;

for (let i = 1; i <= 20; i++) {
    factorial *= i;
}

console.log("El factorial de 20 es:", factorial);