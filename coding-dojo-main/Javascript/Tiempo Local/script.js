const BA = document.querySelector('.BA')
const CM = document.querySelector('.CM')
const S = document.querySelector('.S')
const SP = document.querySelector('.SP')
const Q = document.querySelector('.Q')
const Pais = document.querySelector('.Pais')
const ButAcep = document.querySelector('.ButAcep')
const footer = document.querySelector('footer')

BA.addEventListener('click', () => {
    Pais.innerText = "Buenos Aires";
});

CM.addEventListener('click', () => {
    Pais.innerText = "Ciudad de Mexico";
});

S.addEventListener('click', () => {
    Pais.innerText = "Santiago";
});
SP.addEventListener('click', () => {
    Pais.innerText = "San Paulo";
});

Q.addEventListener('click', () => {
    Pais.innerText = "Quito";
});

ButAcep.addEventListener('click', function () {
    footer.remove();
});

//Buenos Aires//

//Ciudad de Mexico //
CM.addEventListener('click', () => {
    imagen1.innerText = "imagen2";
});