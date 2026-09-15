// Dependência de rotas — Seleção - importar o recurso responsável pela criação das rotas
const express = require("express");

// Controller da IA — Seleção - importar função responsável pelo processamento da análise
const { analisarCodigo } = require("../controllers/aiController");

// Roteador da IA — Processamento - criar o roteador responsável pelas requisições relacionadas à IA
const router = express.Router();

// Rota de análise — Escuta - receber solicitações para análise de código
router.post("/analisar", analisarCodigo);

// Rota de análise — Escuta - encaminhar solicitações de análise para o controller da IA
module.exports = router;
