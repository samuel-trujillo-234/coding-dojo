const genero1 = document.querySelector('.genero1')
const genero2 = document.querySelector('.genero2')
const genero3 = document.querySelector('.genero3')
const genero4 = document.querySelector('.genero4')
const genero5 = document.querySelector('.genero5')
const Genero = document.querySelector('.Genero')
const rentar1 = document.querySelector('.rentar1')
const rentar2 = document.querySelector('.rentar2')
const rentar3 = document.querySelector('.rentar3')
const inicia = document.querySelector('.inicia')

inicia.addEventListener("click", function () {
    alert("Inicio de Sesion exitoso");
});
genero1.addEventListener('click', () => {
    Genero.innerText = 'Ficcion'
});
genero2.addEventListener('click', () => {
    Genero.innerText = "Historicos"
});
genero3.addEventListener('click', () => {
    Genero.innerText = "Tecnologia"
});
genero4.addEventListener('click', () => {
    Genero.innerText = "Autoayuda"
});
genero5.addEventListener('click', () => {
    Genero.innerText = "Poesia"
});

rentar1.addEventListener("click", function () {
    this.style.backgroundColor = "red";
    rentar1.innerText = "No Disponible"
});

rentar2.addEventListener("click", function () {
    this.style.backgroundColor = "red";
    rentar2.innerText = "No Disponible"
});

rentar3.addEventListener("click", function () {
    this.style.backgroundColor = "red";
    rentar3.innerText = "No Disponible"
});