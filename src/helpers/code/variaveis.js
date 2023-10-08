const variaveis01 = 
`let saudacao = 'Olá Mundo';
`;

const variaveis02 = 
`let melhorFilme;

melhorFilme = 'Matrix';

console.log(melhorFilme); // Matrix

melhorFilme = 'Pulp Fiction';

console.log(melhorFilme); // Pulp Fiction
`;

const variaveis03 = 
`let 1nota = 10; // Gera um erro
let nota maior = 10; // Gera um erro

let _nota = 10; // Não gera erro
let $nota = 10; // Não gera erro
`;

const variaveis04 = 
`let notaMaior = 10;
let notamaior = 9;

console.log(notaMaior); // 10
console.log(notamaior); // 9
`;

const variaveis05 = 
`let notaMaiorDoAlunoJoao = 8;
`;

const variaveis06 = 
`let notaMaiorDoAlunoJoao = 8; // camelCase
let NotaMaiorDoAlunoJoao = 8; // PascalCase
let nota_maior_do_aluno_joao = 8; // snake_case
`;

export {
  variaveis01,
  variaveis02,
  variaveis03,
  variaveis04,
  variaveis05,
  variaveis06,
};
