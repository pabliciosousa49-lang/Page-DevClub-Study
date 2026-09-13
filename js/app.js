// Etapas da aplicação — Seleção - selecionar as etapas principais da interface
const abrirBloco = document.getElementById("abrir-bloco");
const inserirCodigo = document.getElementById("inserir-codigo");
const analiseIa = document.getElementById("analise-ia");
const quiz = document.getElementById("quiz");
const finalizacao = document.getElementById("finalizacao");

// Elementos de abertura do bloco — Seleção - selecionar campos e botão para iniciar o bloco
const tituloTrechoInput = document.getElementById("titulo-trecho");
const linguagemSelect = document.getElementById("linguagem");
const continuarBtn = document.getElementById("continuar-btn");

// Elementos de inserção do código — Seleção - selecionar informações, campo de código e botões da etapa
const tituloTrechoExibicao = document.getElementById("titulo-trecho-exibicao");
const linguagemExibicao = document.getElementById("linguagem-exibicao");
const codigoInput = document.getElementById("codigo-input");
const voltarInicioBtn = document.getElementById("voltar-inicio-btn");
const analisarBtn = document.getElementById("analisar-btn");

// Elementos da análise — Seleção - selecionar botões de navegação e geração do quiz
const voltarCodigoBtn = document.getElementById("voltar-codigo-btn");
const gerarQuizBtn = document.getElementById("gerar-quiz-btn");
const voltarPaginabtn = document.getElementById("voltar-pagina-btn");
// Elementos do quiz — Seleção - selecionar progresso e controles de navegação das perguntas
const progressoQuiz = document.getElementById("progresso-quiz");
const perguntaAnteriorBtn = document.getElementById("pergunta-anterior-btn");
const avancarPerguntaBtn = document.getElementById("avancar-pergunta-btn");

// Elementos da finalização — Seleção - selecionar controles para salvar o bloco e exportar o PDF
const salvarBlocoBtn = document.getElementById("salvar-bloco-btn");
const salvarPdfBtn = document.getElementById("salvar-pdf-btn");

// Dados do bloco — Processamento - estruturar os dados do bloco de estudo
const bloco = {
    titulo: "",
    linguagem: "",
    codigo: "",
    analise: null,
    quiz: [],
    respostas: []
};

// Controle de etapas — Atualização - controlar qual etapa da aplicação fica visível
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

// Estado inicial — Atualização - exibir a etapa de abertura ao iniciar a aplicação
mostrarEtapa(abrirBloco);

// Abertura do bloco — Escuta - iniciar o bloco ao clicar no botão continuar
continuarBtn.addEventListener("click", function () {
    // Dados do formulário — Processamento - obter e preparar título e linguagem informados
    const tituloTrecho = tituloTrechoInput.value.trim();
    const linguagem = linguagemSelect.value;

    // Validação do título — Condição - impedir avanço quando o título não for informado
    if (tituloTrecho === "") {
        alert("Informe qual trecho você está trabalhando.");
        tituloTrechoInput.focus();
        return;
    }

    // Validação da linguagem — Condição - impedir avanço quando a linguagem não for selecionada
    if (linguagem === "") {
        alert("Selecione uma linguagem.");
        linguagemSelect.focus();
        return;
    }

    // Linguagem selecionada — Processamento - obter o texto da linguagem escolhida pelo aluno
    const linguagemSelecionada =
        linguagemSelect.options[linguagemSelect.selectedIndex].text;

    // Dados iniciais do bloco — Atualização - armazenar título e linguagem do estudo
    bloco.titulo = tituloTrecho;
    bloco.linguagem = linguagem;

    // Informações do bloco — Atualização - exibir título e linguagem na etapa de código
    tituloTrechoExibicao.textContent = tituloTrecho;
    linguagemExibicao.textContent = linguagemSelecionada;
    mostrarEtapa(inserirCodigo);
});

// Retorno ao início — Escuta - retornar para a abertura do bloco ao clicar no botão voltar
voltarInicioBtn.addEventListener("click", function () {
    mostrarEtapa(abrirBloco);
});

