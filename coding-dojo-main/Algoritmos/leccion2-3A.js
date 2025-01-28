var numeroSecreto = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
var intentos = 0;

while (true) {
    var intento = Math.floor(Math.random() * 10) + 1; // Una persona debe ingresar un número, pero para efectos del ejercicio se dejó aleatorio
    if (intento === null || intento === "") {
        console.log("Has cancelado el juego o no has ingresado un número. El número secreto era " + numeroSecreto + ".");
        break;
    } else {
        intentos++;
        intento = parseInt(intento);
        if (isNaN(intento)) {
            console.log("Por favor, introduce un número válido.");
        } else if (intento < numeroSecreto) {
            console.log("Demasiado bajo. ¡Sigue intentándolo!");
        } else if (intento > numeroSecreto) {
            console.log("Demasiado alto. ¡Sigue intentándolo!");
        } else {
            console.log("¡Felicidades! ¡Has adivinado que el número secreto era", numeroSecreto + "!");
            break;
        }
    }
}