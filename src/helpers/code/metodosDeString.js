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
};

export default metodosDeString;
