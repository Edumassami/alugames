let quantidadeAlugados = 1;

var alterarStatus = function (index) {
    return function(){
        let imagem = document.getElementsByClassName('dashboard__item__img')[index];
        let botao = document.getElementsByClassName('dashboard__item__button')[index];
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            let devolucao = confirm('Deseja confirmar a devolução do game?');
            if(devolucao == true){ 
                imagem.classList.remove('dashboard__item__img--rented');
                botao.classList.remove('dashboard__item__button--return');
                botao.innerHTML = 'Alugar';
                quantidadeAlugados--;
                console.log(`A quantidade de jogos alugados é ${quantidadeAlugados}`);
            }else {
                return;
            }
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.innerHTML = 'Devolver';
            quantidadeAlugados++;
            console.log(`A quantidade de jogos alugados é ${quantidadeAlugados}`);
        }
    }
};

let botoes = document.getElementsByClassName('dashboard__items__item');
for(var i=0;i<botoes.length;i++){
    botoes[i].addEventListener('click', alterarStatus(i), false);
}



