// Dependências do servidor — Seleção - importar recursos necessários para executar a API
const express = require("express");
const cors = require("cors");

// Variáveis de ambiente — Processamento - carregar configurações privadas armazenadas no arquivo .env
require("dotenv").config({
    path: require("path").join(__dirname, ".env")
});

// Rotas da IA — Seleção - importar rotas responsáveis pelas requisições de análise
const aiRoutes = require("./routes/aiRoutes");

// Aplicação Express — Processamento - criar a aplicação responsável pelo backend
const app = express();

// Porta do servidor — Observação - definir onde a API ficará disponível localmente
const PORT = 3000;

// Configuração de CORS — Processamento - permitir comunicação entre frontend e backend
app.use(cors());

// Leitura de JSON — Processamento - permitir que o servidor interprete dados enviados em JSON
app.use(express.json());

// Rotas da API — Escuta - direcionar requisições de IA para o roteador responsável
app.use("/api", aiRoutes);

// Rota de teste — Escuta - responder requisições usadas para verificar o funcionamento da API
app.get("/", function (req, res) {
    // Resposta da API — Atualização - retornar confirmação de funcionamento do backend
    res.json({
        mensagem: "API CodeStudy funcionando."
    });
});

// Inicialização do servidor — Escuta - iniciar a API e aguardar novas requisições
app.listen(PORT, function () {
    console.log(`Servidor CodeStudy rodando na porta ${PORT}`);
});