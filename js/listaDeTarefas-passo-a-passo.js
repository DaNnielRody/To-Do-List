// const novaTarefa = document.querySelector('[data-form-button]');

// novaTarefa.addEventListener('click', (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]').value;
//     console.log(input);
//     input.value = ''
// })

// const criarTarefa = (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     const valor = input.value;
    
//     const tarefa = document.querySelector('[data-task]');
//     const conteudo = `<p class="content">${valor}</p>`
//     tarefa.innerHTML = conteudo;
    
//     input.value = " ";
// }

// const novaTarefa = document.querySelector('[data-form-button]');
// novaTarefa.addEventListener('click', criarTarefa);

const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(botaoConclui())
    lista.appendChild(tarefa);

    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);

const botaoConclui = () => {
    const botao = document.createElement('button');

    botao.classList.add('check-button');
    botao.innerText = 'x';

    botao.addEventListener('click',  () => {
        console.log('fui clicado');
    }
)        
    return botao
} 
