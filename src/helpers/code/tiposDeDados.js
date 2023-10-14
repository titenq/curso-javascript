const tiposDeDados = {
  '01': `
let nome = 'João'; // String com aspas simples
let profissao = "Desenvolvedor de Software"; // String com aspas duplas e espaços
let email = 'joao@email.com'; // String com caractere especial
let apartamento = '1002'; // String com número
let inicial = 'J'; // String com 1 caractere
let stringVazia = ''; // String vazia
`,

  '02': 
`let numeroInteiroPositivo = 10;
let numeroInteiroNegativo = -8;
let numeroDecimalPositivo = 3.19;
let numeroDecimalNegativo = -8.58;
`,

  '03': 
`let numeroGrande = 16000000;
let numeroGrandeComUnderscore = 16_000_000;
`,

  '04':
`// Escrito com um número seguido do caractere (e) seguido do número de zeros
const numeroExponencial = 16e6; 
const numeroHexadecimal = 0xC8; // Escrito com 0x seguido do número em hexadecimal
const numeroOctal = 0o310; // Escrito com 0o seguido do número octal
const numeroBinario = 0b11001000; // Escrito com 0b seguido do número binário

console.log(numeroExponencial); // 16000000
console.log(numeroHexadecimal); //200
console.log(numeroOctal); // 200
console.log(numeroBinario); // 200
`,

  '05':
`let numero1 = 0.1;
let numero2 = 0.2;

console.log(numero1 + numero2); // 0.30000000000000004
`,

  '06':
`let numero1 = 0.1;
let numero2 = 0.2;

console.log(numero1 + numero2); // 0.30000000000000004
console.log((numero1 * 10 + numero2 * 10) / 10); // 0.3

numero1 = 0.18;
numero2 = 0.13;

console.log((numero1 * 10 + numero2 * 10) / 10); // 0.30999999999999994
console.log((numero1 * 100 + numero2 * 100) / 100); // 0.31
`,

  '07':
`console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(9007199254740992 + 1); // 9007199254740992
console.log(-9007199254740992 - 1); // -9007199254740992
`,

  '08':
`let logado = true;
let desligado = false;
`,

  '09':
`let idade = 25;
console.log(idade >= 18); // true

idade = 14;
console.log(idade >= 18); // false
`,

  '10':
`let num1 = 9007199254740992n;

console.log(num1 + 1n); // 9007199254740993n
// console.log(num1 + 1); // Gera um erro

let bigInt1 = 1_000_000n;
let bigInt2 = 1_000_000_000n;
let number1 = 1_000_000_000;

console.log(bigInt1 > bigInt2); // false
console.log(bigInt1 > number1); // false
console.log(bigInt2 >= number1); // true
`,

  '11':
`const symbolNome = Symbol('nome');
const symbolNome1 = Symbol('nome');

console.log(symbolNome === symbolNome1); // false

const pessoa = {
  [symbolNome]: 'João',
  [symbolNome1]: 'Pedro'
}

console.log(pessoa[symbolNome]); // João
console.log(pessoa[symbolNome1]); // Pedro
`,

  '12':
`let telefone = null;

console.log(telefone); // null
`,

  '13':
`let email;
console.log(email); // undefined

let endereco = undefined; // Não é recomendado
console.log(endereco); // undefined
`,

  '14':
`let filme = 'Matrix';
let filme1 = filme;

console.log(filme); // Matrix
console.log(filme1); // Matrix

filme = 'Pulp Fiction';

console.log(filme); // Pulp Fiction
console.log(filme1); // Matrix

const filmes = ['Matrix', 'Pulp Fiction'];
const filmes1 = filmes;

console.log(filmes); // [ 'Matrix', 'Pulp Fiction' ]
console.log(filmes1); // [ 'Matrix', 'Pulp Fiction' ]

// Adicionando um filme no array filmes
filmes.push('Star Wars');

console.log(filmes); // [ 'Matrix', 'Pulp Fiction', 'Star Wars' ]
console.log(filmes1); // [ 'Matrix', 'Pulp Fiction', 'Star Wars' ]
`,

  '15':
`const cursos = ['HTML', 'CSS', 'Javascript'];
console.log(cursos); // [ 'HTML', 'CSS', 'Javascript' ]

console.log(cursos[0]); // HTML
console.log(cursos[2]); // Javascript
console.log(cursos[3]); // undefined
`,

  '16':
`const musicas = []; // Array com nenhum elemento
const alunos = ['Enzo']; // Array com 1 elemento
const tipos = ['string', 1, true, 5, [1, 2, 3]]; // Array com vários elementos diferentes
`,

  '17':
`const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/* 
Para acessar o número 6
primeiro acessamos o segundo array no índice 1
depois acessamos o terceiro elemento no índice 2
*/
console.log(numeros[1][2]); // 6
`,

  '18':
`const notas = [8, 7, , 5];

console.log(notas); // [ 8, 7, <1 empty item>, 5 ]
console.log(notas[2]); // undefined
`,
};

export default tiposDeDados;
