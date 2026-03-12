const fetchApi = {
  '01':
`fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados.name);
  });
`,

  '02':
`async function buscarUsuario() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const dados = await resposta.json();

  console.log(dados.email);
}

buscarUsuario();
`,

  '03':
`fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Meu post',
    body: 'Conteúdo do post',
  }),
});
`,
};

export default fetchApi;
