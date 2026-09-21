console.log("O arquivo janela.js foi carregado.");

// Elementos da janela — Seleção - identificar o painel e seus controles
const janelaCodeStudy = document.getElementById("janela-codestudy");
const janelaMinimizada = document.getElementById("restaurar-codestudy-btn");

const abrirCodeStudyBtn = document.getElementById("abrir-codestudy-btn");
const blocoAulaAtualBtn = document.getElementById("bloco-aula-atual-btn");

const minimizarCodeStudyBtn = document.getElementById("minimizar-codestudy-btn");
const fecharCodeStudyBtn = document.getElementById("fechar-codestudy-btn");


// Abertura da janela — Atualização - exibir o bloco de estudos
function abrirJanelaCodeStudy() {
    janelaCodeStudy.hidden = false;
    janelaMinimizada.hidden = true;
}


// Minimização da janela — Atualização - ocultar o painel e exibir o atalho de retorno
function minimizarJanelaCodeStudy() {
    janelaCodeStudy.hidden = true;
    janelaMinimizada.hidden = false;
}


// Fechamento da janela — Atualização - ocultar o painel e o atalho minimizado
function fecharJanelaCodeStudy() {
    janelaCodeStudy.hidden = true;
    janelaMinimizada.hidden = true;
}


// Botões de abertura — Escuta - abrir o bloco a partir da página da aula
abrirCodeStudyBtn.addEventListener("click", abrirJanelaCodeStudy);
blocoAulaAtualBtn.addEventListener("click", abrirJanelaCodeStudy);


// Controles da janela — Escuta - minimizar, restaurar ou fechar o painel
minimizarCodeStudyBtn.addEventListener("click", minimizarJanelaCodeStudy);
janelaMinimizada.addEventListener("click", abrirJanelaCodeStudy);
fecharCodeStudyBtn.addEventListener("click", fecharJanelaCodeStudy);