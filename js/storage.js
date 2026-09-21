// Chave de armazenamento — Seleção - identificar os blocos salvos no navegador
const CHAVE_BLOCOS = "codestudy-blocos";


// Recuperação dos blocos — Processamento - obter os estudos armazenados no navegador
function recuperarBlocos() {
    const dadosSalvos = localStorage.getItem(CHAVE_BLOCOS);

    // Verificação do armazenamento — Condição - retornar uma lista vazia quando não houver blocos
    if (!dadosSalvos) {
        return [];
    }

    // Conversão dos dados — Processamento - transformar o JSON armazenado em uma lista de blocos
    try {
        const blocos = JSON.parse(dadosSalvos);

        return Array.isArray(blocos) ? blocos : [];
    } catch (erro) {
        console.error("Erro ao recuperar blocos:", erro);
        return [];
    }
}


// Salvamento do bloco — Processamento - registrar um novo estudo no navegador
function salvarBloco(bloco) {
    const blocosSalvos = recuperarBlocos();

    // Identificação do estudo — Atualização - criar um registro independente para o bloco
    const blocoSalvo = {
        ...bloco,
        id: crypto.randomUUID(),
        dataSalvamento: new Date().toISOString()
    };

    // Atualização da lista — Atualização - adicionar o novo bloco aos estudos existentes
    blocosSalvos.push(blocoSalvo);

    // Persistência dos dados — Atualização - armazenar a lista atualizada no navegador
    localStorage.setItem(CHAVE_BLOCOS, JSON.stringify(blocosSalvos));

    return blocoSalvo;
}
