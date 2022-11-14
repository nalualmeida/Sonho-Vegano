// JS DO CARROSSEL MANUAL

var paginas = document.getElementById('paginas')
var pagina = document.querySelectorAll('.pagina')
var lanches = document.getElementById('lanches')
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
    paginas.style.transform = `translateX(${-paginaAtual * (paginas.offsetWidth/2)}px)`
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
var chantillyCafe = document.getElementById("chantillyCafe")

var qtdCappuccino= document.getElementById('qtdCappuccino')
var visorCappuccino = document.getElementById("visorCappuccino")
var chantillyCappuccino = document.getElementById("chantillyCappuccino")

var qtdChocolate= document.getElementById('qtdChocolate')
var visorChocolate = document.getElementById("visorChocolate")
var chantillyChocolate = document.getElementById("chantillyChocolate")

var qtdCha= document.getElementById('qtdCha')
var visorCha = document.getElementById("visorCha")
var camomila = document.getElementById('camomila')
var frutas = document.getElementById('frutas')
var matte = document.getElementById('matte')
var preto = document.getElementById('preto')
var escolhidoCha = ''

var qtdGas= document.getElementById('qtdGas')
var visorGas = document.getElementById("visorGas")

var qtdAgua= document.getElementById('qtdAgua')
var visorAgua = document.getElementById("visorAgua")

var qtdH2o= document.getElementById('qtdH2o')
var visorH2o = document.getElementById("visorH2o")
var limaoH2o = document.getElementById("limaoH2o")
var limoneto = document.getElementById("limoneto")
var escolhidoH2o = ''

var qtdSuco= document.getElementById('qtdSuco')
var visorSuco = document.getElementById("visorSuco")
var abacaxi = document.getElementById("abacaxi")
var hortela = document.getElementById("hortela")
var laranja = document.getElementById("laranja")
var limaoSuco = document.getElementById("limaoSuco")
var escolhidoSuco = ''

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
    {nome: 'Água s/ gás', valor: 4.50},
    {nome: 'Água c/ gás', valor: 5.00},
    {nome: 'h2o', valor: 7.50},
    {nome: 'Suco Natural', valor: 9.50},
    {nome: '+ Chantilly'}
]

