const botaoDeleta = () => {
        const botaoDeletar = document.createElement('button');

        botaoDeletar.innerText = 'x';
        botaoDeletar.addEventListener('click', deletarTarefa)

        return botaoDeletar
    }

    const deletarTarefa = (evento) => {
        const botaoDeleta = evento.target;

        const tarefaFinalizada = botaoDeleta.parentElement;

        tarefaFinalizada.remove();

        return botaoDeleta;
}
    
export default botaoDeleta