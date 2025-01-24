function pizzaOven(corteza, Tiposalsa, quesos, salsas) {
    var pizza = {
        corteza: corteza,
        Tiposalsa: Tiposalsa,
        quesos: quesos,
        salsas: salsas,
    }
    return pizza;

}
//pizza chicago//
var pizza1 = pizzaOven("estilo chicago", "tradicional", ["mozarella"], ["pepperoni", "chorizo"]);
console.log(pizza1)

//mano//
var pizza2 = pizzaOven("lanzada a mano", "marinera", ["mozarella", "feta"], ["champiniones", "aceitunas", "cebollas"]);
console.log(pizza2)

var pizza3 = pizzaOven("dulce", "chocolate", ["mozarella", "parmesano"], ["cebolla-caramelizada", "piña", "banano"]);
console.log(pizza3)

var pizza4 = pizzaOven("gruesa", "bbq", ["parmesano", "feta"], ["pollo", "carne", "chorizo"]);
console.log(pizza4)