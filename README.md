
# CodeStudy

### Do código à compreensão.

O **CodeStudy** é uma ferramenta de apoio ao estudo de programação que utiliza inteligência artificial para ajudar o aluno a compreender a lógica, o funcionamento e o fluxo de execução de trechos de código.

O projeto surgiu de uma dificuldade encontrada durante meus estudos: compreender um código vai além de identificar sua sintaxe. É necessário entender por que cada instrução existe, qual é sua responsabilidade e como ela se relaciona com as demais partes da aplicação.

Além de desenvolver uma ferramenta educacional, utilizei o CodeStudy para construir e aplicar uma **metodologia própria de planejamento, desenvolvimento, leitura de código, testes e documentação**.

---

## 1. Problema

Durante o aprendizado de programação, é possível reproduzir um trecho de código sem compreender completamente seu funcionamento.

Algumas perguntas orientaram a criação do projeto:

- O que esse código faz?
- Quando e por que ele é executado?
- Qual é a responsabilidade de cada trecho?
- Como os elementos e as funções se relacionam?
- Como transformar a leitura do código em aprendizado?

O CodeStudy foi idealizado para apoiar esse processo de compreensão.

---

## 2. Objetivo

Desenvolver uma ferramenta que permita ao aluno inserir um trecho de código, solicitar uma análise com inteligência artificial e organizar o conteúdo estudado em um bloco de aprendizagem.

A proposta do MVP contempla o seguinte fluxo:

**Abrir bloco → Inserir código → Análise com IA → Quiz → Finalização**

A análise é estruturada em três partes:

- **Resumo:** apresenta a finalidade geral do código.
- **Explicação:** descreve o funcionamento e as responsabilidades dos trechos.
- **Fluxo:** apresenta a sequência lógica de execução.

O quiz, a persistência dos blocos e a exportação em PDF fazem parte da evolução planejada do projeto. O estágio de implementação de cada funcionalidade deve ser acompanhado no roadmap.

---

## 3. Tecnologias utilizadas

| Camada | Tecnologias |
|---|---|
| Frontend | HTML5, CSS3 e JavaScript |
| Backend | Node.js e Express |
| Inteligência artificial | Google Gemini API |
| Comunicação | HTTP, API REST e Fetch API |
| Configuração | dotenv e variáveis de ambiente |
| Versionamento | Git e GitHub |

O projeto utiliza o modelo `gemini-2.5-flash` para a análise de código.

---

## 4. Arquitetura

O CodeStudy foi organizado com separação de responsabilidades entre interface, servidor, integração com IA e documentação.

```text
CodeStudy/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   └── js/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── aiRoutes.js
│   ├── controllers/
│   │   └── aiController.js
│   └── .env
│
├── docs/
│
└── README.md
```

*Estrutura simplificada para apresentar os principais componentes do projeto.*

### Responsabilidades

**Frontend:** apresenta a interface, recebe as interações do aluno, controla as etapas do bloco e exibe os resultados.

**Backend:** recebe as requisições, valida os dados e realiza a comunicação com o serviço de inteligência artificial.

**Documentação:** registra o planejamento, as decisões, os desafios e os aprendizados de cada etapa.

### Fluxo de comunicação

```text
Aluno
  │
  ▼
Interface do CodeStudy
  │
  ▼
Requisição HTTP
  │
  ▼
Servidor Express
  │
  ▼
Rota de análise
  │
  ▼
Controller da IA
  │
  ▼
Gemini API
  │
  ▼
Resposta da análise
  │
  ▼
Interface do CodeStudy
```

A chave de acesso à API é armazenada no backend por meio de uma variável de ambiente, evitando sua exposição no código executado pelo navegador.

---

## 5. Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Uma chave de API do Google Gemini.
- Dependências do backend instaladas.

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
cd CodeStudy
```

Substitua `https://pabliciosousa49-lang.github.io/Page-DevClub-Study/` pelo endereço real do projeto no GitHub.

### 2. Instale as dependências

Acesse a pasta do backend:

```bash
cd backend
npm install
```

### 3. Configure a chave da API

Crie um arquivo chamado `.env` dentro da pasta `backend` e adicione:

```env
GEMINI_API_KEY=SUA_CHAVE_AQUI
```

Substitua `SUA_CHAVE_AQUI` pela sua chave de API.

**Importante:** não compartilhe sua chave e não envie o arquivo `.env` para o GitHub.

### 4. Inicie o servidor

Ainda dentro da pasta `backend`, execute:

```bash
node server.js
```

Quando o servidor iniciar corretamente, será exibida uma mensagem semelhante a:

```text
Servidor CodeStudy rodando na porta 3000
```

Mantenha esse terminal aberto enquanto utiliza a aplicação.

Para encerrar o servidor, pressione `Ctrl + C`.

### 5. Abra o frontend

Abra o arquivo `frontend/index.html` no navegador ou utilize um servidor local, conforme a configuração do projeto.

O backend deverá permanecer em execução para que a interface consiga solicitar análises à IA.

---

## 6. Metodologia de desenvolvimento

O CodeStudy foi desenvolvido por meio de um processo estruturado, com o objetivo de evitar a implementação de funcionalidades sem compreender suas responsabilidades.

