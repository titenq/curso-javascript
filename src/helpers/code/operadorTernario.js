const operadorTernario = {
  '01':
`const idade = 18;

const mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';

console.log(mensagem); // Maior de idade
`,

  '02':
`const nota = 7;

console.log(nota >= 6 ? 'Aprovado' : 'Reprovado'); // Aprovado
`,

  '03':
`const usuarioLogado = true;

const textoBotao = usuarioLogado ? 'Sair' : 'Entrar';

console.log(textoBotao); // Sair
`,
};

export default operadorTernario;
