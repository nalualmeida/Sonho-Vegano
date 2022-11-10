// JS DO CARROSSEL AUTOMÁTICO

var slides = document.querySelector('.slides')
var slide = document.querySelectorAll('.slides .slide')

var slideAtual = 0

function carrosselAutomatico(){
    slideAtual ++

    if(slideAtual > slide.length - 1){
        slideAtual = 0
    }

    slides.style.transform = `translateX(${-slideAtual * 455}px)`
}

setInterval(carrosselAutomatico, 4000)


// JS DO MODAL

var abrirModal = document.querySelector("#abrirModal")
var fade = document.querySelector("#fade")
var modal = document.querySelector("#modal")
var fechar = document.querySelector('#fechar')
var eventos = [abrirModal,fade]


let toogleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

eventos.map((el)=>{
    el.addEventListener("click", () => toogleModal())
})

fechar.addEventListener('click', () => {
    toogleModal()
})