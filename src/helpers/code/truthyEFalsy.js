const truthyEFalsy = {
  '01':
`if ('Olá') {
  console.log('String com conteúdo é truthy'); // String com conteúdo é truthy
}

if (10) {
  console.log('Número diferente de zero é truthy'); // Número diferente de zero é truthy
}
`,

  '02':
`if (0) {
  console.log('Este bloco não será executado');
}

if ('') {
  console.log('Este bloco também não será executado');
}

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
`,

  '03':
`const nome = '';
const nomePadrao = nome || 'Visitante';

console.log(nomePadrao); // Visitante
`,
};

export default truthyEFalsy;
