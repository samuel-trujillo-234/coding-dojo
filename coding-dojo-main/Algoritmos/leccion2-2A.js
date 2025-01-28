function generarContraseña(longitud) {
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var contraseña = "";
    for (var i = 0; i < longitud; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indice);
    }
    return contraseña;
}

var contraseñaAleatoria = generarContraseña(8); // Genera una contraseña de longitud 8
console.log("Contraseña aleatoria: " + contraseñaAleatoria);