// Análise pela API — Processamento - preparar comunicação do frontend com o backend
async function analisarCodigo(titulo, linguagem, codigo) {

    // Requisição ao backend — Processamento - enviar os dados do código para a rota de análise
    const resposta = await fetch("http://localhost:3000/api/analisar", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            titulo,
            linguagem,
            codigo
        })
    });

    // Dados da resposta — Seleção - converter a resposta do backend para um objeto JavaScript
    const dados = await resposta.json();
    // Validação da resposta — Condição - identificar respostas de erro retornadas pelo backend
    if (!resposta.ok) {
        throw new Error(dados.erro || "Erro ao analisar o código.");
    }

    // Retorno da análise — Atualização - disponibilização os dados recebidos para quem chamou a função
    return dados;
}

// Geração do quiz — Processamento - solicitar perguntas com base nos dados do estudo
async function gerarQuiz(titulo, linguagem, codigo, analise) {
    // Requisição do quiz — Processamento - enviar os dados do estudo ao backend
    const resposta = await fetch("http://localhost:3000/api/gerar-quiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo,
            linguagem,
            codigo,
            analise
        })
    });

    // Dados do quiz — Processamento - converter a resposta da API em objeto JavaScript
    const dados = await resposta.json();

    // Validação da resposta — Condição - identificar falhas na geração do quiz
    if (!resposta.ok) {
        throw new Error(dados.erro || "Não foi possível gerar o quiz.");
    }

    // Resultado do quiz — Atualização - disponibilizar as perguntas para a aplicação
    return dados.perguntas;
}