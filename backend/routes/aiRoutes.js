// Dependência de rotas — Seleção - importar o recurso responsável pela criação das rotas
const express = require("express");

// Funções da IA — Seleção - importar os controllers de análise e geração do quiz
const { analisarCodigo, gerarQuiz } = require("../controllers/aiController");

// Roteador da IA — Processamento - criar o roteador responsável pelas requisições relacionadas à IA
const router = express.Router();

// Rota de análise — Escuta - receber solicitações para análise de código
router.post("/analisar", analisarCodigo);

// Rota do quiz — Escuta - receber solicitações de geração das perguntas
router.post("/gerar-quiz", gerarQuiz);

// Rota de análise — Escuta - encaminhar solicitações de análise para o controller da IA
module.exports = router;