var opcoes = [
    {nome: 'de Camomila'},
    {nome: 'de Frutas Vermelhas'},
    {nome: 'Matte c/ Limão'},
    {nome: 'Preto'},
    {nome: 'Limão'},
    {nome: 'Limoneto'},
    {nome: 'de Abacaxi'},
    {nome: 'de Abacaxi c/ hortelã'},
    {nome: 'de Laranja'},
    {nome: 'de Limão'}
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

qtdAgua.addEventListener('input', ()=> {
    visorAgua.innerHTML = qtdAgua.value
})

qtdGas.addEventListener('input', ()=> {
    visorGas.innerHTML = qtdGas.value
})

qtdH2o.addEventListener('input', ()=> {
    visorH2o.innerHTML = qtdH2o.value
})

qtdSuco.addEventListener('input', ()=> {
    visorSuco.innerHTML = qtdSuco.value
})



sonho.addEventListener('click', ()=> {
    if(qtdSonho.value != '0'){
        precoComida =  qtdSonho.value * comidas[0].valor

        descricaoPedido.innerHTML += `<p>${qtdSonho.value}x -- ${comidas[0].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}` 
    }else if(qtdSonho.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')
        // var fadeAlert = document.querySelector("#fadeAlert ")
        // var modalAlert  = document.querySelector("#modalAlert ")
        // var fecharAlert  = document.querySelector('#fecharAlert ')
        
        // let eventos  = [sonho,fadeAlert ,fecharAlert ]
        
        // let toogleModalAlert  = ()=>{
        //     modalAlert .classList.toggle('hide')
        //     fadeAlert .classList.toggle('hide')
        // }
        
        // eventos.map((el)=>{
        //     el.addEventListener("click", () => toogleModalAlert ())
        // })
    }       
})

croissant.addEventListener('click', ()=> {
    if(qtdCroissant.value != '0'){
        precoComida =  qtdCroissant.value * comidas[1].valor

        descricaoPedido.innerHTML += `<p>${qtdCroissant.value}x -- ${comidas[1].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`          
    }else if(qtdCroissant.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}  
})

cinnamon.addEventListener('click', ()=> {
    if(qtdCinnamon.value != '0'){
        precoComida = qtdCinnamon.value * comidas[2].valor

        descricaoPedido.innerHTML += `<p>${qtdCinnamon.value}x -- ${comidas[2].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`         
    }else if(qtdCinnamon.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}  
})

bolo.addEventListener('click', ()=> {
    if(qtdBolo.value != '0'){
        precoComida = qtdBolo.value * comidas[3].valor

        descricaoPedido.innerHTML += `<p>${qtdBolo.value}x -- ${comidas[3].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`       
    }else if(qtdBolo.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')} 
})

paoDeQueijo.addEventListener('click', ()=> {
    if(qtdPao.value != '0'){
        precoComida = qtdPao.value * comidas[4].valor

        descricaoPedido.innerHTML += `<p>${qtdPao.value}x -- ${comidas[4].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`       
    }else if(qtdPao.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

coxinha.addEventListener('click', ()=> {
    if(qtdCoxinha.value != '0'){
        precoComida = qtdCoxinha.value * comidas[5].valor

        descricaoPedido.innerHTML += `<p>${qtdCoxinha.value}x -- ${comidas[5].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`       
    }else if(qtdCoxinha.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

quiche.addEventListener('click', ()=> {
    if(qtdQuiche.value != '0'){
        precoComida = qtdQuiche.value * comidas[6].valor

        descricaoPedido.innerHTML += `<p>${qtdQuiche.value}x -- ${comidas[6].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`      
    }else if(qtdQuiche.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

queijoQuente.addEventListener('click', ()=> {
    if(qtdQueijo.value != '0'){
        precoComida = qtdQueijo.value * comidas[7].valor

        descricaoPedido.innerHTML += `<p>${qtdQueijo.value}x -- ${comidas[7].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`      
    }else if(qtdQueijo.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

cafe.addEventListener('click', ()=> {
    if(qtdCafe.value != '0'){
        if(chantillyCafe.checked){
            precoComida = qtdCafe.value * (comidas[8].valor + 2.2)
            descricaoPedido.innerHTML += `<p>${qtdCafe.value}x -- ${comidas[8].nome} ${comidas[16].nome} -- R$${precoComida.toFixed(2)}</p>`
        }else{
            precoComida = qtdCafe.value * comidas[8].valor
            descricaoPedido.innerHTML += `<p>${qtdCafe.value}x -- ${comidas[8].nome} -- R$${precoComida.toFixed(2)}</p>`
        }

        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`     
    }else if(qtdCafe.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

cappuccino.addEventListener('click', ()=> {
    if(qtdCappuccino.value != '0'){
        if(chantillyCappuccino.checked){
            precoComida = qtdCappuccino.value * (comidas[9].valor + 2.2)
            descricaoPedido.innerHTML += `<p>${qtdCappuccino.value}x -- ${comidas[9].nome} ${comidas[16].nome} -- R$${precoComida.toFixed(2)}</p>`
        }else{
            precoComida = qtdCappuccino.value * comidas[9].valor
            descricaoPedido.innerHTML += `<p>${qtdCappuccino.value}x -- ${comidas[9].nome} -- R$${precoComida.toFixed(2)}</p>`
        }

        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}` 
    }else if(qtdCappuccino.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

chocolateQuente.addEventListener('click', ()=> {
    if(qtdChocolate.value != '0'){
        if(chantillyChocolate.checked){
            precoComida = qtdChocolate.value * (comidas[10].valor + 2.2)
            descricaoPedido.innerHTML += `<p>${qtdChocolate.value}x -- ${comidas[10].nome} ${comidas[16].nome} -- R$${precoComida.toFixed(2)}</p>`
        }else{
            precoComida = qtdChocolate.value * comidas[10].valor
            descricaoPedido.innerHTML += `<p>${qtdChocolate.value}x -- ${comidas[10].nome} -- R$${precoComida.toFixed(2)}</p>`
        }

        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`
    }else if(qtdChocolate.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

cha.addEventListener('click', ()=> {
    if(camomila.checked){
        escolhidoCha = opcoes[0].nome
    }else if(frutas.checked){
        escolhidoCha = opcoes[1].nome
    }else if(matte.checked){
        escolhidoCha = opcoes[2].nome
    }else if(preto.checked){
        escolhidoCha = opcoes[3].nome
    }

    if(qtdCha.value != '0'){
        precoComida = qtdCha.value * comidas[11].valor

        descricaoPedido.innerHTML += `<p>${qtdCha.value}x -- ${comidas[11].nome} ${escolhidoCha} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`
    }else if(qtdCha.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

aguaSGas.addEventListener('click', ()=> {
    if(qtdAgua.value != '0'){
        precoComida = qtdAgua.value * comidas[12].valor

        descricaoPedido.innerHTML += `<p>${qtdAgua.value}x -- ${comidas[12].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`
    }else if(qtdAgua.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

aguaCGas.addEventListener('click', ()=> {
    if(qtdGas.value != '0'){
        precoComida = qtdGas.value * comidas[13].valor

        descricaoPedido.innerHTML += `<p>${qtdGas.value}x -- ${comidas[13].nome} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`
    }else if(qtdGas.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

h2o.addEventListener('click', ()=> {
    if(limaoH2o.checked){
        escolhidoH2o = opcoes[4].nome
    }else if(limoneto.checked){
        escolhidoH2o = opcoes[5].nome
    }else if((limaoH2o.checked = false) && (limoneto.checked = false)){alert('Selecione uma das opções.')}

    if(qtdH2o.value != '0'){
        precoComida = qtdH2o.value * comidas[14].valor

        descricaoPedido.innerHTML += `<p>${qtdH2o.value}x -- ${comidas[14].nome} ${escolhidoH2o} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`
    }else if(qtdH2o.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})

suco.addEventListener('click', ()=> {
    if(abacaxi.checked){
        escolhidoSuco = opcoes[6].nome
    }else if(hortela.checked){
        escolhidoSuco = opcoes[7].nome
    }else if(laranja.checked){
        escolhidoSuco = opcoes[8].nome
    }else if(limaoSuco.checked){
        escolhidoSuco = opcoes[9].nome
    }

    if(qtdSuco.value != '0'){
        precoComida = qtdSuco.value * comidas[15].valor

        descricaoPedido.innerHTML += `<p>${qtdSuco.value}x -- ${comidas[15].nome} ${escolhidoSuco} -- R$${precoComida.toFixed(2)}</p>`
        soma += precoComida
        totalPedido.value = `R$${soma.toFixed(2)}`
    }else if(qtdSuco.value == '0'){alert('Nenhum item foi adicionado ao carrinho.')}
})