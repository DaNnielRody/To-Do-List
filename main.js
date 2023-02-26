import botaoConclui from "./components/concluiTarefa.js"
import botaoDeleta from "./components/deletaTarefa.js"

    const criarTarefa = (evento) => {
        evento.preventDefault();

        const lista = document.querySelector('[data-list]');

        const input = document.querySelector('[data-form-input]');
        const valor = input.value.trim();

        if (valor === '') {
            alert('Por favor, insira uma tarefa válida');
            return;
        }
    
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
    
        const conteudo = `<p class="content">${valor}</p>`;
        tarefa.innerHTML = conteudo;

        tarefa.appendChild(botaoConclui());
        tarefa.appendChild(botaoDeleta())
        lista.appendChild(tarefa);

        input.value = " ";
    }

    const novaTarefa = document.querySelector('[data-form-button]');
    novaTarefa.addEventListener('click', criarTarefa);
