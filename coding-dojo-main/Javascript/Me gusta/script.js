let likes1 = 0;
let likes2 = 0;
let likes3 = 0;


const boton1 = document.querySelector('.boton1')
const boton2 = document.querySelector('.boton2')
const boton3 = document.querySelector('.boton3')
const contador1 = document.querySelector('.contador1')
const contador2 = document.querySelector('.contador2')
const contador3 = document.querySelector('.contador3')

boton1.addEventListener('click', () => {
    likes1++;
    contador1.textContent = ` ${likes1} like(s)`;
});

boton2.addEventListener('click', () => {
    likes2++;
    contador2.textContent = ` ${likes2} like(s)`;
});

boton3.addEventListener('click', () => {
    likes3++;
    contador3.textContent = ` ${likes3} like(s)`;
});