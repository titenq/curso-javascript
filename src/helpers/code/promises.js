const promises = {
  '01':
`const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve('Operação concluída');
  } else {
    reject('Ocorreu um erro');
  }
});

promessa.then(resultado => {
  console.log(resultado); // Operação concluída
});
`,

  '02':
`const promessa = new Promise(resolve => {
  setTimeout(() => {
    resolve('Finalizada');
  }, 2000);
});

console.log(promessa); // Promise { <pending> }
`,

  '03':
`function buscarUsuario() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Usuário carregado');
    }, 1000);
  });
}

buscarUsuario().then(resultado => {
  console.log(resultado); // Usuário carregado
});
`,

  '04':
`function buscarDados() {
  return new Promise((resolve, reject) => {
    const sucesso = false;

    if (sucesso) {
      resolve('Dados carregados');
    } else {
      reject('Falha ao carregar os dados');
    }
  });
}

buscarDados()
  .then(resultado => {
    console.log(resultado);
  })
  .catch(erro => {
    console.log(erro); // Falha ao carregar os dados
  });
`,

  '05':
`Promise.resolve(10)
  .then(valor => valor * 2)
  .then(valor => valor + 5)
  .then(resultado => {
    console.log(resultado); // 25
  });
`,

  '06':
`const promessa1 = Promise.resolve('HTML');
const promessa2 = Promise.resolve('CSS');
const promessa3 = Promise.resolve('Javascript');

Promise.all([promessa1, promessa2, promessa3])
  .then(resultado => {
    console.log(resultado); // ['HTML', 'CSS', 'Javascript']
  });
`,
};

export default promises;
