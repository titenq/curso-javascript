const dom = {
  '01':
`document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── div
            └── button
`,

  '02':
`const titulo = document.querySelector('h1');

console.log(titulo);
`,

  '03':
`const paragrafos = document.querySelectorAll('p');

console.log(paragrafos.length);
`,

  '04':
`const botao = document.getElementById('meu-botao');

botao.textContent = 'Clique aqui';
`,

  '05':
`const caixa = document.querySelector('.caixa');

caixa.classList.add('ativo');
caixa.style.backgroundColor = 'yellow';
`,

  '06':
`const lista = document.querySelector('ul');
const item = document.createElement('li');

item.textContent = 'Novo item';
lista.appendChild(item);
`,
};

export default dom;
