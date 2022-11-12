// JS DO CARROSSEL MANUAL

var paginas = document.getElementById('paginas')
var pagina = document.querySelectorAll('.pagina')
var botaoEsquerdo = document.getElementById('botaoEsquerdo')
var botaoDireito = document.getElementById('botaoDireito')

var paginaAtual = 0

botaoEsquerdo.addEventListener('click', () => {
    paginaAtual --

    if(paginaAtual < 0){
        paginaAtual = pagina.length -1
    }

    atualizarPagina()
})

botaoDireito.addEventListener('click', () => {
    paginaAtual ++

    if(paginaAtual > pagina.length - 1){
        paginaAtual = 0
    }

    atualizarPagina()
})

function atualizarPagina(){
    paginas.style.transform = `translateX(${-paginaAtual * 94.3}vh)`
}


// JS DO MODAL PAGAR

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


// JS DO CARRINHO
var total = 0


var sonho = document.getElementById('sonho')
var croissant = document.getElementById('croissant')
var cinnamon = document.getElementById('cinnamon')
var bolo = document.getElementById('bolo')
var paoDeQueijo = document.getElementById('pao-de-queijo')
var coxinha = document.getElementById('coxinha')
var quiche = document.getElementById('quiche')
var queijoQuente = document.getElementById('queijo-quente')
var cafe = document.getElementById('cafe')
var cappuccino = document.getElementById('cappuccino')
var chocolateQuente = document.getElementById('chocolate-quente')
var cha = document.getElementById('cha')
var chantilly = document.getElementById('chantilly')
var aguaSGas = document.getElementById('agua-s-gas')
var aguaCGas = document.getElementById('agua-c-gas')
var h2o = document.getElementById('h2o')
var suco = document.getElementById('suco')

var qtdSonho = document.getElementById('qtdSonho')
var visorSonho = document.getElementById("visorSonho")

var qtdCroissant= document.getElementById('qtdCroissant')
var visorCroissant = document.getElementById("visorCroissant")

var qtdCinnamon= document.getElementById('qtdCinnamon')
var visorCinnamon = document.getElementById("visorCinnamon")

var qtdBolo= document.getElementById('qtdBolo')
var visorBolo = document.getElementById("visorBolo")

var qtdPao= document.getElementById('qtdPao')
var visorPao = document.getElementById("visorPao")

var qtdCoxinha= document.getElementById('qtdCoxinha')
var visorCoxinha = document.getElementById("visorCoxinha")

var qtdQuiche= document.getElementById('qtdQuiche')
var visorQuiche = document.getElementById("visorQuiche")

var qtdQueijo= document.getElementById('qtdQueijo')
var visorQueijo = document.getElementById("visorQueijo")

var qtdCafe= document.getElementById('qtdCafe')
var visorCafe = document.getElementById("visorCafe")

var qtdCappuccino= document.getElementById('qtdCappuccino')
var visorCappuccino = document.getElementById("visorCappuccino")

var qtdChocolate= document.getElementById('qtdChocolate')
var visorChocolate = document.getElementById("visorChocolate")

var qtdCha= document.getElementById('qtdCha')
var visorCha = document.getElementById("visorCha")
var camomila = document.getElementById('camomila')
var frutas = document.getElementById('frutas')
var matte = document.getElementById('matte')
var preto = document.getElementById('preto')
var escolhidoCha = ''

var qtdChantilly= document.getElementById('qtdChantilly')
var visorChantillly = document.getElementById("visorChantillly")

var qtdGas= document.getElementById('qtdGas')
var visorGas = document.getElementById("visorGas")

var qtdAgua= document.getElementById('qtdAgua')
var visorAgua = document.getElementById("visorAgua")

var qtdh2o= document.getElementById('qtdh2o')
var visorh2o = document.getElementById("visorh2o")

var qtdSuco= document.getElementById('qtdSuco')
var visorSuco = document.getElementById("visorSuco")

var precoComida = 0
var descricaoPedido = document.getElementById('descricaoPedido')
var totalPedido = document.getElementById('totalPedido')
var soma = 0

