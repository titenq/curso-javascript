const localStorageCode = {
  '01':
`localStorage.setItem('tema', 'escuro');

console.log(localStorage.getItem('tema')); // escuro
`,

  '02':
`const usuario = {
  nome: 'Ana',
  idade: 28,
};

localStorage.setItem('usuario', JSON.stringify(usuario));
`,

  '03':
`const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

console.log(usuarioSalvo.nome); // Ana
`,
};

export default localStorageCode;