// Análise do código — Escuta - iniciar o processo de análise ao clicar no botão analisar
analisarBtn.addEventListener("click", function () {
    // Código informado — Processamento - obter e preparar o código inserido pelo aluno
    const codigo = codigoInput.value.trim();

    // Validação do código — Condição - impedir análise quando nenhum código for informado
    if (codigo === "") {
        alert("Cole um trecho de código antes de analisar.");
        codigoInput.focus();
        return;
    }

    // Código do bloco — Atualização - armazenar código informado pelo aluno
    bloco.codigo = codigo;

    // Integração com IA — Processamento - enviar o código para análise em uma fase futura
    mostrarEtapa(analiseIa);
});

// Retorno ao código — Escuta - retornar para a etapa de inserção do código
voltarCodigoBtn.addEventListener("click", function () {
    mostrarEtapa(inserirCodigo);
});

// Geração do quiz — Escuta - abrir o quiz após a etapa de análise
gerarQuizBtn.addEventListener("click", function () {
    // Perguntas do quiz — Processamento - carregar perguntas geradas pela IA em uma fase futura
    mostrarEtapa(quiz);
});

// Estado do quiz — Processamento - controlar pergunta atual e quantidade total de perguntas
let perguntaAtual = 1;
const totalPerguntas = 20;

// Progresso do quiz — Atualização - atualizar progresso e comportamento dos botões do quiz
function atualizarProgressoQuiz() {
    progressoQuiz.textContent = `Pergunta ${perguntaAtual} de ${totalPerguntas}`;
    perguntaAnteriorBtn.disabled = perguntaAtual === 1;

    // Última pergunta — Condição - alterar o botão quando o aluno chegar ao final do quiz
    if (perguntaAtual === totalPerguntas) {
        avancarPerguntaBtn.textContent = "Finalizar Quiz";
    } else {
        avancarPerguntaBtn.textContent = "Avançar";
    }
}

// Pergunta anterior — Escuta - voltar uma pergunta ao clicar no botão anterior
perguntaAnteriorBtn.addEventListener("click", function () {
    // Limite inicial — Condição - impedir navegação para antes da primeira pergunta
    if (perguntaAtual > 1) {
        // Navegação anterior — Processamento - diminuir a posição atual do quiz
        perguntaAtual--;

        // Interface do quiz — Atualização - atualizar o progresso após retornar uma pergunta
        atualizarProgressoQuiz();
    }
});

// Próxima pergunta — Escuta - processar a resposta e avançar para a próxima pergunta
avancarPerguntaBtn.addEventListener("click", function () {
    // Resposta selecionada — Seleção - localizar a alternativa marcada pelo aluno
    const respostaSelecionada = document.querySelector(
        'input[name="resposta-quiz"]:checked'
    );

    // Resposta obrigatória — Condição - impedir avanço sem uma alternativa selecionada
    if (!respostaSelecionada) {
        alert("Selecione uma alternativa para continuar.");
        return;
    }

    // Perguntas restantes — Condição - verificar se ainda existem perguntas para responder
    if (perguntaAtual < totalPerguntas) {
        // Navegação seguinte — Processamento - aumentar a posição atual do quiz
        perguntaAtual++;

        // Interface do quiz — Atualização - atualizar progresso e limpar a alternativa marcada
        atualizarProgressoQuiz();
        respostaSelecionada.checked = false;
        return;
    }

    // Finalização do quiz — Atualização - exibir a etapa final após a última pergunta
    mostrarEtapa(finalizacao);
});

// Salvamento do bloco — Escuta - iniciar o salvamento dos dados do bloco
salvarBlocoBtn.addEventListener("click", function () {
    // Persistência do bloco — Processamento - salvar os dados no LocalStorage em uma fase futura
    alert("O salvamento do bloco será implementado na próxima fase.");
});

// Exportação do PDF — Escuta - iniciar a exportação do resumo do bloco
salvarPdfBtn.addEventListener("click", function () {
    // Geração do PDF — Processamento - gerar o arquivo PDF em uma fase futura
    alert("A geração do PDF será implementada posteriormente.");
});

// Inicialização do quiz — Atualização - configurar o estado visual inicial do questionário
atualizarProgressoQuiz();