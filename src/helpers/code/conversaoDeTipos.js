const conversaoDeTipos = {
  '01':
`const idade = '18';

console.log(typeof idade); // string
console.log(typeof Number(idade)); // number
console.log(Number(idade) + 2); // 20
`,

  '02':
`const preco = 19.9;

console.log(typeof preco); // number
console.log(typeof String(preco)); // string
console.log(String(preco)); // "19.9"
`,

  '03':
`console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('Javascript')); // true
console.log(Boolean('')); // false
`,

  '04':
`console.log(Number('42')); // 42
console.log(Number('42.5')); // 42.5
console.log(Number('texto')); // NaN
`,

  '05':
`console.log(parseInt('42')); // 42
console.log(parseInt('42.9')); // 42
console.log(parseInt('101', 2)); // 5
`,

  '06':
`console.log(parseFloat('42.5')); // 42.5
console.log(parseFloat('10.99px')); // 10.99
console.log(parseFloat('texto')); // NaN
`,

  '07':
`console.log(+'15'); // 15
console.log(+'3.14'); // 3.14
console.log(+'texto'); // NaN
`,

  '08':
`console.log('1' + 1); // "11"
console.log(1 + '1'); // "11"
console.log('2' + 3 + 4); // "234"
console.log(2 + 3 + '4'); // "54"
`,

  '09':
`console.log('1' - 1); // 0
console.log('2' * 3); // 6
console.log('10' / 2); // 5
`,
};

export default conversaoDeTipos;
