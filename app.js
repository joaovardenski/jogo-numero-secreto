let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector("input").value);
    if (chute === numeroSecreto) {
        console.log(listaDeNumerosSorteados);
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `O número secreto era ${numeroSecreto} você acertou com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chute").setAttribute("disabled", true);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número é menor que " + chute);
        } else {
            exibirTextoNaTela("p", "O número é maior que " + chute);
        }
        tentativas++;
        limparCampo();
    }
    console.log(tentativas);
}

function gerarNumeroAleatorio() {
    if (listaDeNumerosSorteados.length === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    let numeroEscolhido;
    do {
        numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));

    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}

function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(listaDeNumerosSorteados);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chute").removeAttribute("disabled");
}

