// Etapas — Seleção

const abrirBloco = document.getElementById("abrir-bloco");
const inserirCodigo = document.getElementById("inserir-codigo");
const analiseIa = document.getElementById("analise-ia");
const quiz = document.getElementById("quiz");
const finalizacao = document.getElementById("finalizacao");

// Elementos: Abrir bloco — Seleção

const tituloTrechoInput = document.getElementById("titulo-trecho");
const linguagemSelect = document.getElementById("linguagem");
const continuarBtn = document.getElementById("continuar-btn");

// Elementos: Inserir código — Seleção

const tituloTrechoExibicao = document.getElementById("titulo-trecho-exibicao");
const linguagemExibicao = document.getElementById("linguagem-exibicao");
const codigoInput = document.getElementById("codigo-input");
const voltarInicioBtn = document.getElementById("voltar-inicio-btn");
const analisarBtn = document.getElementById("analisar-btn");

// Elementos: Análise — Seleção

const voltarCodigoBtn = document.getElementById("voltar-codigo-btn");
const gerarQuizBtn = document.getElementById("gerar-quiz-btn");

// Elementos: Quiz — Seleção

const progressoQuiz = document.getElementById("progresso-quiz");
const perguntaAnteriorBtn = document.getElementById("pergunta-anterior-btn");
const avancarPerguntaBtn = document.getElementById("avancar-pergunta-btn");

// Elementos: Finalização —- Seleção

const salvarBlocoBtn = document.getElementById("salvar-bloco-btn");
const salvarPdfBtn = document.getElementById("salvar-pdf-btn");

// Controle de etapas — Atualização

function mostrarEtapa(etapaSelecionada) {
    abrirBloco.style.display = "none";
    inserirCodigo.style.display = "none";
    analiseIa.style.display = "none";
    quiz.style.display = "none";
    finalizacao.style.display = "none";

    etapaSelecionada.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Estado inicial — Atualização

mostrarEtapa(abrirBloco);

// Abrir bloco — Escuta

continuarBtn.addEventListener("click", function () {

    // Dados do formulário — Processamento

    const tituloTrecho = tituloTrechoInput.value.trim();
    const linguagem = linguagemSelect.value;

    // Validação do título — Condição

    if (tituloTrecho === "") {
        alert("Informe qual trecho você está trabalhando.");
        tituloTrechoInput.focus();
        return;
    }

    // Validação da linguagem — Condição

    if (linguagem === "") {
        alert("Selecione uma linguagem.");
        linguagemSelect.focus();
        return;
    }

    // Linguagem selecionada — Processamento

    const linguagemSelecionada =
        linguagemSelect.options[linguagemSelect.selectedIndex].text;

    // Informações do bloco — Atualização

    tituloTrechoExibicao.textContent = tituloTrecho;
    linguagemExibicao.textContent = linguagemSelecionada;

    mostrarEtapa(inserirCodigo);
});

// Voltar ao início — Escuta

voltarInicioBtn.addEventListener("click", function () {
    mostrarEtapa(abrirBloco);
});

// Analisar código — Escuta

analisarBtn.addEventListener("click", function () {

    // Código informado — Processamento

    const codigo = codigoInput.value.trim();

    // Validação do código — Condição

    if (codigo === "") {
        alert("Cole um trecho de código antes de analisar.");
        codigoInput.focus();
        return;
    }

    // A chamada para a API será adicionada na fase de integração.

    mostrarEtapa(analiseIa);
});

// Voltar ao código — Escuta

voltarCodigoBtn.addEventListener("click", function () {
    mostrarEtapa(inserirCodigo);
});

// Gerar quiz — Escuta

gerarQuizBtn.addEventListener("click", function () {

    // As perguntas serão carregadas pela IA posteriormente.

    mostrarEtapa(quiz);
});
