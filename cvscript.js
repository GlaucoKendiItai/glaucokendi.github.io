document.addEventListener('DOMContentLoaded', () => {
    // Busca os dados do perfil, experiências, formações/certificações e dados indexados
    Promise.all([
        fetch('dadosindex.json').then(res => res.json()),
        fetch('dados-historico.json').then(res => res.json()),
        fetch('dados-certificacoes.json').then(res => res.json())
    ])
    .then(([dadosIndex, dadosExperiencias, dadosCertificacoes]) => {
        
        // 1. Preenchimento do Perfil[cite: 11]
        const perfil = dadosIndex.perfil;
        document.getElementById('cv-nome').textContent = perfil.nome;
        document.getElementById('cv-cargo').textContent = perfil.titulo;
        document.getElementById('cv-localidade').textContent = perfil.localidade;
        
        const emailElem = document.getElementById('cv-email');
        emailElem.textContent = perfil.email;
        emailElem.href = `mailto:${perfil.email}`;
        document.getElementById('cv-telefone').textContent = perfil.telefone;

        // Resumo Profissional (Sobre Mim)[cite: 11]
        const sobreContainer = document.getElementById('cv-sobre-mim');
        if (sobreContainer) {
            sobreContainer.innerHTML = '';
            perfil.sobreMim.forEach(paragrafo => {
                const p = document.createElement('p');
                p.textContent = paragrafo;
                sobreContainer.appendChild(p);
            });
        }

        // 2. Preenchimento do Histórico Profissional
        const historicoContainer = document.getElementById('cv-historico-container');
        if (historicoContainer && dadosExperiencias.experiencias) {
            historicoContainer.innerHTML = '';

            dadosExperiencias.experiencias.forEach((exp, index) => {
                const item = document.createElement('div');
                item.className = 'timeline-item';

                // Parágrafos descritivos em linhas separadas
                const descricoesHTML = exp.descricoes
                    .map(desc => `<p class="job-description">${desc}</p>`)
                    .join('');

                // Tags / Competências da vaga
                const tagsHTML = exp.tags
                    ? exp.tags.map(t => `<span class="tag-pill ${t.classe || ''}">${t.nome}</span>`).join(' ')
                    : '';

                const detailsContainerId = `details-wrapper-${index}`;

                item.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <span class="job-title">${exp.cargo}</span>
                            <span class="job-period">${exp.periodo}</span>
                        </div>
                        <div class="company-name">
                            <i class="fa-solid fa-building"></i> <strong>Empresa:</strong> ${exp.empresa}
                        </div>
                        <div class="client-name">
                            <i class="fa-solid fa-handshake"></i> <strong>Cliente:</strong> ${exp.cliente}
                        </div>
                        
                        <div class="toggle-btn-container">
                            <button class="btn-toggle-desc" onclick="toggleDetalhes('${detailsContainerId}', this)">
                                <i class="fa-solid fa-chevron-down"></i> Ver Detalhes
                            </button>
                        </div>

                        <div id="${detailsContainerId}" class="job-details-wrapper collapsed">
                            <div class="job-descriptions-wrapper">
                                ${descricoesHTML}
                            </div>

                            ${tagsHTML ? `
                                <div class="job-skills">
                                    <strong>Competências & Tecnologias:</strong>
                                    <div class="tags-container">${tagsHTML}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
                historicoContainer.appendChild(item);
            });
        }

        // 3. Preenchimento da Formação Acadêmica
        const formacaoContainer = document.getElementById('cv-formacao-container');
        if (formacaoContainer && dadosCertificacoes.formacaoAcademica) {
            formacaoContainer.innerHTML = '';

            dadosCertificacoes.formacaoAcademica.forEach(item => {
                const card = document.createElement('div');
                card.className = 'academic-card';

                card.innerHTML = `
                    <div class="card-header-info">
                        <span class="item-year">${item.ano}</span>
                        <span class="item-type">${item.tipo}</span>
                    </div>
                    <h3 class="item-title">${item.titulo}</h3>
                    <p class="item-institution">
                        <i class="fa-solid fa-graduation-cap"></i> ${item.instituicao}
                    </p>
                `;
                formacaoContainer.appendChild(card);
            });
        }

        // 4. Preenchimento de Cursos e Certificações
        const certificacoesContainer = document.getElementById('cv-certificacoes-container');
        if (certificacoesContainer && dadosCertificacoes.certificacoes) {
            certificacoesContainer.innerHTML = '';

            dadosCertificacoes.certificacoes.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'tag-pill btn-course-tag';
                btn.type = 'button';
                btn.textContent = item.titulo;

                certificacoesContainer.appendChild(btn);
            });
        }

        // 5. Preenchimento de Objetivos (Extraído de dadosindex.json com icone e texto)[cite: 11]
        const objetivosContainer = document.getElementById('cv-objetivos-container');
        if (objetivosContainer && dadosIndex.objetivos) {
            objetivosContainer.innerHTML = '';

            dadosIndex.objetivos.forEach(item => {
                const div = document.createElement('div');
                div.className = 'objetivo-item';

                div.innerHTML = `
                    <i class="fa-solid ${item.icone}"></i> <span>${item.texto}</span>
                `;
                objetivosContainer.appendChild(div);
            });
        }

        // 6. Preenchimento de Cargos Desejados (Extraído de dadosindex.json)[cite: 11]
        const cargosDesejadosContainer = document.getElementById('cv-cargos-desejados-container');
        if (cargosDesejadosContainer && dadosIndex.cargosDesejados) {
            cargosDesejadosContainer.innerHTML = '';

            dadosIndex.cargosDesejados.forEach(cargo => {
                const tag = document.createElement('span');
                tag.className = 'tag-pill btn-course-tag';
                tag.textContent = cargo;

                cargosDesejadosContainer.appendChild(tag);
            });
        }

        // 7. Preenchimento de Idiomas (Extraído de dadosindex.json)[cite: 11]
        const idiomasContainer = document.getElementById('cv-idiomas-container');
        if (idiomasContainer && dadosIndex.idiomas) {
            idiomasContainer.innerHTML = '';

            dadosIndex.idiomas.forEach(item => {
                const div = document.createElement('div');
                div.className = 'idioma-item';

                div.innerHTML = `
                    <i class="fa-solid fa-language"></i> <strong>${item.idioma}:</strong> <span>${item.nivel}</span>
                `;
                idiomasContainer.appendChild(div);
            });
        }

        // 8. Preenchimento de Dados Complementares (Extraído de dadosindex.json)[cite: 11]
        const dadosComplementaresContainer = document.getElementById('cv-dados-complementares-container');
        if (dadosComplementaresContainer && dadosIndex.dadosComplementares) {
            dadosComplementaresContainer.innerHTML = '';

            dadosIndex.dadosComplementares.forEach(item => {
                const div = document.createElement('div');
                div.className = 'complementar-item';

                div.innerHTML = `
                    <i class="fa-solid ${item.icone}"></i> <span>${item.texto}</span>
                `;
                dadosComplementaresContainer.appendChild(div);
            });
        }

        // 9. Preenchimento do Rodapé[cite: 11]
        const rodape = dadosCertificacoes.rodape || dadosExperiencias.rodape || {};
        const footerNomeElem = document.getElementById('footer-nome');
        const footerTituloElem = document.getElementById('footer-titulo');

        if (footerNomeElem) footerNomeElem.textContent = rodape.nome || perfil.nome;
        if (footerTituloElem) footerTituloElem.textContent = rodape.subtitulo || perfil.titulo;

        const socialContainer = document.getElementById('social-container');
        if (socialContainer) {
            socialContainer.innerHTML = '';
            const redes = rodape.redesSociais || dadosIndex.redesSociais;
            redes.forEach(rede => {
                socialContainer.innerHTML += `
                    <a href="${rede.url}" target="_blank" class="social-btn">
                        <i class="${rede.icone}"></i> ${rede.plataforma}
                    </a>`;
            });
        }
    })
    .catch(error => console.error('Erro ao carregar os dados do currículo:', error));
});

// Função Global para Alternar Expandir / Recolher Detalhes
function toggleDetalhes(containerId, button) {
    const wrapper = document.getElementById(containerId);
    const isCollapsed = wrapper.classList.contains('collapsed');

    if (isCollapsed) {
        wrapper.classList.remove('collapsed');
        button.classList.add('expanded');
        button.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Ocultar Detalhes';
    } else {
        wrapper.classList.add('collapsed');
        button.classList.remove('expanded');
        button.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Ver Detalhes';
    }
}
// Função Global para acionar a impressão/salvamento em PDF
function imprimirEmOutraPagina() {
    window.print();
}