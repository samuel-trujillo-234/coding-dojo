let tusconexiones = 500;
let solicitudes = 2;

const aceptar1 = document.querySelector('.aceptar1')
const aceptar2 = document.querySelector('.aceptar2')
const contador1 = document.querySelector('.contador1')
const contador2 = document.querySelector('.contador2')
const solicitud1 = document.querySelector('.solicitud1')
const solicitud2 = document.querySelector('.solicitud2')
const editprofile = document.querySelector('.editprofile')
const name = document.querySelector('.name')


aceptar1.addEventListener('click', () => {
    tusconexiones++;
    contador2.textContent = `Tus Conexiones (${tusconexiones}) `;

});
aceptar1.addEventListener('click', () => {
    solicitudes--;
    contador1.textContent = `Solicitud de Conexion ${solicitudes}`;
});

aceptar2.addEventListener('click', () => {
    tusconexiones++;
    contador2.textContent = `Tus Conexiones (${tusconexiones}) `;
});

aceptar2.addEventListener('click', () => {
    solicitudes--;
    contador1.textContent = `Solicitud de Conexion ${solicitudes}`;
});

aceptar1.addEventListener('click', () => {
    solicitud1.remove();
});

aceptar2.addEventListener('click', function () {
    solicitud2.remove();
});

editprofile.addEventListener('click', () => {
    name.innerText = "Sophia Larsen";
});

