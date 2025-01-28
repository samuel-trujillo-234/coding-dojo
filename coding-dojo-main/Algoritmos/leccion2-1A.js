function calcularCirculo() {
    var radio = Math.round(Math.floor(Math.random() * 10) + 1); // Genera un radio aleatorio entre 1 y 10
    var perimetro = Math.round(2 * Math.PI * radio); // Calcula el perímetro del círculo
    var area = Math.round(Math.PI * Math.pow(radio, 2)); // Calcula el área del círculo
    return { radio: radio, perimetro: perimetro, area: area };
}

var circuloAleatorio = calcularCirculo();

console.log("Radio: " + circuloAleatorio.radio);
console.log("Perímetro: " + circuloAleatorio.perimetro);
console.log("Área: " + circuloAleatorio.area);