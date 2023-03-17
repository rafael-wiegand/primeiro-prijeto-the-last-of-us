//passo 1 - dar um jeitode pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


// passo 2 - dar um jeitode identificar o clique do usuáriono botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {


       //passo 3 - desmarcar o botão selecionadoanterior
         desativarBotaoSelecionado();

        //paaso 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //passo 5 - esconder a imagem ativa de fundo 
       esconderImagemAtiva();

       //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

       mostrarImagemDeFundo(indice);
})
})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}
