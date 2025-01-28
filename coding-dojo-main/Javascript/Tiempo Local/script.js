setTimeout(function () {
    alert("Cargando Reporte Del Clima");
}, 2000);

const BA = document.querySelector('.BA')
const CM = document.querySelector('.CM')
const S = document.querySelector('.S')
const SP = document.querySelector('.SP')
const Q = document.querySelector('.Q')
const Pais = document.querySelector('.Pais')
const ButAcep = document.querySelector('.ButAcep')
const footer = document.querySelector('footer')
const climaImagen = document.querySelector('#climaImagen')

BA.addEventListener('click', () => {
    Pais.innerText = "Buenos Aires";
    var imagen = document.querySelector('.imagen1');
    imagen.src = 'fotos/granizo.jpg';
    var imagen = document.querySelector('.imagen2');
    imagen.src = 'fotos/lluvias.jpg';
    var imagen = document.querySelector('.imagen3');
    imagen.src = 'fotos/sol y nubes.jpg';
    var imagen = document.querySelector('.imagen4');
    imagen.src = 'fotos/soleado.jpg';
    var imagen = document.querySelector('.imagen5');
    imagen.src = 'fotos/truenos.jpg';
    var clima = document.querySelector('.clima1');
    clima.innerText = "Granizo";
    var clima = document.querySelector('.clima2');
    clima.innerText = "Lluvias";
    var clima = document.querySelector('.clima3');
    clima.innerText = "Sol y Nubes";
    var clima = document.querySelector('.clima4');
    clima.innerText = "Soleado";
    var clima = document.querySelector('.clima5');
    clima.innerText = "Truenos";
    var temperatura = document.querySelector('.Temperatura1');
    temperatura.innerText = "30°C 8°C";
    var temperatura = document.querySelector('.Temperatura2');
    temperatura.innerText = "25°C 55°C";
    var temperatura = document.querySelector('.Temperatura3');
    temperatura.innerText = "19°C 17°C";
    var temperatura = document.querySelector('.Temperatura4');
    temperatura.innerText = "45°C 32°C";
    var temperatura = document.querySelector('.Temperatura5');
    temperatura.innerText = "18°C 16°C";
});

CM.addEventListener('click', () => {
    Pais.innerText = "Ciudad de Mexico";
    var imagen = document.querySelector('.imagen1');
    imagen.src = 'fotos/soleado.jpg';
    var imagen = document.querySelector('.imagen2');
    imagen.src = 'fotos/truenos.jpg';
    var imagen = document.querySelector('.imagen3');
    imagen.src = 'fotos/granizo.jpg';
    var imagen = document.querySelector('.imagen4');
    imagen.src = 'fotos/sol y nubes.jpg';
    var imagen = document.querySelector('.imagen5');
    imagen.src = 'fotos/lluvias.jpg';
    var clima = document.querySelector('.clima1');
    clima.innerText = "Soleado";
    var clima = document.querySelector('.clima2');
    clima.innerText = "Truenos";
    var clima = document.querySelector('.clima3');
    clima.innerText = "Granizo";
    var clima = document.querySelector('.clima4');
    clima.innerText = "Sol y Nubes";
    var clima = document.querySelector('.clima5');
    clima.innerText = "Lluvias";
    var temperatura = document.querySelector('.Temperatura1');
    temperatura.innerText = "22°C 18°C";
    var temperatura = document.querySelector('.Temperatura2');
    temperatura.innerText = "10°C 5°C";
    var temperatura = document.querySelector('.Temperatura3');
    temperatura.innerText = "30°C 0°C";
    var temperatura = document.querySelector('.Temperatura4');
    temperatura.innerText = "25°C 12°C";
    var temperatura = document.querySelector('.Temperatura5');
    temperatura.innerText = "31°C 6°C";
});

