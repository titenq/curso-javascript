const forIn = {
  '01':
`const pessoa = {
  nome: 'João',
  idade: 32,
  email: 'joao@email.com'
};

for (const chave in pessoa) {
  console.log(\`\${chave}: \${pessoa[chave]}\`);
}
/* 
nome: João
idade: 32
email: joao@email.com
*/
`,

  '02':
`const frutas = ['pera', 'uva', 'maçã'];

for (const indice in frutas) {
  console.log(\`\${indice}: \${frutas[indice]}\`);
}
/* 
0: pera
1: uva
2: maçã
*/
`,
};

export default forIn;
