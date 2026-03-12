const json = {
  '01':
`const pessoa = {
  nome: 'Ana',
  idade: 28,
};

const pessoaJson = JSON.stringify(pessoa);

console.log(pessoaJson); // {"nome":"Ana","idade":28}
console.log(typeof pessoaJson); // string
`,

  '02':
`const usuarioJson = '{"nome":"Carlos","ativo":true}';
const usuario = JSON.parse(usuarioJson);

console.log(usuario.nome); // Carlos
console.log(typeof usuario); // object
`,

  '03':
`const lista = [
  { nome: 'HTML' },
  { nome: 'CSS' },
  { nome: 'Javascript' },
];

console.log(JSON.stringify(lista));
`,
};

export default json;
