document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resposta = await fetch('dados-historico.json');
        if (!resposta.ok) throw new Error('Erro ao carregar os dados de histórico.');
        
        const dadosCurriculo = await resposta.json();
        const experienciaAcumulada = calcularExperienciaPorCargo(dadosCurriculo);
        
        renderizarExperienciaPorCargo(experienciaAcumulada);
    } catch (erro) {
        console.error("Erro ao processar experiência por cargo:", erro);
    }
});

function converterTempoParaMeses(stringTempo) {
    let totalMeses = 0;
    const matchAnos = stringTempo.match(/(\d+)\s*ano/);
    if (matchAnos) totalMeses += parseInt(matchAnos[1], 10) * 12;
    
    const matchMeses = stringTempo.match(/(\d+)\s*m[eê]s/);
    if (matchMeses) totalMeses += parseInt(matchMeses[1], 10);
    
    return totalMeses;
}

function formatarMesesParaTexto(totalMeses) {
    const anos = Math.floor(totalMeses / 12);
    const meses = totalMeses % 12;
    let resultado = [];
    
    if (anos > 0) resultado.push(`${anos} ${anos === 1 ? 'ano' : 'anos'}`);
    if (meses > 0) resultado.push(`${meses} ${meses === 1 ? 'mês' : 'meses'}`);
    
    return resultado.length > 0 ? resultado.join(' e ') : '0 meses';
}

function calcularExperienciaPorCargo(dados) {
    const acmCargos = {};

    dados.experiencias.forEach(exp => {
        const mesesExp = converterTempoParaMeses(exp.tempo);
        
        // Garante compatibilidade caso venha como string única ou array de cargos
        const listaCargos = Array.isArray(exp.cargo) ? exp.cargo : [exp.cargo];

        listaCargos.forEach(cargoItem => {
            let cargoOriginal = cargoItem.trim();
            let cargoChave = cargoOriginal;

            // Padronizações lógicas para agrupar funções similares
            const cargoLower = cargoOriginal.toLowerCase();
            if (cargoLower.includes("scrum master") || cargoLower.includes("gerentes de projetos ágeis")) {
                cargoChave = "Scrum Master";
            } else if (cargoLower.includes("gerente de projetos")) {
                cargoChave = "Gerência de Projetos";
            } else if (cargoLower.includes("analista de sistemas") || cargoLower.includes("analista de requisitos")) {
                cargoChave = "Analista de Requisitos e Negócios";
            }

            if (!acmCargos[cargoChave]) {
                acmCargos[cargoChave] = 0;
            }
            acmCargos[cargoChave] += mesesExp;
        });
    });

    const resultadoFinal = {};
    for (let cargo in acmCargos) {
        resultadoFinal[cargo] = {
            totalMeses: acmCargos[cargo],
            tempoFormatado: formatarMesesParaTexto(acmCargos[cargo])
        };
    }
    return resultadoFinal;
}

function renderizarExperienciaPorCargo(experienciaAcumulada) {
    const container = document.getElementById('cargoExperienceGrid');
    if (!container) return;

    container.innerHTML = '';

    // Cria um layout de grade ou lista estruturada
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    grid.style.gap = '1rem';
    grid.style.marginTop = '1rem';

    for (const [cargo, info] of Object.entries(experienciaAcumulada)) {
        const card = document.createElement('div');
        card.className = 'info-box'; // Utiliza a classe visual padrão já existente no seu CSS
        card.innerHTML = `
            <h3><i class="fa-solid fa-briefcase"></i> ${cargo}</h3>
            <p style="font-size: 1.05rem; font-weight: 600; color: var(--primary-accent); margin-top: 0.5rem;">
                ${info.tempoFormatado}
            </p>
        `;
        grid.appendChild(card);
    }

    container.appendChild(grid);
}