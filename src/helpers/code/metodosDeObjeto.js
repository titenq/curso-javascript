const metodosDeObjeto = {
  '01':
`const pessoa = {
  nome: 'Ana',
  idade: 28,
  cidade: 'Recife',
};

console.log(Object.keys(pessoa)); // ['nome', 'idade', 'cidade']
`,

  '02':
`const produto = {
  nome: 'Notebook',
  preco: 3500,
  estoque: 12,
};

console.log(Object.values(produto)); // ['Notebook', 3500, 12]
`,

  '03':
`const usuario = {
  nome: 'Carlos',
  idade: 31,
};

console.log(Object.entries(usuario));
// [['nome', 'Carlos'], ['idade', 31]]
`,

  '04':
`const carro = {
  marca: 'Ford',
  modelo: 'Ka',
};

console.log(carro.hasOwnProperty('marca')); // true
console.log(carro.hasOwnProperty('ano')); // false
`,

  '05':
`const configuracaoPadrao = {
  tema: 'claro',
  fonte: 'media',
};

const configuracaoUsuario = {
  tema: 'escuro',
};

const configuracaoFinal = Object.assign({}, configuracaoPadrao, configuracaoUsuario);

console.log(configuracaoFinal); // { tema: 'escuro', fonte: 'media' }
`,
};

export default metodosDeObjeto;
