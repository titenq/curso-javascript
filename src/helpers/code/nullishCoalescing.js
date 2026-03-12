const nullishCoalescing = {
  '01':
`const nome = null;
const nomeFinal = nome ?? 'Visitante';

console.log(nomeFinal); // Visitante
`,

  '02':
`const quantidade = 0;

console.log(quantidade || 10); // 10
console.log(quantidade ?? 10); // 0
`,

  '03':
`const texto = '';

console.log(texto || 'Padrão'); // Padrão
console.log(texto ?? 'Padrão'); // ''
`,
};

export default nullishCoalescing;
