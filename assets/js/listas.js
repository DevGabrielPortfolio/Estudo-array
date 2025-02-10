const botao = document.getElementById('btn-inserir');
const lista = document.getElementById('lista-itens');


botao.addEventListener('click', () => {
    const valorInput = document.getElementById('item-nome').value.trim();
    if (valorInput !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = valorInput;  // Aqui vai o nome do item da lista, sem os botões

        // Cria os dois botões
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        const botaoExibir = document.createElement('button');
        botaoExibir.textContent = 'Exibir';

        novoItem.appendChild(botaoExibir);
        novoItem.appendChild(botaoExcluir);

        // Adiciona o novo item à lista
        lista.appendChild(novoItem);

        // Adicionar comportamento aos botões (exemplo básico)
        botaoExcluir.addEventListener('click', () => {
            lista.removeChild(novoItem); // Exclui o item quando o botão "Excluir" for clicado
        });

        botaoExibir.addEventListener('click', () => {
            alert(`Item: ${novoItem.textContent.replaceAll('ExibirExcluir','')}`); // Exibe o texto do item no alert
        });
    }
});

