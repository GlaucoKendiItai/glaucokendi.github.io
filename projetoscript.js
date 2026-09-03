// Variável global para armazenar os projetos carregados via JSON
let projectsData = {};

// Função assíncrona para carregar o arquivo JSON de projetos
async function loadProjectsData() {
    try {
        const response = await fetch('projetos.json');
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo JSON: ${response.statusText}`);
        }
        projectsData = await response.json();
        
        // Inicializa os elementos da interface após carregar os dados com sucesso
        updateProjectsCounter();
        renderCompanyButtons();
    } catch (error) {
        console.error("Não foi possível carregar os dados dos projetos:", error);
    }
}

// Retorna o total de projetos cadastrados
function getProjectsCount() {
    return Object.keys(projectsData).length;
}

// Atualiza dinamicamente o contador na página
function updateProjectsCounter() {
    const counterElement = document.getElementById('projectsCounter');
    if (counterElement) {
        counterElement.innerText = `Total de projetos atuados: ${getProjectsCount()}`;
    }
}

// Obtém e agrupa as empresas com a contagem de projetos
function getCompaniesData() {
    const companies = {};
    Object.keys(projectsData).forEach(id => {
        const comp = projectsData[id].company;
        if (!companies[comp]) {
            companies[comp] = 0;
        }
        companies[comp]++;
    });
    return companies;
}

// Renderiza os botões de seleção das empresas
function renderCompanyButtons() {
    const container = document.getElementById('companyButtons');
    if (!container) return;

    const companies = getCompaniesData();
    container.innerHTML = '';

    Object.keys(companies).forEach(companyName => {
        const btn = document.createElement('button');
        btn.className = 'company-btn';
        btn.innerHTML = `<i class="fa-solid fa-building"></i> ${companyName} <span class="badge">${companies[companyName]}</span>`;
        btn.onclick = () => selectCompany(companyName, btn);
        container.appendChild(btn);
    });
}

// Mapeamento do tempo de atuação em cada empresa (extraído do histórico profissional)
const tempoEmpresas = {
    "UnB": "3 anos e 4 meses",
    "CTIS": "5 anos e 8 meses",
    "VERT": "1 mês",
    "MONTREAL": "2 anos e 4 meses",
    "DATAINFO": "3 meses",
    "GLOBAL HITSS": "4 anos e 2 meses",
    "QINTESS": "1 ano",
    "FioTEC": "1 ano"
};

// Função atualizada para exibir a empresa e o tempo de atuação correspondente
function selectCompany(companyName, activeBtn) {
    // Destaca o botão ativo
    document.querySelectorAll('.company-btn').forEach(btn => btn.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');

    const listContainer = document.getElementById('projectsListContainer');
    const titleElement = document.getElementById('selectedCompanyTitle');
    const listElement = document.getElementById('projectsSimpleList');

    // Busca o tempo de atuação formatado para a empresa selecionada
    const tempoDePermanencia = tempoEmpresas[companyName] ? ` (Tempo de atuação: ${tempoEmpresas[companyName]})` : '';

    // Injeta o título com o tempo de atuação destacado de forma sutil
    titleElement.innerHTML = `Projetos vinculados: <strong>${companyName}</strong> <span style="font-size: 0.85rem; color: var(--text-light); font-weight: normal;">${tempoDePermanencia}</span>`;
    
    listElement.innerHTML = '';

    Object.keys(projectsData).forEach(id => {
        const project = projectsData[id];
        if (project.company === companyName) {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="#" class="project-modal-link" onclick="openProjectModal('${id}'); return false;">
                    <i class="fa-solid fa-microchip"></i>
                    <span><strong>${project.title}</strong> — ${project.allocation}</span>
                </a>
            `;
            listElement.appendChild(li);
        }
    });

    listContainer.style.display = 'block';
}

function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById('modalProjectTitle').innerText = data.title;

    let metaContainer = document.getElementById('modalProjectMeta');
    if (!metaContainer) {
        metaContainer = document.createElement('div');
        metaContainer.id = 'modalProjectMeta';
        metaContainer.className = 'project-meta-info';
        
        const titleElement = document.getElementById('modalProjectTitle');
        titleElement.parentNode.insertBefore(metaContainer, titleElement.nextSibling);
    }
    
    metaContainer.innerHTML = `
        <p><strong>Empresa / Consultoria:</strong> ${data.company}</p>
        <p><strong>Alocação / Cliente Final:</strong> ${data.allocation}</p>
    `;

    const rolesContainer = document.getElementById('modalProjectRoles');
    rolesContainer.innerHTML = '';
    data.roles.forEach(role => {
        const tag = document.createElement('span');
        tag.className = 'role-tag';
        tag.innerText = role;
        rolesContainer.appendChild(tag);
    });

    let skillsContainer = document.getElementById('modalProjectSkills');
    if (!skillsContainer) {
        const skillsLabel = document.createElement('div');
        skillsLabel.className = 'modal-section-label';
        skillsLabel.innerText = 'Skills Aplicadas';

        skillsContainer = document.createElement('div');
        skillsContainer.id = 'modalProjectSkills';
        skillsContainer.className = 'project-skills';

        const descLabel = document.querySelector('#projectModalOverlay .modal-section-label:nth-of-type(2)');
        if (descLabel) {
            descLabel.parentNode.insertBefore(skillsLabel, descLabel);
            descLabel.parentNode.insertBefore(skillsContainer, descLabel);
        }
    }

    skillsContainer.innerHTML = '';
    if (data.skills && data.skills.length > 0) {
        data.skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.innerText = skill;
            skillsContainer.appendChild(tag);
        });
    }

    document.getElementById('modalProjectDescription').innerText = data.description;

    const numericPercentage = parseInt(data.deliveryPercentage.replace(/[^0-9]/g, ''), 10);
    let colorClass = '';

    if (numericPercentage === 100) {
        colorClass = 'text-success';
    } else if (numericPercentage >= 50 && numericPercentage <= 99) {
        colorClass = 'text-warning';
    } else {
        colorClass = 'text-danger';
    }

    const deliveryContainer = document.getElementById('modalProjectDelivery');
    deliveryContainer.innerHTML = `
        <i class="fa-solid fa-chart-line"></i>
        <span><strong>Entrega:</strong> <span class="${colorClass}">${data.deliveryPercentage}</span> &nbsp;|&nbsp; <strong>Avaliação / Resultado:</strong> ${data.evaluation}</span>
    `;

    document.getElementById('projectModalOverlay').classList.add('active');
}

function closeProjectModal() {
    document.getElementById('projectModalOverlay').classList.remove('active');
}

// Inicia o carregamento do JSON assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    loadProjectsData();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});