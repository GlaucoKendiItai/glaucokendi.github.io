document.addEventListener('DOMContentLoaded', () => {
    fetch('dados-skills.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar os dados: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            renderizarSkills(data.categorias);
            renderizarRodape(data.rodape);
        })
        .catch(error => console.error('Erro no carregamento das skills:', error));
});

function renderizarSkills(categorias) {
    const container = document.getElementById('skills-container');
    if (!container || !categorias) return;

    container.innerHTML = '';

    categorias.forEach(categoria => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const tagsHTML = categoria.skills
            .map(skill => `<span class="tag-pill ${skill.classe}">${skill.nome}</span>`)
            .join('');

        cardDiv.innerHTML = `
            <h2 class="section-title">
                <i class="${categoria.icone}"></i> ${categoria.titulo}
            </h2>
            <div class="skills-tags-wrapper">
                ${tagsHTML}
            </div>
        `;

        container.appendChild(cardDiv);
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