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
}