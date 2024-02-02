const metodosDeString = {
  '01':
`const nome = 'João da Silva';

console.log(nome.at(8)); // S
console.log(nome.at(-1)); // a
console.log(nome.at()); // J
console.log(nome.at(13)); // undefined
`,

  '02':
`const nome = 'João da Silva';

console.log(nome.charAt(8)); // S
console.log(nome.charAt(-1)); // ''
console.log(nome.charAt()); // J
console.log(nome.charAt(13)); // ''
`,

  '03':
`const nome = 'João da Silva';

console.log(nome.charCodeAt(8)); // 83
console.log(nome.charCodeAt(-1)); // NaN
console.log(nome.charCodeAt()); // 74
console.log(nome.charCodeAt(13)); // NaN
`,

  '04':
`const estrela = '★';
const emoji = '😂'; 

const estrelaCodePoint = estrela.codePointAt(0);
const emojiCodePoint = emoji.codePointAt(0);

console.log(estrelaCodePoint); // 9733
console.log(emojiCodePoint); // 128514
`,

  '05':
`const nome = 'João';
const sobrenome = 'Silva';

const nomeCompleto = nome.concat(sobrenome);
console.log(nomeCompleto); // JoãoSilva

const nomeCompletoComEspaco = nome.concat(' ', sobrenome);
console.log(nomeCompletoComEspaco); // João Silva
`,

  '06':
`const nome = 'João dos Santos';

const resultado1 = nome.endsWith('Santos');
console.log(resultado1);  // true

const resultado2 = nome.endsWith('Silva');
console.log(resultado2);  // false

const resultado3 = nome.endsWith('dos', 8);
console.log(resultado3); // true

const resultado4 = nome.endsWith('dos', 7);
console.log(resultado4); // false
`,

  '07':
`const codigo1 = 65;
const caractere = String.fromCharCode(codigo1);
console.log(caractere); // A

console.log(String.fromCharCode(66, 111, 109, 32, 100, 105, 97, 33));
// Bom dia!
`,

  '08':
`const char1 = String.fromCodePoint(65);
console.log(char1); // A

const emojiCode = 128514;
console.log(String.fromCodePoint(emojiCode)); // 😂
console.log(String.fromCharCode(emojiCode)); // 
`,

  '09':
`const stringOriginal = 'HTML, CSS, Javascript';
const stringProcurada = 'Javascript';

const busca1 = stringOriginal.includes(stringProcurada);
console.log(busca1); // true

const busca2 = stringOriginal.includes('Python');
console.log(busca2); // false

const busca3 = stringOriginal.includes(stringProcurada, 11);
console.log(busca3); // true

const busca4 = stringOriginal.includes(stringProcurada, 12);
console.log(busca4); // false

const busca5 = stringOriginal.includes('Java');
console.log(busca5); // true

const busca6 = stringOriginal.includes('javascript');
console.log(busca6); // false
`,

  '10':
`const nome = 'João da Silva';

console.log(nome.indexOf('Silva')); // 8
console.log(nome.indexOf('Silva', 8)); // 8
console.log(nome.indexOf('Silva', 9)); // -1
console.log(nome.indexOf('Santos')); // -1
`,

  '11':
`const string = 'string com tamanho 21';
console.log(string.indexOf('')); // 0
console.log(string.indexOf('', 1)); // 1
console.log(string.indexOf('', 10)); // 10
console.log(string.indexOf('', 20)); // 20
console.log(string.indexOf('', 21)); // 21
console.log(string.indexOf('', 30)); // 21
console.log(string.indexOf('', 50)); // 21
`,
};

export default metodosDeString;
