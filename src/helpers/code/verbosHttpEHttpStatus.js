const verbosHttpEHttpStatus = {
  '01':
`fetch('/usuarios', {
  method: 'GET',
})
  .then(resposta => resposta.json())
  .then(usuarios => {
    console.log(usuarios);
  });
`,

  '02':
`fetch('/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Ana',
    email: 'ana@email.com',
  }),
});
`,

  '03':
`fetch('/usuarios/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Ana Silva',
    email: 'ana@email.com',
  }),
});
`,

  '04':
`fetch('/usuarios/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nome: 'Ana Silva',
  }),
});
`,

  '05':
`fetch('/usuarios/1', {
  method: 'DELETE',
});
`,

  '06':
`fetch('/usuarios/1')
  .then(resposta => {
    console.log(resposta.status); // 200
    console.log(resposta.ok); // true
  });
`,
};

export default verbosHttpEHttpStatus;
