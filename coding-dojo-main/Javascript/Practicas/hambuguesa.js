var hamburguesaEspecial = {
    "pan": "pan de hamburguesa",
    "carne": "carne de res",
    "queso": "queso americano",
    "extras": ["lechuga", "tomate", "cebolla", "salsa especial"],
    "infoHamburguesa": function () {
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
    }
}

// Con 'this', nuestra hamburguesa siempre sabe cómo hablar de sí misma
hamburguesaEspecial.infoHamburguesa(); // Ojo que infoHamburguesa es llamada como a una función