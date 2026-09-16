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
    
    // Retorno da análise — Atualização - disponibilizar os dados recebidos para quem chamou a função
    return dados;
}