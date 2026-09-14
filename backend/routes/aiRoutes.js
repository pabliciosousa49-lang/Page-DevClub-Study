// Dependência de rotas — Seleção - importar o recurso responsável pela criação das rotas
const express = require("express");

// Roteador da IA — Processamento - criar o roteador responsável pelas requisições relacionadas à IA
const router = express.Router();

// Rota de análise — Escuta - receber solicitações para análise de código
router.post("/analisar", function (req, res) {
    // Dados recebidos — Seleção - acessar os dados enviados pelo frontend
    const { titulo, linguagem, codigo } = req.body;

    // Validação dos dados — Condição - impedir análise quando os dados obrigatórios não forem enviados
    if (!titulo || !linguagem || !codigo) {
        return res.status(400).json({
            erro: "Título, linguagem e código são obrigatórios."
        });
    }

    // Resposta temporária — Atualização - confirmar o recebimento dos dados antes da integração com a IA
    res.json({
        mensagem: "Dados recebidos para análise.",
        titulo,
        linguagem,
        codigo
    });
});

// Exportação do roteador — Atualização - disponibilizar as rotas da IA para o servidor
module.exports = router;
