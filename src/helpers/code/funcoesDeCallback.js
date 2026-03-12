const funcoesDeCallback = {
  '01':
`function saudacao(nome) {
  console.log('Olá, ' + nome + '!');
}

function executarCallback(callback) {
  callback('Maria');
}

executarCallback(saudacao); // Olá, Maria!
`,

  '02':
`function processarPedido(callback) {
  console.log('Preparando pedido...');
  callback();
}

processarPedido(function () {
  console.log('Pedido finalizado'); // Pedido finalizado
});
`,

  '03':
`const numeros = [1, 2, 3];

numeros.forEach(function (numero) {
  console.log(numero);
});
`,
};

export default funcoesDeCallback;
