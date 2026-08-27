document.addEventListener('DOMContentLoaded', () => {
    fetch('dados-certificacoes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição HTTP: status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Renderizar Formação Acadêmica
            const formacaoContainer = document.getElementById('formacao-academica-grid');
            if (formacaoContainer && data.formacaoAcademica) {
                formacaoContainer.innerHTML = '';
                data.formacaoAcademica.forEach(item => {
                    const downloadBtn = item.linkDownload 
                        ? `<a href="${item.linkDownload}" download target="_blank" class="btn-download">
                             <i class="fa-solid fa-download"></i> Baixar Certificado
                           </a>`
                        : '';

                    const cardHTML = `
                        <div class="cert-card">
                            <div class="cert-info">
                                <h3 class="cert-title">${item.titulo}</h3>
                                <ul class="cert-details">
                                    <li><i class="fa-solid fa-building"></i> <strong>Instituição:</strong> ${item.instituicao}</li>
                                    <li><i class="fa-solid fa-graduation-cap"></i> <strong>Formação:</strong> ${item.tipo}</li>
                                    <li><i class="fa-solid fa-calendar-check"></i> <strong>Ano de Conclusão:</strong> ${item.ano}</li>
                                </ul>
                                ${downloadBtn}
                            </div>
                        </div>
                    `;
                    formacaoContainer.innerHTML += cardHTML;
                });
            }

            // Renderizar Certificações & Formações
            const certsContainer = document.getElementById('certificacoes-grid');
            if (certsContainer && data.certificacoes) {
                certsContainer.innerHTML = '';
                data.certificacoes.forEach(cert => {
                    const cardHTML = `
                        <div class="cert-card">
                            <div class="cert-img-container">
                                <img src="${cert.imagem}" alt="Certificado ${cert.titulo}" class="cert-img">
                            </div>
                            <div class="cert-info">
                                <h3 class="cert-title">${cert.titulo}</h3>
                                <ul class="cert-details">
                                    <li><i class="fa-solid fa-building"></i> <strong>Instituição:</strong> ${cert.instituicao}</li>
                                    <li><i class="fa-solid fa-clock"></i> <strong>Duração:</strong> ${cert.duracao}</li>
                                    <li><i class="fa-solid fa-calendar-check"></i> <strong>Ano de Conclusão:</strong> ${cert.ano}</li>
                                </ul>
                            </div>
                        </div>
                    `;
                    certsContainer.innerHTML += cardHTML;
                });
            }

            // Renderizar Rodapé
            if (data.rodape) {
                const footerNome = document.getElementById('footer-nome');
                const footerTitulo = document.getElementById('footer-titulo');
                const footerSocial = document.getElementById('footer-social-container');

                if (footerNome) footerNome.textContent = data.rodape.nome;
                if (footerTitulo) footerTitulo.textContent = data.rodape.subtitulo;

                if (footerSocial && data.rodape.redesSociais) {
                    footerSocial.innerHTML = '';
                    data.rodape.redesSociais.forEach(rede => {
                        footerSocial.innerHTML += `
                            <a href="${rede.url}" target="_blank" class="social-btn">
                                <i class="${rede.icone}"></i> ${rede.plataforma}
                            </a>
                        `;
                    });
                }
            }
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});