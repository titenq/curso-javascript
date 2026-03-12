const funcoes = {
  '01':
`function saudacao(nome) {
  return 'Olá, ' + nome + '!';
}

console.log(saudacao('Maria')); // Olá, Maria!
`,

  '02':
`function somar(num1, num2) {
  return num1 + num2;
}

const resultado = somar(10, 5);

console.log(resultado); // 15
`,

  '03':
`const multiplicar = function (num1, num2) {
  return num1 * num2;
};

console.log(multiplicar(3, 4)); // 12
`,

  '04':
`const exibirMensagem = (mensagem) => {
  console.log(mensagem);
};

exibirMensagem('Estudando funções'); // Estudando funções
`,
};

export default funcoes;