var comidas = [
    {nome: 'Sonho Vegano', valor: 11.90},
    {nome: 'Croissant de Chocolate', valor: 12.90},
    {nome: 'Cinnamon Roll', valor: 10.90},
    {nome: 'Bolo de Cenoura c/ Cobertura de Chocolate', valor: 11.90},
    {nome: 'Pão de Queijo de Castanha', valor: 8.90},
    {nome: 'Coxinha de Jaca', valor: 8.90},
    {nome: 'Quiche de Shimeji', valor: 12.90},
    {nome: 'Queijo Quente', valor: 8.90},
    {nome: 'Café c/ leite', valor: 10.50},
    {nome: 'Cappuccino', valor: 12.50},
    {nome: 'Chocolate Quente', valor: 12.50},
    {nome: 'Chá', valor: 9.50},
    {nome: 'Adicional de Chantilly', valor: 2.80},
    {nome: 'Água s/ gás', valor: 4.50},
    {nome: 'Água c/ gás', valor: 5.00},
    {nome: 'h2o', valor: 7.50},
    {nome: 'Suco Natural', valor: 11.90}
]

var opcoesCha = [
    {nome: 'de Camomila'},
    {nome: 'de Frutas Vermelhas'},
    {nome: 'Matte c/ Limão'},
    {nome: 'Preto'}
]

// maisSonho.addEventListener('click', ()=> {
//     qtdSonho.value ++
// })
// function qSonho(){qtdSonho.value --}
// menosSonho.addEventListener('click', qSonho)
// if(qtdSonho.value == 2){
//     alert("oooooooooooo")
// }


qtdSonho.addEventListener('input', ()=> {
    visorSonho.innerHTML = qtdSonho.value
})

qtdCroissant.addEventListener('input', ()=> {
    visorCroissant.innerHTML = qtdCroissant.value
})

qtdCinnamon.addEventListener('input', ()=> {
    visorCinnamon.innerHTML = qtdCinnamon.value
})

qtdBolo.addEventListener('input', ()=> {
    visorBolo.innerHTML = qtdBolo.value
})

qtdPao.addEventListener('input', ()=> {
    visorPao.innerHTML = qtdPao.value
})

qtdCoxinha.addEventListener('input', ()=> {
    visorCoxinha.innerHTML = qtdCoxinha.value
})

qtdQuiche.addEventListener('input', ()=> {
    visorQuiche.innerHTML = qtdQuiche.value
})

qtdQueijo.addEventListener('input', ()=> {
    visorQueijo.innerHTML = qtdQueijo.value
})

qtdCafe.addEventListener('input', ()=> {
    visorCafe.innerHTML = qtdCafe.value
})

qtdCappuccino.addEventListener('input', ()=> {
    visorCappuccino.innerHTML = qtdCappuccino.value
})

qtdChocolate.addEventListener('input', ()=> {
    visorChocolate.innerHTML = qtdChocolate.value
})

qtdCha.addEventListener('input', ()=> {
    visorCha.innerHTML = qtdCha.value
})

qtdChantilly.addEventListener('input', ()=> {
    visorChantilly.innerHTML = qtdChantilly.value
})

qtdAgua.addEventListener('input', ()=> {
    visorAgua.innerHTML = qtdAgua.value
})

qtdGas.addEventListener('input', ()=> {
    visorGas.innerHTML = qtdGas.value
})

qtdh2o.addEventListener('input', ()=> {
    visorh2o.innerHTML = qtdh2o.value
})

qtdSuco.addEventListener('input', ()=> {
    visorSuco.innerHTML = qtdSuco.value
})


sonho.addEventListener('click', ()=> {
    if(qtdSonho.value == 0){
        var fadeAlert = document.querySelector("#fadeAlert ")
        var modalAlert  = document.querySelector("#modalAlert ")
        var fecharAlert  = document.querySelector('#fecharAlert ')
        
        let eventos  = [sonho,fadeAlert ,fecharAlert ]
        
        let toogleModalAlert  = ()=>{
            modalAlert .classList.toggle('hide')
            fadeAlert .classList.toggle('hide')
        }
        
        eventos.map((el)=>{
            el.addEventListener("click", () => toogleModalAlert ())
        }) 

    }
    if(qtdSonho.value > 0){
        precoComida =  qtdSonho.value * comidas[0].valor

        descricaoPedido.innerHTML += `<p>${qtdSonho.value}x -- ${comidas[0].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`        
    }
})

