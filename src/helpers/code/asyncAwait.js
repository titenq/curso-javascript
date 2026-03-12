const asyncAwait = {
  '01':
`function buscarProduto() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Produto carregado');
    }, 1000);
  });
}

async function exibirProduto() {
  const resultado = await buscarProduto();

  console.log(resultado); // Produto carregado
}

exibirProduto();
`,

  '02':
`async function saudacao() {
  return 'Olá';
}

saudacao().then(mensagem => {
  console.log(mensagem); // Olá
});
`,

  '03':
`function buscarPedido() {
  return new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
      resolve('Pedido encontrado');
    } else {
      reject('Pedido não encontrado');
    }
  });
}

async function carregarPedido() {
  try {
    const pedido = await buscarPedido();
    console.log(pedido); // Pedido encontrado
  } catch (erro) {
    console.log(erro);
  }
}

carregarPedido();
`,

  '04':
`function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function executarEtapas() {
  await esperar(1000);
  console.log('Etapa 1');

  await esperar(1000);
  console.log('Etapa 2');
}

executarEtapas();
`,

  '05':
`async function carregarTudo() {
  const [usuario, cursos] = await Promise.all([
    fetch('/usuario').then(resposta => resposta.json()),
    fetch('/cursos').then(resposta => resposta.json()),
  ]);

  console.log(usuario, cursos);
}
`,
};

export default asyncAwait;
