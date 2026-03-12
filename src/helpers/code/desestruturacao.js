const desestruturacao = {
  '01':
`const pessoa = {
  nome: 'Ana',
  idade: 28,
};

const { nome, idade } = pessoa;

console.log(nome); // Ana
console.log(idade); // 28
`,

  '02':
`const cores = ['Azul', 'Verde', 'Amarelo'];

const [primeiraCor, segundaCor] = cores;

console.log(primeiraCor); // Azul
console.log(segundaCor); // Verde
`,

  '03':
`const produto = {
  titulo: 'Notebook',
  preco: 3500,
};

const { titulo, preco: valor } = produto;

console.log(titulo); // Notebook
console.log(valor); // 3500
`,
};

export default desestruturacao;
