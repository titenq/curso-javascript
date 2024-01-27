const length = {
  '01':
`const numeros = [1, 2, 3, 4, 5];
const saudacao = 'Olá mundo!';

console.log(numeros.length); // 5
console.log(saudacao.length); // 10
`,

  '02':
`const numeros = [1, 2, 3];
numeros.length = 5;

console.log(numeros); // [ 1, 2, 3, undefined, undefined ]

numeros.length = 2;

console.log(numeros); // [ 1, 2 ]
`,
};

export default length;
