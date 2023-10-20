const varLetConst = {
  '01':
`var numero = 5; // Declaração e atribuição inicial
console.log(numero); // 5

numero = 10; // Reatribuição
console.log(numero); // 10

let nome = 'Simone'; // Declaração e atribuição inicial
console.log(nome); // Simone

nome = 'Paula'; // Reatribuição
console.log(nome); // Paula

const pi = 3.14159265359;
pi = 4; // TypeError: Assignment to constant variable.
`,

  '02':
`console.log(nota);
// undefined
var nota = 8;

console.log(email);
// ReferenceError: Cannot access 'email' before initialization
let email = 'nome@email.com';

console.log(linguaguem);
// ReferenceError: Cannot access 'linguaguem' before initialization
const linguaguem = 'Javascript';
`,

  '03':
`function varEscopoFuncao() {
  if (true) {
    var varFuncao = 'variável var de função';

    console.log(varFuncao); // variável var de função
  }

  console.log(varFuncao); // variável var de função
}

varEscopoFuncao();

function letEscopoBloco() {
  if (true) {
    let letBloco = 'variável let de bloco';

    console.log(letBloco); // variável let de bloco
  }

  console.log(letBloco); // ReferenceError: letBloco is not defined
}

letEscopoBloco();
`,

  '04':
`let bebida = 'refrigerante';

function pegarBebida() {
  bebida = 'cerveja';

  console.log(bebida); // cerveja
}

pegarBebida();

console.log(bebida); // cerveja
`,
};

export default varLetConst;
