// Etapas da aplicação — Seleção - selecionar as etapas principais da interface
const abrirBloco = document.getElementById("abrir-bloco");
const inserirCodigo = document.getElementById("inserir-codigo");
const analiseIa = document.getElementById("analise-ia");
const quiz = document.getElementById("quiz");
const finalizacao = document.getElementById("finalizacao");
// Etapa de consulta — Seleção - selecionar a tela de resumo do bloco salvo
const consultaBloco = document.getElementById("consulta-bloco");

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
const resumoIa = document.getElementById("resumo-ia");
const explicacaoIa = document.getElementById("explicacao-ia");
const fluxoCodigo = document.getElementById("fluxo-codigo");

// Elementos do quiz — Seleção - selecionar progresso e controles de navegação das perguntas
const progressoQuiz = document.getElementById("progresso-quiz");
const perguntaAnteriorBtn = document.getElementById("pergunta-anterior-btn");
const avancarPerguntaBtn = document.getElementById("avancar-pergunta-btn");

// Elementos da finalização — Seleção - selecionar controles para salvar o bloco e exportar o PDF
const salvarBlocoBtn = document.getElementById("salvar-bloco-btn");
const salvarPdfBtn = document.getElementById("salvar-pdf-btn");

// Elementos da consulta — Seleção - selecionar os campos que apresentarão os dados do bloco salvo
const consultaTitulo = document.getElementById("consulta-titulo");
const consultaLinguagem = document.getElementById("consulta-linguagem");
const consultaCodigo = document.getElementById("consulta-codigo");
const consultaResumo = document.getElementById("consulta-resumo");
const consultaExplicacao = document.getElementById("consulta-explicacao");
const consultaFluxo = document.getElementById("consulta-fluxo");
const consultaQuestoes = document.getElementById("consulta-questoes");
const fecharConsultaBtn = document.getElementById("fechar-consulta-btn");

// Voltar página — Escuta - identificar clique no botão
voltarPaginabtn.addEventListener("click", function () {

    if (quiz.style.display === "block") {
        mostrarEtapa(analiseIa);
    }

    else if (analiseIa.style.display === "block") {
        mostrarEtapa(inserirCodigo);
    }

    else if (inserirCodigo.style.display === "block") {
        mostrarEtapa(abrirBloco);
    }

});

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
    consultaBloco.style.display = "none";

    etapaSelecionada.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Consulta do estudo — Processamento - preparar os dados do bloco salvo para exibição
function exibirResumoBloco(blocoSalvo) {

    // Identificação do estudo — Atualização - apresentar título e linguagem do bloco
    consultaTitulo.textContent = blocoSalvo.titulo;
    consultaLinguagem.textContent = blocoSalvo.linguagem;

    // Código do estudo — Atualização - apresentar o trecho anexado pelo aluno
    consultaCodigo.textContent = blocoSalvo.codigo;

    // Análise do estudo — Atualização - apresentar os dados retornados pela IA
    consultaResumo.textContent = blocoSalvo.analise.resumo;
    consultaExplicacao.textContent = blocoSalvo.analise.explicacao;
    consultaFluxo.textContent = blocoSalvo.analise.fluxo;

    // Questões do estudo — Condição - informar quando o bloco não possui questões registradas
    if (!blocoSalvo.quiz || blocoSalvo.quiz.length === 0) {
        consultaQuestoes.textContent =
            "Este bloco ainda não possui questões e correções registradas.";
    }

    // Tela de consulta — Atualização - exibir o resumo do estudo selecionado
    mostrarEtapa(consultaBloco);
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
analisarBtn.addEventListener("click", async function () {
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

    // Integração com IA — Processamento - enviar os dados do bloco para análise e aguardar a resposta da API
    try {
        const resultado = await analisarCodigo(
            bloco.titulo,
            bloco.linguagem,
            bloco.codigo
        );

        // Resultado da análise — Atualização - armazenar no bloco a análise retornada pela IA
        bloco.analise = resultado.analise;

        // Conteúdo da análise — Atualização - exibir na interface os dados retornados pela IA
        resumoIa.textContent = bloco.analise.resumo;
        explicacaoIa.textContent = bloco.analise.explicacao;
        fluxoCodigo.textContent = bloco.analise.fluxo;

        // Etapa da análise — Atualização - exibir a análise após o processamento do código
        mostrarEtapa(analiseIa);
    } catch (erro) {
        // Falha na análise — Condição - tratar erros ocorridos durante a comunicação com a API
        alert(erro.message);
    }

});


// Retorno ao código — Escuta - retornar para a etapa de inserção do código
voltarCodigoBtn.addEventListener("click", function () {
    mostrarEtapa(inserirCodigo);
});

// Geração do quiz — Escuta - solicitar perguntas ao clicar no botão
gerarQuizBtn.addEventListener("click", async function () {
    // Solicitação do quiz — Processamento - enviar os dados do bloco à API
    try {
        gerarQuizBtn.disabled = true;

        const perguntas = await gerarQuiz(
            bloco.titulo,
            bloco.linguagem,
            bloco.codigo,
            bloco.analise
        );

        // Validação do quiz — Condição - impedir avanço se a API não retornar 20 perguntas
        if (!Array.isArray(perguntas) || perguntas.length !== 20) {
            throw new Error("Não foi possível carregar as 20 perguntas do quiz.");
        }

        // Perguntas do bloco — Atualização - armazenar as perguntas geradas pela IA
        bloco.quiz = perguntas;

        // Início do quiz — Atualização - abrir o questionário após carregar as perguntas
        mostrarEtapa(quiz);

    } catch (erro) {
        // Falha na geração — Condição - informar quando não for possível carregar o quiz
        alert(erro.message);

    } finally {
        // Botão de geração — Atualização - permitir uma nova tentativa após a requisição
        gerarQuizBtn.disabled = false;
    }
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

// Salvamento do bloco — Escuta - iniciar o registro do estudo concluído
salvarBlocoBtn.addEventListener("click", function () {

    // Validação do estudo — Condição - impedir o salvamento sem os dados essenciais
    if (
        !bloco.titulo ||
        !bloco.linguagem ||
        !bloco.codigo ||
        !bloco.analise
    ) {
        alert("Preencha e analise o código antes de salvar o bloco.");
        return;
    }

    // Persistência do estudo — Processamento - registrar os dados do bloco no navegador
    try {
        const blocoSalvo = salvarBloco(bloco);

        // Confirmação do salvamento — Atualização - informar que o estudo foi registrado
        alert(`Bloco "${blocoSalvo.titulo}" salvo com sucesso!`);

    } catch (erro) {
        console.error("Erro ao salvar bloco:", erro);
        alert("Não foi possível salvar o bloco. Tente novamente.");
    }

});

// Exportação do PDF — Escuta - iniciar a exportação do resumo do bloco
salvarPdfBtn.addEventListener("click", function () {
    // Geração do PDF — Processamento - gerar o arquivo PDF em uma fase futura
    alert("A geração do PDF será implementada posteriormente.");
});

// Inicialização do quiz — Atualização - configurar o estado visual inicial do questionário
atualizarProgressoQuiz()