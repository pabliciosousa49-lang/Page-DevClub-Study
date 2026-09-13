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

// Dados do bloco — Processamento- estrutura de dados- bloco de estudo

const bloco = {
    titulo: "",
    linguagem: "",
    codigo: "",
    analise: null,
    quiz: [],
    respostas: []
};

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

    // Dados iniciais do bloco — Atualização - armazenar título e linguagem do estudo
    bloco.titulo = tituloTrecho;
    bloco.linguagem = linguagem;

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

// Estado do quiz — Observação

let perguntaAtual = 1;
const totalPerguntas = 20;

// Progresso do quiz — Atualização

function atualizarProgressoQuiz() {
    progressoQuiz.textContent =
        `Pergunta ${perguntaAtual} de ${totalPerguntas}`;

    perguntaAnteriorBtn.disabled = perguntaAtual === 1;

    // Última pergunta — Condição

    if (perguntaAtual === totalPerguntas) {
        avancarPerguntaBtn.textContent = "Finalizar Quiz";
    } else {
        avancarPerguntaBtn.textContent = "Avançar";
    }
}

// Pergunta anterior — Escuta

perguntaAnteriorBtn.addEventListener("click", function () {

    // Limite inicial — Condição

    if (perguntaAtual > 1) {

        // Navegação do quiz — Processamento

        perguntaAtual--;

        // Interface do quiz — Atualização

        atualizarProgressoQuiz();
    }
});

// Próxima pergunta — Escuta

avancarPerguntaBtn.addEventListener("click", function () {

    // Resposta selecionada — Seleção

    const respostaSelecionada = document.querySelector(
        'input[name="resposta-quiz"]:checked'
    );

    // Resposta obrigatória — Condição

    if (!respostaSelecionada) {
        alert("Selecione uma alternativa para continuar.");
        return;
    }

    // Existem perguntas restantes? — Condição

    if (perguntaAtual < totalPerguntas) {

        // Avançar pergunta — Processamento

        perguntaAtual++;

        // Interface do quiz — Atualização

        atualizarProgressoQuiz();
        respostaSelecionada.checked = false;

        return;
    }

    // Finalização — Atualização

    mostrarEtapa(finalizacao);
});

    // Salvar bloco — Escuta

salvarBlocoBtn.addEventListener("click", function () {

    // O LocalStorage será implementado na fase de persistência.

    alert("O salvamento do bloco será implementado na próxima fase.");
});

// Exportar PDF — Escuta

salvarPdfBtn.addEventListener("click", function () {

    // A geração do PDF será implementada posteriormente.

    alert("A geração do PDF será implementada posteriormente.");
});

// Inicialização — Atualização

atualizarProgressoQuiz();

