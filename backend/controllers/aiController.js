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

// Exportação do controller — Atualização - disponibilizar função de análise para utilização nas rotas
module.exports = {
    analisarCodigo
};