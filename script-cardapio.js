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

var menosCafe= document.getElementById('menosCafe')
var maisCafe= document.getElementById('maisCafe')
var qtdCafe= document.getElementById('qtdCafe')

var menosCappuccino= document.getElementById('menosCappuccino')
var maisCappuccino= document.getElementById('maisCappuccino')
var qtdCappuccino= document.getElementById('qtdCappuccino')

var menosChocolate= document.getElementById('menosChocolate')
var maisChocolate= document.getElementById('maisChocolate')
var qtdChocolate= document.getElementById('qtdChocolate')

var menosCha= document.getElementById('menosCha')
var maisCha= document.getElementById('maisCha')
var qtdCha= document.getElementById('qtdCha')

var menosChantilly= document.getElementById('menosChantilly')
var maisChantilly= document.getElementById('maisChantilly')
var qtdChantilly= document.getElementById('qtdChantilly')

var menosGas= document.getElementById('menosGas')
var maisGas= document.getElementById('maisGas')
var qtdGas= document.getElementById('qtdGas')

var menosAgua= document.getElementById('menosAgua')
var maisAgua= document.getElementById('maisAgua')
var qtdAgua= document.getElementById('qtdAgua')

var menosh2o= document.getElementById('menosh2o')
var maish2o= document.getElementById('maish2o')
var qtdh2o= document.getElementById('qtdh2o')

var menosSuco= document.getElementById('menosSuco')
var maisSuco= document.getElementById('maisSuco')
var qtdSuco= document.getElementById('qtdSuco')

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
if(qtdSonho.value != '0'){
    menosSonho.addEventListener('click', ()=> {
        total = Number(qtdSonho.value --)
    })
}else if (qtdSonho.value == '0'){
    menosSonho.removeEventListener()
}

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

maisCafe.addEventListener('click', ()=> {
    total = Number(qtdCafe.value ++)
})
menosCafe.addEventListener('click', ()=> {
    total = Number(qtdCafe.value --)
})

maisCappuccino.addEventListener('click', ()=> {
    total = Number(qtdCappuccino.value ++)
})
menosCappuccino.addEventListener('click', ()=> {
    total = Number(qtdCappuccino.value --)
})

maisChocolate.addEventListener('click', ()=> {
    total = Number(qtdChocolate.value ++)
})
menosChocolate.addEventListener('click', ()=> {
    total = Number(qtdChocolate.value --)
})

maisCha.addEventListener('click', ()=> {
    total = Number(qtdCha.value ++)
})
menosCha.addEventListener('click', ()=> {
    total = Number(qtdCha.value --)
})

maisChantilly.addEventListener('click', ()=> {
    total = Number(qtdChantilly.value ++)
})
menosChantilly.addEventListener('click', ()=> {
    total = Number(qtdChantilly.value --)
})

maisAgua.addEventListener('click', ()=> {
    total = Number(qtdAgua.value ++)
})
menosAgua.addEventListener('click', ()=> {
    total = Number(qtdAgua.value --)
})

maisGas.addEventListener('click', ()=> {
    total = Number(qtdGas.value ++)
})
menosGas.addEventListener('click', ()=> {
    total = Number(qtdGas.value --)
})

maish2o.addEventListener('click', ()=> {
    total = Number(qtdh2o.value ++)
})
menosh2o.addEventListener('click', ()=> {
    total = Number(qtdh2o.value --)
})

maisSuco.addEventListener('click', ()=> {
    total = Number(qtdSuco.value ++)
})
menosSuco.addEventListener('click', ()=> {
    total = Number(qtdSuco.value --)
})

sonho.addEventListener('click', ()=> {
    if(qtdSonho.value == '0'){
        let fadeAlert = document.querySelector("#fadeAlert")
        let modalAlert = document.querySelector("#modalAlert")
        let fecharAlert = document.querySelector('#fecharAlert')
        
        let eventosAlert = [sonho,fadeAlert,fecharAlert]
        
        let toogleModalAlert = ()=>{
            modalAlert.classList.toggle('hide')
            fadeAlert.classList.toggle('hide')
        }
        
        eventosAlert.map((elAlert) => {
            elAlert.addEventListener("click", () => toogleModalAlert())
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

    descricaoPedido.innerHTML += `<p>${qtdQueijo.value}x -- ${comidas[7].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

cafe.addEventListener('click', ()=> {
    let quantidade = Number(qtdCafe.value)
    precoComida = quantidade * comidas[8].valor

    descricaoPedido.innerHTML += `<p>${qtdCafe.value}x -- ${comidas[8].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

cappuccino.addEventListener('click', ()=> {
    let quantidade = Number(qtdCappuccino.value)
    precoComida = quantidade * comidas[9].valor

    descricaoPedido.innerHTML += `<p>${qtdCappuccino.value}x -- ${comidas[9].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

chocolateQuente.addEventListener('click', ()=> {
    let quantidade = Number(qtdChocolate.value)
    precoComida = quantidade * comidas[10].valor

    descricaoPedido.innerHTML += `<p>${qtdChocolate.value}x -- ${comidas[10].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

cha.addEventListener('click', ()=> {
    let quantidade = Number(qtdCha.value)
    precoComida = quantidade * comidas[11].valor

    descricaoPedido.innerHTML += `<p>${qtdCha.value}x -- ${comidas[11].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

chantilly.addEventListener('click', ()=> {
    let quantidade = Number(qtdChantilly.value)
    precoComida = quantidade * comidas[12].valor

    descricaoPedido.innerHTML += `<p>${qtdChantilly.value}x -- ${comidas[12].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

aguaSGas.addEventListener('click', ()=> {
    let quantidade = Number(qtdAgua.value)
    precoComida = quantidade * comidas[13].valor

    descricaoPedido.innerHTML += `<p>${qtdAgua.value}x -- ${comidas[13].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

aguaCGas.addEventListener('click', ()=> {
    let quantidade = Number(qtdGas.value)
    precoComida = quantidade * comidas[14].valor

    descricaoPedido.innerHTML += `<p>${qtdGas.value}x -- ${comidas[14].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

h2o.addEventListener('click', ()=> {
    let quantidade = Number(qtdh2o.value)
    precoComida = quantidade * comidas[15].valor

    descricaoPedido.innerHTML += `<p>${qtdh2o.value}x -- ${comidas[15].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})

suco.addEventListener('click', ()=> {
    let quantidade = Number(qtdSuco.value)
    precoComida = quantidade * comidas[16].valor

    descricaoPedido.innerHTML += `<p>${qtdSuco.value}x -- ${comidas[16].nome} -- R$${precoComida.toFixed(2)}</p>`
    soma += precoComida
    totalPedido.value = `R$${soma.toFixed(2)}`
})