const perguntas = [
    {
        pergunta: "Qual o maior planeta do sistema solar?",
        opcoes: [
            "Marte",
            "Júpiter",
            "Terra",
            "Saturno"
        ],
        resposta: 1 // índice da resposta correta
    },
    {
        pergunta: "Qual a captal do Brasil?",
        opcoes: [
            "Rio de janeiro",
            "São Paulo",
            "Brasília",
            "Salvador"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual é a capital da França?",
        opcoes: [
            "Berlim",
            "Madrid",
            "Roma",
            "Paris"
        ],
        resposta: 3
    },
    {
        pergunta: "Em que ano o Brasil proclamou sua independência?",
        opcoes: [
            "1889",
            "1822",
            "1901",
            "1500"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual desses animais é conhecido por sua habilidade de mudar de cor?",
        opcoes: [
            "Tigre",
            "Camaleão",
            "Zebra",
            "Leão"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual a capital da Macedônia do Norte'?",
        opcoes: [
            "Skopje",
            "Romênia",
            "Paises baixos",
            "Alemanha"
        ],
        resposta: 0
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

