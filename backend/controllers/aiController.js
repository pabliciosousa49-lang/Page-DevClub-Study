
// SDK da IA — Seleção - importar recurso responsável pela comunicação com o Gemini
const { GoogleGenAI } = require("@google/genai");

// Cliente da IA — Processamento - configurar comunicação com o Gemini utilizando a chave protegida
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// Análise de código — Processamento - controlar o processamento das solicitações de análise
async function analisarCodigo(req, res) {
    // Dados da análise — Seleção - obter título, linguagem e código enviados na requisição
    const { titulo, linguagem, codigo } = req.body;

    // Validação dos dados — Condição - impedir processamento quando informações obrigatórias estiverem ausentes
    if (!titulo || !linguagem || !codigo) {
        return res.status(400).json({
            erro: "Título, linguagem e código são obrigatórios."
        });
    }

    try {
        // Prompt da análise — Processamento - estruturar instruções e código que serão enviados para a IA
        const prompt = `
Você é um mentor de programação.

Analise o trecho de código abaixo com foco educacional.

Título do estudo: ${titulo}
Linguagem: ${linguagem}

Código:
${codigo}

Explique de forma simples para um estudante de programação.

Retorne a análise utilizando exatamente esta estrutura:

RESUMO:
Explique resumidamente o objetivo do código.

EXPLICACAO:
Explique as principais partes e responsabilidades do código.

FLUXO:
Descreva a sequência de execução do código.

FORMATAÇÃO DA RESPOSTA:
Escreva o conteúdo dos campos resumo, explicacao e fluxo em texto simples.
Não utilize Markdown, HTML, asteriscos para negrito ou crases para destacar código.
Não repita os títulos RESUMO, EXPLICACAO e FLUXO dentro do conteúdo dos campos.
Utilize frases claras e quebras de linha quando necessário.
`;

        // Requisição ao Gemini — Processamento - enviar o código e solicitar uma análise estruturada
        const resposta = await ai.interactions.create({
            model: "gemini-3.6-flash",
            input: prompt,
            response_format: {
                type: "text",
                mime_type: "application/json",
                schema: {
                    type: "object",
                    properties: {
                        resumo: {
                            type: "string"
                        },
                        explicacao: {
                            type: "string"
                        },
                        fluxo: {
                            type: "string"
                        }
                    },
                    required: ["resumo", "explicacao", "fluxo"]
                }
            }
        });

        // Conteúdo da análise — Processamento - converter a resposta estruturada do Gemini em um objeto JavaScript
        const analise = JSON.parse(resposta.output_text);

        // Resultado da análise — Atualização - retornar os dados processados para a rota da aplicação
        return res.status(200).json({
            titulo,
            linguagem,
            analise
        });

    } catch (erro) {
        // Erro da análise — Condição - tratar falhas ocorridas durante a comunicação com a IA
        console.error("Erro ao analisar código com Gemini:", erro.message);

        // Resposta de erro — Atualização - retornar falha controlada sem expor detalhes internos da aplicação
        return res.status(500).json({
            erro: "Não foi possível analisar o código."
        });
    }
}

// Geração do quiz — Processamento - controlar as solicitações de geração das perguntas
async function gerarQuiz(req, res) {
    // Dados do estudo — Seleção - obter as informações utilizadas para gerar as perguntas
    const { titulo, linguagem, codigo, analise } = req.body;

    // Validação dos dados — Condição - impedir a geração do quiz sem as informações necessárias
    if (!titulo || !linguagem || !codigo || !analise) {
        return res.status(400).json({
            erro: "Título, linguagem, código e análise são obrigatórios."
        });
    }

    // Prompt do quiz — Processamento - definir as instruções para gerar perguntas com base no estudo
    const prompt = `
        Você é um mentor de programação.

        Crie um quiz educacional com exatamente 20 perguntas sobre o estudo abaixo.

        Título do estudo: ${titulo}
        Linguagem: ${linguagem}

        Código:
        ${codigo}

        Análise do código:
        Resumo: ${analise.resumo}
        Explicação: ${analise.explicacao}
        Fluxo: ${analise.fluxo}

        REGRAS DO QUIZ:
        Crie perguntas que avaliem a compreensão do código e dos conceitos explicados na análise.
        Cada pergunta deve conter quatro alternativas identificadas por a, b, c e d.
        Cada pergunta deve possuir apenas uma alternativa correta.
        Evite perguntas repetidas.
        Escreva as perguntas e alternativas em português claro.
        Não utilize Markdown ou HTML no conteúdo das perguntas e alternativas.
`;
}

// Exportação do controller — Atualização - disponibilizar a função de análise para utilização nas rotas
module.exports = {
    analisarCodigo,
    gerarQuiz
};