croissant.addEventListener('click', ()=> {
    precoComida =  qtdCroissant.value * comidas[1].valor

    descricaoPedido.innerHTML += `<p>${qtdCroissant.value}x -- ${comidas[1].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`        
})

cinnamon.addEventListener('click', ()=> {
    precoComida = qtdCinnamon.value * comidas[2].valor

    descricaoPedido.innerHTML += `<p>${qtdCinnamon.value}x -- ${comidas[2].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

bolo.addEventListener('click', ()=> {
    precoComida = qtdBolo.value * comidas[3].valor

    descricaoPedido.innerHTML += `<p>${qtdBolo.value}x -- ${comidas[3].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

paoDeQueijo.addEventListener('click', ()=> {
    precoComida = qtdPao.value * comidas[4].valor

    descricaoPedido.innerHTML += `<p>${qtdPao.value}x -- ${comidas[4].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

coxinha.addEventListener('click', ()=> {
    precoComida = qtdCoxinha.value * comidas[5].valor

    descricaoPedido.innerHTML += `<p>${qtdCoxinha.value}x -- ${comidas[5].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

quiche.addEventListener('click', ()=> {
    precoComida = qtdQuiche.value * comidas[6].valor

    descricaoPedido.innerHTML += `<p>${qtdQuiche.value}x -- ${comidas[6].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

queijoQuente.addEventListener('click', ()=> {
    precoComida = qtdQueijo.value * comidas[7].valor

    descricaoPedido.innerHTML += `<p>${qtdQueijo.value}x -- ${comidas[7].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

cafe.addEventListener('click', ()=> {
    precoComida = qtdCafe.value * comidas[8].valor

    descricaoPedido.innerHTML += `<p>${qtdCafe.value}x -- ${comidas[8].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

cappuccino.addEventListener('click', ()=> {
    precoComida = qtdCappuccino.value * comidas[9].valor

    descricaoPedido.innerHTML += `<p>${qtdCappuccino.value}x -- ${comidas[9].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

chocolateQuente.addEventListener('click', ()=> {
    precoComida = qtdChocolate.value * comidas[10].valor

    descricaoPedido.innerHTML += `<p>${qtdChocolate.value}x -- ${comidas[10].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

cha.addEventListener('click', ()=> {
    if(camomila.checked){
        escolhidoCha = opcoesCha[0].nome
    }else if(frutas.checked){
        escolhidoCha = opcoesCha[1].nome
    }else if(matte.checked){
        escolhidoCha = opcoesCha[2].nome
    }else if(preto.checked){
        escolhidoCha = opcoesCha[3].nome
    }
    precoComida = qtdCha.value * comidas[11].valor

    descricaoPedido.innerHTML += `<p>${qtdCha.value}x -- ${comidas[11].nome} ${escolhidoCha} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

chantilly.addEventListener('click', ()=> {
    precoComida = qtdChantilly.value * comidas[12].valor

    descricaoPedido.innerHTML += `<p>${qtdChantilly.value}x -- ${comidas[12].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

aguaSGas.addEventListener('click', ()=> {
    precoComida = qtdAgua.value * comidas[13].valor

    descricaoPedido.innerHTML += `<p>${qtdAgua.value}x -- ${comidas[13].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

aguaCGas.addEventListener('click', ()=> {
    precoComida = qtdGas.value * comidas[14].valor

    descricaoPedido.innerHTML += `<p>${qtdGas.value}x -- ${comidas[14].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

h2o.addEventListener('click', ()=> {
    precoComida = qtdh2o.value * comidas[15].valor

    descricaoPedido.innerHTML += `<p>${qtdh2o.value}x -- ${comidas[15].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

suco.addEventListener('click', ()=> {
    precoComida = qtdSuco.value * comidas[16].valor

    descricaoPedido.innerHTML += `<p>${qtdSuco.value}x -- ${comidas[16].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})