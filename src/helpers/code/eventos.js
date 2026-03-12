const eventos = {
  '01':
`const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  console.log('Botão clicado');
});
`,

  '02':
`const input = document.querySelector('input');

input.addEventListener('input', event => {
  console.log(event.target.value);
});
`,

  '03':
`document.addEventListener('keydown', event => {
  console.log(event.key);
});
`,

  '04':
`const formulario = document.querySelector('form');

formulario.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Formulário interceptado');
});
`,

  '05':
`const lista = document.querySelector('ul');

lista.addEventListener('click', event => {
  console.log(event.target);
});
`,
};

export default eventos;