### Planejamento inicial

```text
Problema
   ↓
Objetivo
   ↓
Definição do MVP
   ↓
Roadmap
   ↓
Arquitetura
   ↓
Desenvolvimento
```

Antes de iniciar a implementação, foram definidos o problema, o objetivo, as funcionalidades previstas e a organização inicial dos arquivos.

### Desenvolvimento em blocos

Cada funcionalidade é dividida em blocos menores, permitindo compreender, implementar e validar uma responsabilidade por vez.

O ciclo de trabalho utilizado é:

**Planejar → Implementar → Testar → Code Review → Refatorar → Commitar → Documentar**

Essa organização facilita a identificação de erros, o acompanhamento do progresso e a recuperação das decisões tomadas durante o desenvolvimento.

---

## 7. Metodologia de leitura de código JavaScript

Durante o desenvolvimento, organizei uma metodologia para compreender a responsabilidade dos trechos de JavaScript.

A leitura é orientada por seis categorias:

| Categoria | Responsabilidade |
|---|---|
| Observação | Compreender o comportamento esperado e identificar o que precisa ser implementado. |
| Seleção | Localizar os elementos e dados necessários. |
| Escuta | Identificar os eventos e as interações do usuário. |
| Processamento | Executar a lógica e preparar os dados. |
| Condição | Validar regras e determinar o fluxo de execução. |
| Atualização | Modificar dados, estados ou elementos da interface. |

Essa metodologia é utilizada como apoio para interpretar o código, organizar sua implementação e compreender como cada parte contribui para o funcionamento da aplicação.

**O objetivo não é apenas saber o que o código faz, mas compreender por que ele existe e qual responsabilidade exerce.**

---

## 8. Testes e validação

O processo de desenvolvimento inclui a validação das funcionalidades antes de sua integração completa.

Na implementação da API, o fluxo de testes foi organizado em etapas:

1. Iniciar o servidor Express.
2. Enviar uma requisição diretamente ao backend utilizando `curl`.
3. Verificar a resposta da rota de análise.
4. Integrar a comunicação com o frontend.
5. Validar o comportamento da aplicação pelo navegador e pelo Console.

Essa abordagem permite verificar separadamente o funcionamento do servidor, da rota, da integração com a IA e da interface.

---

## 9. Documentação e versionamento

A documentação faz parte do processo de desenvolvimento do CodeStudy.

Os registros são organizados por fases e blocos, contemplando três pontos principais:

**Objetivo:** o que foi planejado e implementado.

**Desafios:** quais dificuldades foram encontradas e como foram abordadas.

**Conclusão:** o que foi desenvolvido e aprendido durante a etapa.

O Git é utilizado para registrar as alterações por responsabilidade, facilitando o acompanhamento da evolução do projeto.

A documentação também permite revisar decisões técnicas e utilizar os aprendizados em novos projetos.

---

## 10. Roadmap

O desenvolvimento do CodeStudy foi dividido em fases:

| Fase | Objetivo |
|---|---|
| 1 — HTML | Construir a estrutura e o fluxo visual da aplicação. |
| 2 — CSS | Desenvolver a interface e os ajustes de responsividade. |
| 3 — API | Implementar o backend e a integração com a inteligência artificial. |
| 4 — Persistência | Organizar, armazenar e recuperar os dados dos blocos de estudo. |

Entre as funcionalidades previstas para a evolução do projeto estão a geração de quiz, o armazenamento dos blocos de estudo e a exportação de conteúdo em PDF.

O roadmap será atualizado conforme a implementação e a validação de cada funcionalidade.

---

## 11. Aprendizados

O desenvolvimento do CodeStudy proporcionou aprendizados em três áreas:

**Desenvolvimento técnico:** manipulação do DOM, eventos, organização de arquivos, requisições HTTP, backend com Express e integração com APIs.

**Engenharia de software:** definição de arquitetura, separação de responsabilidades, planejamento incremental, testes, revisão e documentação.

**Metodologia de aprendizagem:** criação de um processo para interpretar código, registrar decisões e compreender as relações entre os componentes de uma aplicação.

O projeto também reforçou a importância de utilizar a inteligência artificial como ferramenta de apoio ao aprendizado e ao desenvolvimento, mantendo a compreensão das decisões e do código implementado.

---

## 12. Conclusão

O CodeStudy nasceu da necessidade de transformar a leitura de código em um processo de compreensão e aprendizagem.

Durante seu desenvolvimento, o projeto também se tornou um ambiente para aplicar conceitos de arquitetura, integração com APIs, organização de funcionalidades, testes e documentação.

Mais do que construir uma ferramenta educacional, o objetivo foi desenvolver um processo de trabalho que permita compreender cada etapa da implementação e reutilizar os conhecimentos adquiridos em novos projetos.

---

## Autor

**José Pablicio Sousa Viana**

Desenvolvimento Front-End | Desenvolvimento de Software

Estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento Full-Stack e construção de aplicações web.

[LinkedIn](INSERIR_LINK_LINKEDIN) · [GitHub](INSERIR_LINK_GITHUB)