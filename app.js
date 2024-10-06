// Função que altera o status do jogo e exibe alertas de acordo com a ação
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let gameNome = gameClicado.querySelector(".dashboard__item__name").textContent;

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        // Caso o jogo esteja alugado, devolver
        imagem.classList.remove("dashboard__item__img--rented");
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return");
        alert(`Você devolveu o jogo ${gameNome}. Obrigado pela preferencia!`);
    } else {
        // Caso o jogo esteja disponível, alugar
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
        alert(`Parabéns por alugar ${gameNome}!!! Aproveite seu jogo. Prazo para a devolução 7 dias!`);
    }
}