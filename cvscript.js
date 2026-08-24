/**
 * Alterna a visibilidade dos detalhes de uma experiência profissional no currículo.
 * 
 * @param {HTMLElement} button - O botão que acionou o evento (passado via 'this').
 */
function toggleDetails(button) {
    // Seleciona o próximo elemento irmão do botão, que é a div contendo os detalhes (.job-details)
    const details = button.nextElementSibling;
    
    // Seleciona o ícone (tag <i>) dentro do botão
    const icon = button.querySelector('i');
    
    // Seleciona o elemento de texto (tag <span>) dentro do botão
    const textSpan = button.querySelector('span');

    // Verifica se os detalhes estão visíveis atualmente
    if (details.style.display === "block") {
        // Se visível: esconde o conteúdo
        details.style.display = "none";
        // Atualiza o texto do botão
        textSpan.textContent = "Ver detalhes";
        // Altera o ícone para a seta apontando para baixo
        icon.className = "fa-solid fa-chevron-down";
    } else {
        // Se oculto: exibe o conteúdo em bloco
        details.style.display = "block";
        // Atualiza o texto do botão
        textSpan.textContent = "Ocultar detalhes";
        // Altera o ícone para a seta apontando para cima
        icon.className = "fa-solid fa-chevron-up";
    }
}
/**
 * Configura o título do documento dinamicamente para exibição no cabeçalho/PDF ao imprimir
 * e gerencia a exibição expandida/recolhida dos detalhes profissionais.
 */

// Formata e define o título da página com a data atual (DD/MM/AAAA)
function atualizarTituloImpressao() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const ano = hoje.getFullYear();
    
    const dataFormatada = `${dia}/${mes}/${ano}`;
    
    // Atualiza o <title> do documento (usado pelo navegador como nome padrão do PDF)
    document.title = `Currículo - Glauco Kendi Itai - ${dataFormatada}`;
}

// Atualiza o título assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', atualizarTituloImpressao);

// Garante que o título esteja atualizado imediatamente antes da impressão ser disparada
window.addEventListener('beforeprint', atualizarTituloImpressao);

/**
 * Função acionada pelo botão de impressão na tela
 */
function imprimirCurriculo() {
    atualizarTituloImpressao();
    window.print();
}

/**
 * Alterna a visibilidade dos detalhes de uma experiência profissional no currículo.
 * 
 * @param {HTMLElement} button - O botão que acionou o evento (passado via 'this').
 */
function toggleDetails(button) {
    // Seleciona o próximo elemento irmão do botão (.job-details)
    const details = button.nextElementSibling;
    
    // Seleciona o ícone (tag <i>) e o texto (tag <span>) dentro do botão
    const icon = button.querySelector('i');
    const textSpan = button.querySelector('span');

    // Alterna a exibição entre visível e oculto
    if (details.style.display === "block") {
        details.style.display = "none";
        textSpan.textContent = "Ver detalhes";
        icon.className = "fa-solid fa-chevron-down";
    } else {
        details.style.display = "block";
        textSpan.textContent = "Ocultar detalhes";
        icon.className = "fa-solid fa-chevron-up";
    }
}