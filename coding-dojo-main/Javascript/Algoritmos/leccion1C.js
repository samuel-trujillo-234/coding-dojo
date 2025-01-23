//Cómo cambiamos el valor de una variable

// Este es el contenido inicial de la variable "valor"
var valor = 50;
    
function cambiarValor(nuevoValor) {
    // Acá le asignamos el nuevo valor
    valor = nuevoValor; 
}

// Muestra el valor inicial de la variable
console.log(valor);

// Acá le pasamos a la función el nuevo valor
cambiarValor(10);

// Muestra el nuevo valor de la variable
console.log(valor);