# curso-javascript

![](https://img.shields.io/github/stars/titenq/curso-javascript.svg) ![](https://img.shields.io/github/forks/titenq/curso-javascript.svg) ![](https://img.shields.io/github/issues/titenq/curso-javascript.svg)

#### O **curso-javascript** é uma aplicação React criada para organizar conteúdos de estudo sobre JavaScript, desde os primeiros passos até temas modernos como `async/await`, `fetch`, `optional chaining` e manipulação do DOM.

## ✨ Funcionalidades

- 📚 Conteúdo separado por tópicos e categorias
- ⚡ Carregamento dinâmico das páginas com `lazy` e `Suspense`
- 🧭 Navegação com `react-router-dom`
- 🎨 Interface com React Bootstrap e CSS Modules
- 🔎 Exemplos práticos de sintaxe, operadores, arrays, objetos, DOM e APIs
- 📈 Integração com Google Analytics via variável de ambiente

## 🚀 Instalação

### Clone o repositório
```bash
git clone git@github.com:titenq/curso-javascript.git
cd curso-javascript
```

### Instale as dependências
```bash
npm install
```

### Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🛠 Como usar

### Ambiente de desenvolvimento
```bash
npm run dev
```

### Gerar build de produção
```bash
npm run build
```

### Visualizar o build localmente
```bash
npm run preview
```

### Rodar o lint
```bash
npm run lint
```

## 📚 Tópicos abordados

- Primeiros passos
- Fundamentos da linguagem
- Estruturas de decisão
- Estruturas de repetição
- Funções
- Arrays
- Objetos
- JavaScript moderno
- Strings
- DOM e navegador
- Dados e APIs
- Assincronicidade

## ⚙️ Tecnologias utilizadas

- React
- Vite
- React Router DOM
- React Bootstrap
- CSS Modules
- React Syntax Highlighter
- React GA4

## 📁 Estrutura do projeto

```bash
src/
├── components/
├── helpers/
├── hooks/
├── pages/
│   ├── Home/
│   ├── PageNotFound/
│   └── topics/
├── App.jsx
├── main.jsx
└── index.css
```

## Observações

- O projeto utiliza `import.meta.env.VITE_GA_MEASUREMENT_ID` para inicializar o Google Analytics.
- Se a variável não estiver definida, o Analytics não é inicializado.
