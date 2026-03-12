const optionalChaining = {
  '01':
`const usuario = {
  nome: 'Ana',
  endereco: {
    cidade: 'Recife',
  },
};

console.log(usuario.endereco?.cidade); // Recife
console.log(usuario.contato?.telefone); // undefined
`,

  '02':
`const pedido = null;

console.log(pedido?.cliente?.nome); // undefined
`,

  '03':
`const config = {
  onError: null,
};

console.log(config.onError?.()); // undefined
`,
};

export default optionalChaining;
