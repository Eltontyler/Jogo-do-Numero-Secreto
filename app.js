/*let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Bem vindo ao jogo';

let paragrafo = document.querySelector ('p');
paragrafo.innerHTML = ' Escolha um numero de 1 a 20';*/
let listaDeNumerosSorteados = [];
let numeriLimite = 10;
let numeroSecreto = geraNumeroAleatorio ();
let tentativas = 1

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

mensagemInicial();

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Que os jogos começe')
    exibirTextoNaTela ('p', 'Escolha um numero de 1 a 20')
}



function verificarChute() {
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1',' Parabéns você Acertou !');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'Você descobriu o numero secreto em apenas ' + tentativas+ ' ' +palavraTentativa;
        exibirTextoNaTela ('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
            if( chute > numeroSecreto){
                exibirTextoNaTela ('p', ' O número secreto e menor');
            } else {
                exibirTextoNaTela ('p' , 'O núnmero secreto e maior');
            }
    }
    tentativas++;
    limpcarCampo ();
   
}
   


function geraNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random () * numeriLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeriLimite) {
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return geraNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limpcarCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciaJogo () { 
    numeroSecreto = geraNumeroAleatorio ();
    limpcarCampo ()
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}