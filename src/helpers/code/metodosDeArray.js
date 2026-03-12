const metodosDeArray = {
  '01':
`const frutas = ['Maçã', 'Banana'];

frutas.push('Uva');

console.log(frutas); // ['Maçã', 'Banana', 'Uva']
`,

  '02':
`const tarefas = ['Estudar', 'Praticar', 'Revisar'];

const ultimaTarefa = tarefas.pop();

console.log(ultimaTarefa); // Revisar
console.log(tarefas); // ['Estudar', 'Praticar']
`,

  '03':
`const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados); // [2, 4, 6, 8]
`,

  '04':
`const idades = [12, 18, 25, 15];
const maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade); // [18, 25]
`,
};

export default metodosDeArray;
