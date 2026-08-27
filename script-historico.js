document.addEventListener('DOMContentLoaded', () => {
    fetch('dados-historico.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro de rede ao carregar JSON: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            renderizarTimeline(data.experiencias);
            renderizarRodape(data.rodape);
        })
        .catch(error => console.error('Erro ao inicializar histórico:', error));
});

function renderizarTimeline(experiencias) {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer || !experiencias) return;

    timelineContainer.innerHTML = '';

    experiencias.forEach(exp => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item';

        // Validação do campo cliente: caso esteja em branco, nulo ou omitido, renderiza "Preencha"
        const clienteTexto = (exp.cliente && exp.cliente.trim() !== '') ? exp.cliente : 'Preencha';

        const descricoesHTML = exp.descricoes
            ? exp.descricoes.map(desc => `<p class="job-description">${desc}</p>`).join('')
            : '';

        const tagsHTML = exp.tags
            ? exp.tags.map(tag => `<span class="tag-pill ${tag.classe}">${tag.nome}</span>`).join('')
            : '';

        itemDiv.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="job-title">${exp.cargo}</h3>
                    <span class="job-period"><i class="fa-solid fa-calendar-days"></i> ${exp.periodo}</span>
                </div>
                <h4 class="company-name"><i class="fa-solid fa-building"></i> <strong>Empresa:</strong> ${exp.empresa}</h4>
                <h5 class="client-name" style="margin-bottom: 12px; color: #555;"><i class="fa-solid fa-handshake"></i> <strong>Cliente:</strong> ${clienteTexto}</h5>
                ${descricoesHTML}
                <div class="tags-container">
                    ${tagsHTML}
                </div>
            </div>
        `;

        timelineContainer.appendChild(itemDiv);
    });
}

function renderizarRodape(rodape) {
    if (!rodape) return;

    const footerNome = document.getElementById('footer-nome');
    const footerTitulo = document.getElementById('footer-titulo');
    const footerSocial = document.getElementById('footer-social-container');

    if (footerNome) footerNome.textContent = rodape.nome;
    if (footerTitulo) footerTitulo.textContent = rodape.subtitulo;

    if (footerSocial && rodape.redesSociais) {
        footerSocial.innerHTML = '';
        rodape.redesSociais.forEach(rede => {
            footerSocial.innerHTML += `
                <a href="${rede.url}" target="_blank" class="social-btn">
                    <i class="${rede.icone}"></i> ${rede.plataforma}
                </a>
            `;
        });
    }
}