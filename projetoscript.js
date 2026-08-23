const projectsData = {
    'ru': {
        title: "Projeto Catracas do Restaurante Universitário (RU)",
        company: "UnB",
        allocation: "Universidade de Brasília",
        roles: ["Analista de Requisitos", "Desenvolvedor", "Analista de Testes"],
        skills: ["JAVA", "Engenharia de Requisitos e Negócio", "Testes", "UML"],
        description: "Atuação no estudo e análise de novos requisitos, desenvolvimento e revisão de código (Java) e execução de testes de funcionalidade.",
        deliveryPercentage: "+50%",
        evaluation: "Encerramento da atuação antes da finalização completa do projeto."
    },
    'sociologia': {
        title: "Projeto Registro de Reuniões do Conselho de Sociologia",
        company: "UnB",
        allocation: "Universidade de Brasília",
        roles: ["Gerente de Projetos", "Analista de Requisitos"],
        skills: ["PHP", "Gestão de Escopo", "Gestão de Riscos", "Integração Hardware/Software", "Mapeamento de Processos (BPMN)", "Waterfall", "Engenharia de Requisitos e Negócio", "Cronograma"],
        description: "Gestão de projetos de tecnologia fim a fim, liderando escopo, cronograma, riscos e recursos. Levantamento de requisitos para integração de hardware/software e plataforma web para agendamento de reuniões, controle de presença, atas e votações. Cerca de 5 profissionais alocados ao projeto.",
        deliveryPercentage: "100%",
        evaluation: "Desenvolvido em PHP, projeto entregue e validado pelo usuário."
    },
    'sharepoint2010': {
        title: "Reestruturação do PWA no SharePoint 2010",
        company: "CTIS",
        allocation: "DESIN",
        roles: ["Desenvolvedor", "Analista SharePoint 2010", "Analista de Sistemas"],
        skills: ["SharePoint 2010", "Project Web Application (PWA)", "Engenharia de Requisitos e Negócio", "Gestão Portfólio de Projetos", "Workflows"],
        description: "Análise, configuração e desenvolvimento do Project Web Application (PWA) na ferramenta SharePoint 2010 como repositório centralizado de projetos internos, alinhado aos fluxos da organização.",
        deliveryPercentage: "100%",
        evaluation: "Desenvolvido e configurado, projeto entregue e validado pelo usuário."
    },
    'sig': {
        title: "Projeto SIG - Sistema Integrado de Gestão",
        company: "CTIS",
        allocation: "DESIN",
        roles: ["Gerente de Projetos", "Analista de Sistemas", "Analista de Requisitos"],
        skills: [".NET", "SharePoint 2010", "Engenharia de Requisitos e Negócio", "Suporte a Auditorias", "Gestão de Mudanças", "Gestão de Riscos", "Gestão de Pessoas", "Waterfall", "Cronograma"],
        description: "Gerenciamento de projetos de tecnologia fim a fim. Desenvolvimento de aplicação em .NET integrada ao SharePoint para centralizar a gestão documental, fluxo de Registro de Ocorrências (RO) e suporte a auditorias.Cerca de 4 profissionais alocados ao projeto.",
        deliveryPercentage: "100%",
        evaluation: "Gestão do projeto com evolução e regularidade no ciclo de entregas com alta estabilidade."
    },
    'totvsferias': {
        title: "Módulo Agendamento de Férias (TOTVS)",
        company: "CTIS",
        allocation: "DESIN",
        roles: ["Gerente de Projetos"],
        skills: ["TOTVS", "Mapeamento de Processos (BPMN)", "UX/UI Modernização", "Alçadas de Aprovação", "Gestão de Pessoa", "Gestão de Riscos", "Gestão de Pessoas", "Sistemas de RH", "Waterfall", "Cronograma"],
        description: "Gerenciamento de projetos de tecnologia fim a fim. Reestruturação do fluxo de solicitação e aprovação de férias no sistema TOTVS, alçada de aprovações, venda parcial de férias e modernização do front-end. Cerca de 5 profissionais alocados ao projeto.",
        deliveryPercentage: "100%",
        evaluation: "Facilitação do desenvolvimento, projeto entregue e validado pelo usuário."
    },
    'totvscv': {
        title: "Módulo Cadastro de CV, Recrutamento e Seleção",
        company: "CTIS",
        allocation: "DESIN",
        roles: ["Gerente de Projetos"],
        skills: ["TOTVS", "Sistemas de RH", "Engenharia de Requisitos e Negócio", "Mapeamento de Processos (BPMN)", "Waterfall", "Cronograma"],
        description: "Gerenciamento de projetos de tecnologia fim a fim na estruturação e implementação do módulo de cadastro de currículos, recrutamento e seleção integrado ao ecossistema TOTVS. Cerca de 5 profissionais alocados ao projeto.",
        deliveryPercentage: "100%",
        evaluation: "Módulo implementado com sucesso, otimizando os processos de seleção do órgão."
    },
    'rhsonda': {
        title: "Unificação do Sistema de RH para SONDA",
        company: "CTIS",
        allocation: "SONDA",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Product Owner (PO)"],
        skills: ["FrameWork Ágil (SCRUM)", "Histórias de Usuário (HUs)", "Backlog", "Squads Globais / Multiculturais", "Engenharia de Requisitos e Negócio", "Sistemas de RH", "Roadmap"],
        description: "Atuação como Product Owner (PO) na frente Brasil para a unificação do sistema global de RH da SONDA. Escrita de histórias de usuário (HUs), gestão de escopo, prazos e priorização do backlog em squads multiculturais e distribuídas.",
        deliveryPercentage: "+70%",
        evaluation: "Desligamento do projeto antes da conclusão por motivos de licença de saúde."
    },
    'controledocumentos': {
        title: "Sistema de Controle de Documentos (SharePoint 2013)",
        company: "VERT",
        allocation: "Defensoria Pública da União (DPU)",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Product Owner (PO)"],
        skills: ["SharePoint 2013", "Engenharia de Requisitos e Negócio", "Workflows", "FrameWork Ágil (SCRUM)", "Roadmap"],
        description: "Atuação como Analista de Requisitos realizando ajustes, levantamentos e configurações na ferramenta SharePoint 2013.",
        deliveryPercentage: "+50%",
        evaluation: "Saída antes de finalizar o projeto."
    },
    'fomento': {
        title: "Programa de Fomento às Atividades Produtivas Rurais v1.0 (Web)",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - DGI-SAGI",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Analista de Processos"],
        skills: ["Engenharia Reversa", "Mapeamento de Processos (BPMN)", "Sistemas Legados", "Engenharia de Requisitos e Negócio", "Melhoria Contínua (PDCA)", "GIT"],
        description: "Realizei o mapeamento de processos e a documentação de requisitos e regras de negócio por meio da engenharia reversa de um sistema legado. Superei o desafio do código não estruturado para mapear o fluxo atual, identificar falhas críticas e propor melhorias estruturais na aplicação.",
        deliveryPercentage: "100%",
        evaluation: "Manutenção e evolução da documentação do sistema regularizadas com alto índice de satisfação dos usuários."
    },
    'metadados': {
        title: "Atualização dos Metadados",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - DGI-SAGI",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Analista de Dados"],
        skills: ["Engenharia Reversa", "MER", "Banco de dados", "Engenharia de Requisitos e Negócio", "Mapeamento de Processos (BPMN)", "Melhoria Contínua (PDCA)"],
        description: "Realizei a documentação de requisitos e regras de negócio por meio da engenharia reversa de um sistema legado. Superei o desafio do código não estruturado para mapear o fluxo atual, identificar falhas nos dados e criação do Modelo Entidade-Relacionamento (MER).",
        deliveryPercentage: "100%",
        evaluation: "Manutenção e evolução da documentação do sistema regularizadas com alto índice de satisfação dos usuários."
    },
    'cadunico': {
        title: "CADÚNICO",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - DGI-SAGI",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Analista de Processos"],
        skills: ["CadÚnico - Sistemas", "Engenharia Reversa", "Melhoria Contínua (PDCA)", "Engenharia de Requisitos e Negócio", "Mapeamento de Processos (BPMN)", "GIT"],
        description: "Realizei o mapeamento de processos e a documentação de requisitos e regras de negócio por meio da engenharia reversa de um sistema legado. Superei o desafio do código não estruturado para mapear o fluxo atual, identificar falhas críticas e propor melhorias para evolução da aplicação.",
        deliveryPercentage: "80%",
        evaluation: "Transferido para outro departamento."
    },
    'educfin': {
        title: "EDUCFIN",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - DGI-SAGI",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Analista de Processos"],
        skills: ["Engenharia Reversa", "Engenharia de Requisitos e Negócio", "Workflows", "Mapeamento de Processos (BPMN)", "Melhoria Contínua (PDCA)", "GIT"],
        description: "Realizei o mapeamento de processos e a documentação de requisitos e regras de negócio por meio da engenharia reversa de um sistema legado. Superei o desafio do código não estruturado para mapear o fluxo atual, identificar falhas críticas e propor melhorias para evolução da aplicação.",
        deliveryPercentage: "100%",
        evaluation: "Projeto entregue com sucesso."
    },
    'cecad': {
        title: "CECAD 2.0",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - DGI-SAGI",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Analista de Processos"],
        skills: ["Sistemas Integrados", "Engenharia Reversa", "Engenharia de Requisitos e Negócio", "Mapeamento de Processos (BPMN)", "GIT"],
        description: "Realizei o mapeamento de processos e a documentação de requisitos e regras de negócio por meio da engenharia reversa de um sistema legado. Superei o desafio do código não estruturado para mapear o fluxo atual, identificar falhas críticas e propor melhorias para evolução da aplicação.",
        deliveryPercentage: "80%",
        evaluation: "Transferido para outro departamento."
    },
    'progredir': {
        title: "Programa Progredir",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - DGI-SAGI",
        roles: ["Analista de Requisitos", "Analista de Negócios", "Analista de Processos"],
        skills: ["PHP", "Engenharia Reversa", "Gestão de Prazos", "Engenharia de Requisitos e Negócio", "Mapeamento de Processos (BPMN)", "GIT"],
        description: "Realizei o mapeamento de processos e a documentação de requisitos e regras de negócio por meio da engenharia reversa de um sistema legado. Sistema produzido em PHP, todo o processo e documentação feita e entregue no prazo.",
        deliveryPercentage: "100%",
        evaluation: "Projeto entregue com sucesso."
    },
    'sgc': {
        title: "Sistema de Gestão de Capacitação (SGC)",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - DGI-SAGI",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Visão do Produto", "Roadmap", "Backlog", "GIT"],
        description: "Atuei como Scrum Master do projeto, realizando o KICK-OFF, criação da Visão do projeto, Roadmap, e backlog, realizando as cerimônias e fazendo o ciclo ágil rodar. Cerca de 4 profissionais alocados ao projeto.",
        deliveryPercentage: "40%",
        evaluation: "Projeto paralisado por determinação dos superiores."
    },
    'criancafeliz': {
        title: "Projeto Criança Feliz",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - STI",
        roles: ["Analista de Negócios", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Visão do Produto", "Roadmap", "Backlog", "Histórias de Usuário (HUs)", "Testes", "GIT"],
        description: "Atuei como Analista de Negócios e Requisitos, bem como criando o manual para a aplicação, sistema desenvolvido em JAVA utlizado para coleta de dados e estudo das informação para melhorar as politicas publicas da União.",
        deliveryPercentage: "40%",
        evaluation: "Promovido a Team Leader do contrato."
    },
    'lider': {
        title: "Team Leader Contrato MDS",
        company: "MONTREAL",
        allocation: "Ministério do Desenvolvimento Social (MDS) - STI",
        roles: ["Team Leader", "Preposto do Contrato"],
        skills: ["Gestão de Contrato", "Liderança", "Gestão de Pessoas", "Recrutamento e Seleção", "Gerencia", "GIT"],
        description: "Atuei como Team Leader e gestor do contrato nos últimos meses do contrato para o Ministério do Desenvolvimento Social (MDS). Cerca de 80 profissionais alocados ao projeto.",
        deliveryPercentage: "100%",
        evaluation: "Fechamos o contrato sem maiores problemas."
    },
    'ecoprodmds': {
        title: "Ecossistema Orientado a Produtos Digitais (ECOPROD - MDS)",
        company: "DATAINFO",
        allocation: "Ministério do Desenvolvimento Social (MDS) - STI",
        roles: ["Idealizador", "Desenvolvedor", "Analista de Governança e Compliance"],
        skills: ["Gestão de Contrato", "Liderança", "Gestão de Pessoas", "Recrutamento e Seleção", "Gerencia", "GIT", "Cronograma"],
        description: "Tem por objetivo garantir a integração sustentável entre os diversos atores e artefatos do macroprocesso de desenvolvimento de soluções e serviços digitais. Além disso, o propósito deste modelo é possibilitar a aplicação de conceitos e diretrizes de melhoria contínua, ou seja, fomentar a avaliação constante da qualidade de produtos e processos internos de modo a identificar gargalos, reduzir desperdícios e expandir a eficiência dos resultados.Cerca de 5 profissionais alocados ao projeto.",
        deliveryPercentage: "100%",
        evaluation: "Entrega realizada e mantida conforme acordado."
    },
    'sigtv': {
        title: "Sistema de Gestão de Transferências Voluntárias (SIGTV)",
        company: "GLOBAL HITSS",
        allocation: "Ministério do Desenvolvimento Social (MDS) - STI",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Visão do Produto", "Roadmap", "Backlog", "GIT"],
        description: "Atuei como Scrum Master do projeto, realizando o KICK-OFF, criação da Visão do projeto, Roadmap, e backlog, realizando as cerimônias e fazendo o ciclo ágil rodar. Foi uma ferramenta informatizada do governo federal brasileiro usada para gerenciar o repasse de recursos de emendas parlamentares na área da assistência social. Cerca de 7 profissionais alocados ao projeto.",
        deliveryPercentage: "60%",
        evaluation: "Saí do projeto, fui transferido para outro contrato."
    },
    'ressarcimento': {
        title: "Ressarcimento - Devolução Voluntária de Valores Recebidos",
        company: "GLOBAL HITSS",
        allocation: "Ministério do Desenvolvimento Social (MDS) - STI",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Visão do Produto", "Roadmap", "Backlog", "GIT"],
        description: "Atuei como Scrum Master do projeto, realizando o KICK-OFF, criação da Visão do projeto, Roadmap, e backlog, realizando as cerimônias e fazendo o ciclo ágil rodar. Serviço destinado à devolução voluntária de valores recebidos a título de Auxílio Emergencial. Cerca de 7 profissionais alocados ao projeto.",
        deliveryPercentage: "60%",
        evaluation: "Saí do projeto, fui transferido para outro contrato."
    },
    'sipc': {
        title: "Sistema Integrado de Prestação de Contas (SIPC)",
        company: "GLOBAL HITSS",
        allocation: "Ministério do Desenvolvimento Social (MDS) - STI",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Visão do Produto", "Roadmap", "Backlog", "GIT"],
        description: "Atuei como Scrum Master do projeto, realizando o KICK-OFF, criação da Visão do projeto, Roadmap, e backlog. Ferramenta digital criada para registrar e acompanhar a execução e a comprovação de gastos de recursos federais transferidos fundo a fundo pelo FNAS. Cerca de 5 profissionais alocados ao projeto.",
        deliveryPercentage: "60%",
        evaluation: "Saí do projeto, fui transferido para outro contrato."
    },
    'ecoprodmapa': {
        title: "Ecossistema Orientado a Produtos Digitais (ECOPROD - MAPA)",
        company: "GLOBAL HITSS",
        allocation: "Ministério da Agricultura e Pecuária (MAPA) - STI",
        roles: ["Idealizador", "Desenvolvedor", "Analista de Governança e Compliance"],
        skills: ["Gestão de Contrato", "Liderança", "Gestão de Pessoas", "Recrutamento e Seleção", "Gerencia", "GIT"],
        description: "Tem por objetivo garantir a integração sustentável entre os diversos atores e artefatos do macroprocesso de desenvolvimento de soluções e serviços digitais. O ECOPROD foi projetado para ser orientado à entrega de produtos digitais no serviço público. Cerca de 7 profissionais alocados ao projeto.",
        deliveryPercentage: "100%",
        evaluation: "Entrega realizada e mantida conforme acordado."
    },
    'pesqbrasilpp': {
        title: "PesqBrasil - Pescador Profissional",
        company: "GLOBAL HITSS",
        allocation: "Ministério da pesca e Aquicultura (MPA) - MAPA/STI",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Visão do Produto", "Roadmap", "Backlog", "GIT"],
        description: "Atuei como Scrum Master do projeto, realizando o KICK-OFF, criação da Visão do projeto, Roadmap, e backlog. Sistema desenvolvido para os pescadores artesanais e industriais de todo o país, oferecendo uma maneira eficiente e confiável de solicitar e obter a Licença de Pescador e Pescadora Profissional. Todos os pescadores e pescadoras profissionais no Brasil poderão realizar o cadastramento ou recadastramento diretamente pelo PesqBrasil RGP Pescador e Pescadora Profissional de forma GRATUITA. Cerca de 9 profissionais alocados ao projeto.",
        deliveryPercentage: "90%",
        evaluation: "Entrega realizada do MVP do projeto juntamente com melhorias e ajustes na base de dados, completamente funcional."
    },
    'pesqbrasilmb': {
        title: "PesqBrasil - Mapa de bordo",
        company: "GLOBAL HITSS",
        allocation: "Ministério da pesca e Aquicultura (MPA) - MAPA/STI",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Visão do Produto", "Roadmap", "Backlog", "GIT"],
        description: "Atuei como Scrum Master do projeto, realizando o KICK-OFF, criação da Visão do projeto, Roadmap, e backlog. O primeiro módulo a entrar em ação é o Mapa de Bordo digital, que detalha a produção das embarcações pesqueiras que surge como um farol de esperança para fortalecer o monitoramento pesqueiro no país. A evolução para sua forma digital trará celeridade na entrega e obtenção dos dados provenientes da pesca, propiciando decisões mais precisas e políticas públicas mais assertivas.Cerca de 6 profissionais alocados ao projeto.",
        deliveryPercentage: "90%",
        evaluation: "Entrega realizada do MVP do projeto juntamente com melhorias e ajustes na base de dados, completamente funcional."
    },
    'cortex': {
        title: "Plataforma de Monitoramento Córtex",
        company: "QINTESS",
        allocation: "Ministério da Justiça e Segurança Pública (MJSP) - CGDAD",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Histórias de Usuário (HUs)", "Roadmap", "Backlog", "GIT", "Engenharia de Requisitos e Negócio", "Cronograma"],
        description: "Atuei como Scrum Master do projeto, realizando o KICK-OFF, criação da Visão do projeto, Roadmap, e backlog. O primeiro módulo a entrar em ação é o Mapa de Bordo digital, que detalha a produção das embarcações pesqueiras que surge como um farol de esperança para fortalecer o monitoramento pesqueiro no país. A evolução para sua forma digital trará celeridade na entrega e obtenção dos dados provenientes da pesca, propiciando decisões mais precisas e políticas públicas mais assertivas.Cerca de 9 profissionais alocados ao projeto.",
        deliveryPercentage: "90%",
        evaluation: "Entrega realizada do MVP do projeto, atuanado nos incrementos, melhorias e ajustes, completamente funcional."
    },
    'torreetl': {
        title: "Projetos de Dados da Torre de ETL",
        company: "QINTESS",
        allocation: "Ministério da Justiça e Segurança Pública (MJSP) - CGDAD",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Histórias de Usuário (HUs)", "Roadmap", "Backlog", "GIT", "Engenharia de Requisitos e Negócio", "Cronograma", "ETL", "Liderança Ágil Multi-projeto", "Governança e Operações"],
        description: "Atuação simultânea como Scrum Master em 5 a 7 projetos, entre 10 a 15 profissionais alocados focados no desenvolvimento de pipelines de ETL e integração de dados com Databricks e Pentaho. Atuei na remoção de impedimentos, estruturação e refinamento de backlogs, suporte contínuo aos times de desenvolvimento, além de acompanhar a elaboração de documentações, testes e homologação das entregas.",
        deliveryPercentage: "90%",
        evaluation: "N/A"
    },
    'sisdjud': {
        title: "Sistema das Demandas em Judicialização na Saúde (SisDJUD)",
        company: "FioTEC",
        allocation: "Ministério da Saúde (MS) - DJUD",
        roles: ["Scrum Master", "Analista de Requisitos"],
        skills: ["FrameWork Ágil (SCRUM)", "Kick-off", "Histórias de Usuário (HUs)", "Roadmap", "Backlog", "GIT", "Engenharia de Requisitos e Negócio", "Cronograma", "ETL", "Liderança Ágil Multi-projeto", "Governança e Operações"],
        description: "Atuação simultânea como Scrum Master na remoção de impedimentos, estruturação e refinamento de backlogs, suporte contínuo aos times de desenvolvimento, além de acompanhar a elaboração de documentações, testes e homologação das entregas. Cerca de 9 profissionais alocados ao projeto",
        deliveryPercentage: "70%",
        evaluation: "Entrega realizadas."
    }
};

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

// Exibe a lista de projetos da empresa selecionada
function selectCompany(companyName, activeBtn) {
    // Destaca o botão ativo
    document.querySelectorAll('.company-btn').forEach(btn => btn.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');

    const listContainer = document.getElementById('projectsListContainer');
    const titleElement = document.getElementById('selectedCompanyTitle');
    const listElement = document.getElementById('projectsSimpleList');

    titleElement.innerText = `Projetos vinculados: ${companyName}`;
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

document.addEventListener('DOMContentLoaded', () => {
    updateProjectsCounter();
    renderCompanyButtons();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});