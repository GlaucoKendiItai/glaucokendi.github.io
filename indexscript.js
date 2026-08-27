document.addEventListener('DOMContentLoaded', () => {
    fetch('dadosindex.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro de rede ao carregar JSON: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Hero Section
            document.getElementById('hero-img').src = data.perfil.foto;
            document.getElementById('hero-nome').textContent = data.perfil.nome;
            document.getElementById('hero-titulo').textContent = data.perfil.titulo;
            document.getElementById('hero-cv').href = data.perfil.linkCv;

            // Sobre Mim
            const sobreContainer = document.getElementById('sobre-mim-container');
            data.perfil.sobreMim.forEach(paragrafo => {
                const p = document.createElement('p');
                p.innerHTML = paragrafo;
                sobreContainer.appendChild(p);
            });

            // Metodologias & Frameworks
            const metContainer = document.getElementById('metodologias-container');
            data.metodologias.forEach(item => {
                metContainer.innerHTML += `<span class="tag">${item}</span>`;
            });

            // Gestão & Processos
            const gestaoContainer = document.getElementById('gestao-container');
            data.gestaoEProcessos.forEach(item => {
                gestaoContainer.innerHTML += `<span class="tag">${item}</span>`;
            });

            // Idiomas
            const idiomasContainer = document.getElementById('idiomas-container');
            data.idiomas.forEach(i => {
                idiomasContainer.innerHTML += `<p><strong>${i.idioma}:</strong> ${i.nivel}</p>`;
            });

            // Dados Complementares
            const dadosCompContainer = document.getElementById('dados-comp-container');
            data.dadosComplementares.forEach(item => {
                dadosCompContainer.innerHTML += `<li><i class="fa-solid ${item.icone}"></i> ${item.texto}</li>`;
            });

            // Cargos Desejados
            const cargosContainer = document.getElementById('cargos-container');
            data.cargosDesejados.forEach(cargo => {
                cargosContainer.innerHTML += `<span class="tag">${cargo}</span>`;
            });

            // Objetivos
            const objContainer = document.getElementById('objetivos-container');
            data.objetivos.forEach(item => {
                objContainer.innerHTML += `<li><i class="fa-solid ${item.icone}"></i> ${item.texto}</li>`;
            });

            // Footer Section
            document.getElementById('footer-nome').textContent = data.perfil.nome;
            document.getElementById('footer-titulo').textContent = data.perfil.titulo;

            const socialContainer = document.getElementById('social-container');
            data.redesSociais.forEach(rede => {
                socialContainer.innerHTML += `
                    <a href="${rede.url}" target="_blank" class="social-btn">
                        <i class="${rede.icone}"></i> ${rede.plataforma}
                    </a>`;
            });
        })
        .catch(error => console.error('Erro ao carregar e processar o JSON:', error));
});