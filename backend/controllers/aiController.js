// Análise de código — Processamento - controlar o processamento das solicitações de análise
function analisarCodigo(req, res) {
    // Dados da análise — Seleção - obter título, linguagem e código enviados na requisição
    const { titulo, linguagem, codigo } = req.body;

    // Validação dos dados — Condição - impedir processamento quando informações obrigatórias estiverem ausentes
    if (!titulo || !linguagem || !codigo) {
        return res.status(400).json({
            erro: "Título, linguagem e código são obrigatórios."
        });
    }