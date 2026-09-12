# CodeStudy — MVP

Aplicação de estudo para ajudar alunos a compreender trechos de código por meio de análise com IA e quiz.

## Fluxo do MVP

Abrir Bloco → Informar tema e linguagem → Inserir código → IA analisa → Resumo e explicação → Gerar Quiz → 20 perguntas → Salvar bloco → Exportar resumo em PDF

## Roadmap

1. HTML — construir o fluxo visual
2. CSS — estilizar e tornar responsivo
3. JavaScript — DOM, eventos e troca entre etapas
4. Objeto Bloco — organizar os dados
5. API — backend mínimo + integração com IA
6. Quiz — apresentar as 20 perguntas
7. LocalStorage — salvar blocos
8. PDF — exportar resumo
9. Code Review — refatoração e documentação

## Arquitetura

- `index.html` → estrutura da aplicação
- `css/style.css` → estilos
- `js/app.js` → fluxo principal, DOM e eventos
- `js/api.js` → comunicação frontend/backend
- `js/quiz.js` → funcionamento do quiz
- `js/storage.js` → persistência local
- `backend/server.js` → servidor
- `backend/routes/` → rotas da API
- `backend/controllers/` → processamento das requisições de IA

## Status

**Fase atual: 1 — HTML**
