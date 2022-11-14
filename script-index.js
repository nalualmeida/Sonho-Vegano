// JS DO CARROSSEL AUTOMÁTICO

var slides = document.getElementById('slides')
var slide = document.querySelectorAll('.slides .slide')
var direita = document.getElementById('direita')

var slideAtual = 0

var indicador1 = document.getElementById('primeiro')
var indicador2 = document.getElementById('segundo')
function carrosselAutomatico(){
    slideAtual ++

    if(slideAtual > slide.length - 1){
        slideAtual = 0
    }
    if(slideAtual == slide.length - 1){
        indicador2.style.backgroundColor = '#FFD976'
        indicador1.style.backgroundColor = 'white' 
    }
    if(slideAtual == 0){
        indicador1.style.backgroundColor = '#FFD976'
        indicador2.style.backgroundColor = 'white' 
    }  

    slides.style.transform = `translateX(${-slideAtual * direita.offsetWidth}px)`  
}

setInterval(carrosselAutomatico, 5000)


// JS DO MODAL

var abrirModal = document.querySelector("#abrirModal")
var fade = document.querySelector("#fade")
var modal = document.querySelector("#modal")
var fechar = document.querySelector('#fechar')
var eventos = [abrirModal,fade,fechar]


let toogleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

eventos.map((el)=>{
    el.addEventListener("click", () => toogleModal())
})