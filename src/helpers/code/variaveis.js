const variaveis = {
  '01':
`let saudacao = 'Olá Mundo';
`,

  '02':
`let melhorFilme;

melhorFilme = 'Matrix';

console.log(melhorFilme); // Matrix

melhorFilme = 'Pulp Fiction';

console.log(melhorFilme); // Pulp Fiction
`,

  '03':
`let 1nota = 10; // Gera um erro
let nota maior = 10; // Gera um erro

let _nota = 10; // Não gera erro
let $nota = 10; // Não gera erro
`,

  '04':
`let notaMaior = 10;
let notamaior = 9;

console.log(notaMaior); // 10
console.log(notamaior); // 9
`,

  '05':
`let notaMaiorDoAlunoJoao = 8;
`,

  '06':
`let notaMaiorDoAlunoJoao = 8; // camelCase
let NotaMaiorDoAlunoJoao = 8; // PascalCase
let nota_maior_do_aluno_joao = 8; // snake_case
`
};

export default variaveis;
