const spreadERest = {
  '01':
`const numeros = [1, 2, 3];
const copia = [...numeros, 4, 5];

console.log(copia); // [1, 2, 3, 4, 5]
`,

  '02':
`const pessoa = {
  nome: 'João',
  idade: 30,
};

const pessoaAtualizada = {
  ...pessoa,
  cidade: 'São Paulo',
};

console.log(pessoaAtualizada);
`,

  '03':
`function somar(...numeros) {
  let total = 0;

  numeros.forEach(numero => {
    total += numero;
  });

  return total;
}

console.log(somar(10, 20, 30)); // 60
`,
};

export default spreadERest;
