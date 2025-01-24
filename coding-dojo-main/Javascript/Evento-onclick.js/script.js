let likeboton2 = 22;
let likeboton3 = 45;

const boton = document.querySelector('.boton-sesion');
const boton1 = document.querySelector('.boton-Definicion');
const boton2 = document.querySelector('.boton-gato');
const boton3 = document.querySelector('.boton-perro');
const like1 = document.querySelector('.Megusta1');
const like2 = document.querySelector('.Megusta2');

boton.addEventListener('click', function () {
    boton.textContent = 'Cerrar sesion';
});

boton1.addEventListener('click', function () {
    boton1.remove();
});

boton2.addEventListener('click', () => {
    alert('Gato Atigrado was like');
});

boton3.addEventListener('click', () => {
    alert('Golden Retriever was like ')
});

boton2.addEventListener('click', () => {
    likeboton2++;
    like1.textContent = likeboton2;
});

boton3.addEventListener('click', () => {
    likeboton3++;
    like2.textContent = likeboton3;
});