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

var menosSonho = document.getElementById('menosSonho')
var maisSonho = document.getElementById('maisSonho')
var qtdSonho = document.getElementById('qtdSonho')

var menosCroissant= document.getElementById('menosCroissant')
var maisCroissant= document.getElementById('maisCroissant')
var qtdCroissant= document.getElementById('qtdCroissant')

var menosCinnamon= document.getElementById('menosCinnamon')
var maisCinnamon= document.getElementById('maisCinnamon')
var qtdCinnamon= document.getElementById('qtdCinnamon')

var menosBolo= document.getElementById('menosBolo')
var maisBolo= document.getElementById('maisBolo')
var qtdBolo= document.getElementById('qtdBolo')

var menosPao= document.getElementById('menosPao')
var maisPao= document.getElementById('maisPao')
var qtdPao= document.getElementById('qtdPao')

var menosCoxinha= document.getElementById('menosCoxinha')
var maisCoxinha= document.getElementById('maisCoxinha')
var qtdCoxinha= document.getElementById('qtdCoxinha')

var menosQuiche= document.getElementById('menosQuiche')
var maisQuiche= document.getElementById('maisQuiche')
var qtdQuiche= document.getElementById('qtdQuiche')

var menosQueijo= document.getElementById('menosQueijo')
var maisQueijo= document.getElementById('maisQueijo')
var qtdQueijo= document.getElementById('qtdQueijo')

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

maisSonho.addEventListener('click', ()=> {
    total = Number(qtdSonho.value ++)
})
menosSonho.addEventListener('click', ()=> {
    total = Number(qtdSonho.value --)
})

maisCroissant.addEventListener('click', ()=> {
    total = Number(qtdCroissant.value ++)
})
menosCroissant.addEventListener('click', ()=> {
    total = Number(qtdCroissant.value --)
})

maisCinnamon.addEventListener('click', ()=> {
    total = Number(qtdCinnamon.value ++)
})
menosCinnamon.addEventListener('click', ()=> {
    total = Number(qtdCinnamon.value --)
})

maisBolo.addEventListener('click', ()=> {
    total = Number(qtdBolo.value ++)
})
menosBolo.addEventListener('click', ()=> {
    total = Number(qtdBolo.value --)
})

maisPao.addEventListener('click', ()=> {
    total = Number(qtdPao.value ++)
})
menosPao.addEventListener('click', ()=> {
    total = Number(qtdPao.value --)
})

maisCoxinha.addEventListener('click', ()=> {
    total = Number(qtdCoxinha.value ++)
})
menosCoxinha.addEventListener('click', ()=> {
    total = Number(qtdCoxinha.value --)
})

maisQuiche.addEventListener('click', ()=> {
    total = Number(qtdQuiche.value ++)
})
menosQuiche.addEventListener('click', ()=> {
    total = Number(qtdQuiche.value --)
})

maisQueijo.addEventListener('click', ()=> {
    total = Number(qtdQueijo.value ++)
})
menosQueijo.addEventListener('click', ()=> {
    total = Number(qtdQueijo.value --)
})

sonho.addEventListener('click', ()=> {
    if(qtdSonho.value == '0'){
        let fadeAlert = document.querySelector("#fadeAlert")
        let modalAlert = document.querySelector("#modalAlert")
        let fecharAlert = document.querySelector('button#fecharAlert')
        
        let eventosAlert = [sonho, fadeAlert]
        
        let toogleModal = ()=>{
            modalAlert.classList.toggle('hide')
            fadeAlert.classList.toggle('hide')
        }
        
        eventosAlert.map((el)=>{
            el.addEventListener("click", () => toogleModal())
        })

        fecharAlert.addEventListener('click', () => {
            toogleModal()
        })

        }else if(qtdSonho.value != '0'){
        let quantidade = Number(qtdSonho.value)
        precoComida =  quantidade * comidas[0].valor

        descricaoPedido.innerHTML += `<p>${qtdSonho.value}x -- ${comidas[0].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`        
    }
})

croissant.addEventListener('click', ()=> {
    let quantidade = Number(qtdCroissant.value)
    precoComida =  quantidade * comidas[1].valor

    descricaoPedido.innerHTML += `<p>${qtdCroissant.value}x -- ${comidas[1].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`        
})

cinnamon.addEventListener('click', ()=> {
    let quantidade = Number(qtdCinnamon.value)
    precoComida = quantidade * comidas[2].valor

    descricaoPedido.innerHTML += `<p>${qtdCinnamon.value}x -- ${comidas[2].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

bolo.addEventListener('click', ()=> {
    let quantidade = Number(qtdBolo.value)
    precoComida = quantidade * comidas[3].valor

    descricaoPedido.innerHTML += `<p>${qtdBolo.value}x -- ${comidas[3].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

paoDeQueijo.addEventListener('click', ()=> {
    let quantidade = Number(qtdPao.value)
    precoComida = quantidade * comidas[4].valor

    descricaoPedido.innerHTML += `<p>${qtdPao.value}x -- ${comidas[4].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

coxinha.addEventListener('click', ()=> {
    let quantidade = Number(qtdCoxinha.value)
    precoComida = quantidade * comidas[5].valor

    descricaoPedido.innerHTML += `<p>${qtdCoxinha.value}x -- ${comidas[5].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

quiche.addEventListener('click', ()=> {
    let quantidade = Number(qtdQuiche.value)
    precoComida = quantidade * comidas[6].valor

    descricaoPedido.innerHTML += `<p>${qtdQuiche.value}x -- ${comidas[6].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

queijoQuente.addEventListener('click', ()=> {
    let quantidade = Number(qtdQueijo.value)
    precoComida = quantidade * comidas[7].valor

    descricaoPedido.innerHTML += `<p>${qtdCroissant.value}x -- ${comidas[7].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

