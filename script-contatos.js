// Constante global de versão da aplicação
const APP_VERSION = '1.0.0';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Carregar Header Dinamicamente
    const headerHolder = document.getElementById('header-holder');
    if (headerHolder) {
        fetch('header.html')
            .then(res => res.text())
            .then(html => {
                headerHolder.innerHTML = html;
                destacarMenuAtivo();
            })
            .catch(err => console.error('Erro ao carregar o header:', err));
    }

    // 2. Carregar Footer Dinamicamente
    const footerHolder = document.getElementById('footer-holder');
    if (footerHolder) {
        fetch('footer.html')
            .then(res => res.text())
            .then(html => {
                footerHolder.innerHTML = html;
                carregarDadosJSON();
            })
            .catch(err => console.error('Erro ao carregar o footer:', err));
    } else {
        carregarDadosJSON();
    }
});

// Destaca o link ativo na barra de navegação com base na página atual
function destacarMenuAtivo() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 3. Consumir dados-contatos.json e renderizar Contatos e Rodapé
function carregarDadosJSON() {
    fetch('dados-contatos.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar dados-contatos.json');
            return response.json();
        })
        .then(dados => {
            // Renderizar Canais de Contato
            const gridContatos = document.getElementById('contact-grid-container');
            if (gridContatos && dados.canaisContato) {
                gridContatos.innerHTML = '';
                dados.canaisContato.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'contact-card';
                    card.innerHTML = `
                        <div class="contact-icon"><i class="${item.icone}"></i></div>
                        <h3>${item.tipo}</h3>
                        <p>${item.valor}</p>
                        <a href="${item.link}" target="${item.target}" class="contact-link">${item.textoLink}</a>
                    `;
                    gridContatos.appendChild(card);
                });
            }

            // Renderizar Dados no Rodapé
            if (dados.rodape) {
                const nomeElem = document.getElementById('footer-nome');
                const tituloElem = document.getElementById('footer-titulo');
                const socialContainer = document.getElementById('footer-social-container');

                if (nomeElem) nomeElem.textContent = dados.rodape.nome;
                if (tituloElem) tituloElem.textContent = dados.rodape.subtitulo;

                if (socialContainer && dados.rodape.redesSociais) {
                    socialContainer.innerHTML = '';
                    dados.rodape.redesSociais.forEach(rede => {
                        socialContainer.innerHTML += `
                            <a href="${rede.url}" target="_blank" class="social-btn">
                                <i class="${rede.icone}"></i> ${rede.plataforma}
                            </a>
                        `;
                    });
                }
            }
        })
        .catch(error => console.error('Erro ao processar o JSON de contatos:', error));
}