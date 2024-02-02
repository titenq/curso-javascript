const templateStrings = {
  '01':
`const pessoa = {
  nome: 'Thomas',
  sobrenome: 'Anderson',
  apelido: 'Neo'
};

const apresentacao = 'Meu nome é ' + pessoa.nome + ' ' 
+ pessoa.sobrenome + ' e meu apelido é ' + pessoa.apelido + '.';
console.log(apresentacao);
// Meu nome é Thomas Anderson e meu apelido é Neo.

const apresentacao1 = \`Meu nome é \${pessoa.nome} \${pessoa.sobrenome} e meu apelido é \${pessoa.apelido}.\`;
console.log(apresentacao1);
// Meu nome é Thomas Anderson e meu apelido é Neo.

const pularLinha = 'Exibir \ntexto \npulando linha.';
console.log(pularLinha);
/* 
Exibir 
texto 
pulando linha.
*/

const pularLinha1 = \`Exibir
texto
pulando linha.\`;
console.log(pularLinha1);
/* 
Exibir 
texto 
pulando linha.
*/

const numero1 = 10;
const numero2 = 20;
console.log(\`A soma de \${numero1} + \${numero2} é \${numero1 + numero2}\`);
// A soma de 10 + 20 é 30
`,
};

export default templateStrings;
