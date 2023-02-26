const botaoConclui = () => {
        const botao = document.createElement('button');

        botao.classList.add('check-button');
        botao.innerText = 'v';

        botao.addEventListener('click', concluiTarefa);
        return botao;
    }

    const concluiTarefa = (evento) => {
        const botaoConcluir = evento.target;

        const tarefaCompletada = botaoConcluir.parentElement;

        tarefaCompletada.classList.toggle('done');
}

export default botaoConclui