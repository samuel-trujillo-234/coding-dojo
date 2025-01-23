var caja1 = "limones";
var caja2 = "pelotas";

// Revisamos el contenido de las cajas antes de intercambiarlas 
console.log(caja1 + " y " + caja2);

// Intercambiamos usando la variable temp (viene de "temporal")
var temp = caja1;
caja1 = caja2;
caja2 = temp;

// Revisamos el contenido de las cajas intercambiadas 
console.log(caja1 + " y " + caja2);