// A la variable miVar se le asigna un valor 
var miVar = 5;
    
function sumarAmiVar(cantidad) {
    // Se suma a la variable llamada miVar la cantidad que le indicamos a la función 
    return miVar + cantidad;
}

// Vemos lo que mi variable miVar tiene al inicio
console.log(miVar);

// Creamos una nueva variable llamada resultado y le indicamos que la cantidad que 
// queremos sumar es -10. Luego retornamos la suma a la variable resultado
var resultado = sumarAmiVar(-10);

// Se muestra lo que tiene la variable resultado 
console.log(resultado);

// Se muestra lo que tiene la variable miVar
console.log(miVar);