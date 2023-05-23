// ARRAY IMMAGINI
let immagini = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']


let imgElement = document.querySelector('.immagine');
let imgContent = "";

// CICLO FOR PER CREARE DIV CON CONTENUTO IMMAGINE
for(let i = 0; i < immagini.length; i++){

    let contenuto = immagini[i];
    imgContent += `<div class="img"><img src="${contenuto}" /></div>`

}

imgElement.innerHTML = imgContent;

let leImmagini = document.getElementsByClassName('img');

let attivaElemento = 0;
leImmagini[attivaElemento].classList.add('active');

let prevElement = document.querySelector('.up');
let nextElement = document.querySelector('.down');

// BOTTONE NEXT PER PASSARE ALLA SUCCESSIVA IMMAGINE
nextElement.addEventListener('click', function() {

    leImmagini[attivaElemento].classList.remove('active');
    attivaElemento = (attivaElemento + 1) % immagini.length;
    leImmagini[attivaElemento].classList.add('active');

})

// BOTTONE PREV PER TORNARE ALL'IMMAGINE PRECEDENTE
prevElement.addEventListener('click', function() {

    leImmagini[attivaElemento].classList.remove('active');
    attivaElemento = (attivaElemento - 1 + immagini.length) % immagini.length;
    leImmagini[attivaElemento].classList.add('active');

})