S.addEventListener('click', () => {
    Pais.innerText = "Santiago";
    var imagen = document.querySelector('.imagen1');
    imagen.src = 'fotos/lluvias.jpg';
    var imagen = document.querySelector('.imagen2');
    imagen.src = 'fotos/granizo.jpg';
    var imagen = document.querySelector('.imagen3');
    imagen.src = 'fotos/soleado.jpg';
    var imagen = document.querySelector('.imagen4');
    imagen.src = 'fotos/truenos.jpg';
    var imagen = document.querySelector('.imagen5');
    imagen.src = 'fotos/sol y nubes.jpg';
    var clima = document.querySelector('.clima1');
    clima.innerText = "Lluvias";
    var clima = document.querySelector('.clima2');
    clima.innerText = "Granizo";
    var clima = document.querySelector('.clima3');
    clima.innerText = "Soleado";
    var clima = document.querySelector('.clima4');
    clima.innerText = "Truenos";
    var clima = document.querySelector('.clima5');
    clima.innerText = "Sol y Nubes";
    var temperatura = document.querySelector('.Temperatura1');
    temperatura.innerText = "32°C 11°C";
    var temperatura = document.querySelector('.Temperatura2');
    temperatura.innerText = "19°C 51°C";
    var temperatura = document.querySelector('.Temperatura3');
    temperatura.innerText = "32°C 40°C";
    var temperatura = document.querySelector('.Temperatura4');
    temperatura.innerText = "20°C 35°C";
    var temperatura = document.querySelector('.Temperatura5');
    temperatura.innerText = "29°C 18°C";
});
SP.addEventListener('click', () => {
    Pais.innerText = "San Paulo";
    var imagen = document.querySelector('.imagen1');
    imagen.src = 'fotos/truenos.jpg';
    var imagen = document.querySelector('.imagen2');
    imagen.src = 'fotos/sol y nubes.jpg';
    var imagen = document.querySelector('.imagen3');
    imagen.src = 'fotos/lluvias.jpg';
    var imagen = document.querySelector('.imagen4');
    imagen.src = 'fotos/soleado.jpg';
    var imagen = document.querySelector('.imagen5');
    imagen.src = 'fotos/granizo.jpg';
    var clima = document.querySelector('.clima1');
    clima.innerText = "Truenos";
    var clima = document.querySelector('.clima2');
    clima.innerText = "Sol y Nubes";
    var clima = document.querySelector('.clima3');
    clima.innerText = "Lluvias";
    var clima = document.querySelector('.clima4');
    clima.innerText = "Soleado";
    var clima = document.querySelector('.clima5');
    clima.innerText = "Granizo";
    var temperatura = document.querySelector('.Temperatura1');
    temperatura.innerText = "30°C 9°C";
    var temperatura = document.querySelector('.Temperatura2');
    temperatura.innerText = "20°C 9°C";
    var temperatura = document.querySelector('.Temperatura3');
    temperatura.innerText = "17°C 2°C";
    var temperatura = document.querySelector('.Temperatura4');
    temperatura.innerText = "12°C 24°C";
    var temperatura = document.querySelector('.Temperatura5');
    temperatura.innerText = "41°C 26°C";
});

Q.addEventListener('click', () => {
    Pais.innerText = "Quito";
    var imagen = document.querySelector('.imagen1');
    imagen.src = 'fotos/lluvias.jpg';
    var imagen = document.querySelector('.imagen2');
    imagen.src = 'fotos/granizo.jpg';
    var imagen = document.querySelector('.imagen3');
    imagen.src = 'fotos/soleado.jpg';
    var imagen = document.querySelector('.imagen4');
    imagen.src = 'fotos/lluvias.jpg';
    var imagen = document.querySelector('.imagen5');
    imagen.src = 'fotos/sol y nubes.jpg';
    var clima = document.querySelector('.clima1');
    clima.innerText = "Lluvias";
    var clima = document.querySelector('.clima2');
    clima.innerText = "Granizo";
    var clima = document.querySelector('.clima3');
    clima.innerText = "Soleado";
    var clima = document.querySelector('.clima4');
    clima.innerText = "Lluvias";
    var clima = document.querySelector('.clima5');
    clima.innerText = "Sol y Nubes";
    var temperatura = document.querySelector('.Temperatura1');
    temperatura.innerText = "6°C 8°C";
    var temperatura = document.querySelector('.Temperatura2');
    temperatura.innerText = "40°C 29°C";
    var temperatura = document.querySelector('.Temperatura3');
    temperatura.innerText = "37°C 35°C";
    var temperatura = document.querySelector('.Temperatura4');
    temperatura.innerText = "27°C 30°C";
    var temperatura = document.querySelector('.Temperatura5');
    temperatura.innerText = "11°C 36°C";
});


ButAcep.addEventListener('click', function () {
    footer.remove();
});



