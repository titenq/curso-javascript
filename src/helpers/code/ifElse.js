const ifElse = {
  '01':
`if (condicao) {
  // Código a ser executado se a condição for verdadeira
}
`,

  '02':
`const idade = 20;

if (idade >= 18) {
  console.log('Maior de idade'); // Maior de idade
}
`,

  '03':
`const idade = 16;

if (idade >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade'); // Menor de idade
}
`,

  '04':
`const nota = 70;

if (nota >= 90) {
  console.log('Aprovado: Nota A');
} else if (nota >= 80) {
  console.log('Aprovado: Nota B');
} else if (nota >= 70) {
  console.log('Aprovado: Nota C'); // Aprovado: Nota C
} else {
  console.log('Reprovado: Nota D');
}
`,

  '05':
`const idade = 20;
const cnh = true;

if (idade >= 18 && cnh === true) {
  console.log('Pode dirigir'); // Pode dirigir
} else {
  console.log('Não pode dirigir');
}
`,

  '06':
`const idadePedro = 25;
const cnhPedro = false;

if (idadePedro >= 18 && cnhPedro) {
  console.log('Pedro pode dirigir');
} else {
  console.log('Pedro não pode dirigir'); // Pedro não pode dirigir
}

console.log(cnhPedro); // false
console.log(!cnhPedro); // true
`,

  '07':
`let colocacao = 2;

if (colocacao = 1) {
  console.log('Você ganhou'); // Você ganhou
} else {
  console.log('Obrigado pela participação');
}

let colocacao1 = 2;

if (colocacao1 === 1) {
  console.log('Você ganhou');
} else {
  console.log('Obrigado pela participação'); // Obrigado pela participação
}
`,

  '08':
`const hora = 15;

if (hora === 12 || 13) {
  console.log('Hora do almoço'); // Hora do almoço
} else {
  console.log('Não é hora do almoço');
}

if (hora === 12 || hora === 13) {
  console.log('Hora do almoço');
} else {
  console.log('Não é hora do almoço'); // Não é hora do almoço
}
`,
};

export default ifElse;
