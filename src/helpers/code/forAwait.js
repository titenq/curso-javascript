const forAwait = {
  '01':
`async function* gerarNumeros() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

async function exibirNumeros() {
  for await (const numero of gerarNumeros()) {
    console.log(numero);
  }
}

exibirNumeros();
`,

  '02':
`const promessas = [
  Promise.resolve('HTML'),
  Promise.resolve('CSS'),
  Promise.resolve('Javascript'),
];

async function exibirCursos() {
  for await (const curso of promessas) {
    console.log(curso);
  }
}

exibirCursos();
`,

  '03':
`async function* buscarPaginas() {
  yield fetch('/pagina-1').then(resposta => resposta.json());
  yield fetch('/pagina-2').then(resposta => resposta.json());
}

async function processarPaginas() {
  for await (const pagina of buscarPaginas()) {
    console.log(pagina);
  }
}
`,
};

export default forAwait;
