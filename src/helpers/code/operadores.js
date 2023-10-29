const operadores = {
  '01':
`const num1 = 3;
const num2 = 2;

const adicao = num1 + num2;
console.log(adicao); // 5

const subtracao = num1 - num2;
console.log(subtracao); // 1

const multiplicacao = num1 * num2;
console.log(multiplicacao); // 6

const divisao = num1 / num2;
console.log(divisao); // 1.5

const modulo = num1 % num2;
console.log(modulo); // 1

const exponenciacao = num1 ** num2;
console.log(exponenciacao); // 9
`,

  '02':
`const calculo1 = 1 + 2 * 3;
console.log(calculo1); // 7

const calculo2 = (1 + 2) * 3;
console.log(calculo2); // 9

const calculo3 = 2 * 3 ** 2;
console.log(calculo3); // 18

const calculo4 = (2 * 3) ** 2;
console.log(calculo4); // 36

const calculo5 = 2 + 3 % 2;
console.log(calculo5); // 3

const calculo6 = (2 + 3) % 2;
console.log(calculo6); // 1
`,

  '03':
`let numero1 = 2;
console.log(numero1); // 2

let numero2 = 4;
let numero3 = 4;
let numero4 = 4;
let numero5 = 4;
let numero6 = 4;
let numero7 = 4;

numero2 += numero1;
// Igual a numero2 = numero2 + numero1 que é igual a numero2 = 4 + 2 que é igual a 6
console.log(numero2); // 6

numero3 -= numero1;
// Igual a numero3 = numero3 - numero1 que é igual a numero3 = 4 - 2 que é igual a 2
console.log(numero3); // 2

numero4 *= numero1; 
// Igual a numero4 = numero4 * numero1 que é igual a numero4 = 4 * 2 que é igual a 8
console.log(numero4); // 8

numero5 /= numero1; 
// Igual a numero5 = numero5 / numero1 que é igual a numero5 = 4 / 2 que é igual a 2
console.log(numero5); // 2

numero6 %= numero1; 
// Igual a numero6 = numero6 % numero1 que é igual a numero6 = 4 % 2 que é igual a 0
console.log(numero6); // 0

numero7 **= numero1; 
// Igual a numero7 = numero7 ** numero1 que é igual a numero7 = 4 ** 2 que é igual a 16
console.log(numero7); // 16
`,

  '04':
`const num1 = 10;
const num2 = 20;
const num3 = '10';

console.log(num1 == num2); // false
console.log(num1 == num3); // true

console.log(num1 === num2); // false
console.log(num1 === num3); // false

console.log(num1 != num2); // true
console.log(num1 != num3); // false

console.log(num1 !== num2); // true
console.log(num1 !== num3); // true

console.log(num1 < num2); // true

console.log(num1 > num2); // false

console.log(num1 <= num2); // true

console.log(num1 >= num2); // false
`,

  '05':
`const matriculado = true;
const pago = false;

console.log(matriculado && pago); // false
console.log(matriculado || pago); // true
console.log(!matriculado); // false

const nota = 0;

console.log(nota || 'Não realizou a prova.'); // Não realizou a prova.
console.log(nota ?? 'Não realizou a prova.'); // 0

const frase = '';

console.log(frase || 'Não escreveu a frase.'); // Não escreveu a frase.
console.log(frase ?? 'Não escreveu a frase.'); // ''
`,

  '06':
`let numero = 10;
let numeroPreIncremento = ++numero;

console.log(numeroPreIncremento); // 11
console.log(numero); // 11

let numero1 = 10;
let numero1PosIncremento = numero1++;

console.log(numero1PosIncremento); // 10
console.log(numero1); // 11

let numero2 = 10;
let numeroPreDecremento = --numero2;

console.log(numeroPreDecremento); // 9
console.log(numero2); // 9

let numero3 = 10;
let numeroPosDecremento = numero3--;

console.log(numeroPosDecremento); // 10
console.log(numero3); // 9
`,

  '07':
`const nome = 'Thomas';
const sobrenome = 'Anderson';

let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto); // ThomasAnderson

nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto); // Thomas Anderson
`,

  '08':
`const num1 = 5;  // Converte 5 em binário: 0101
const num2 = 3;  // Converte 3 em binário: 0011

const resultadoAnd = num1 & num2;  // 1
/* 
Primeiro binário a direita do 5: 1
Primeiro binário a direita do 3: 1
1 && 1 = true && true = true = 1
Primeiro binário a direita do resultadoAnd: 1

Segundo binário a direita do 5: 0
Segundo binário a direita do 3: 1
0 && 1 = false && true = false = 0
Segundo binário a direita do resultadoAnd: 0

Terceiro binário a direita do 5: 1
Terceiro binário a direita do 3: 0
1 && 0 = true && false = false = 0
Terceiro binário a direita do resultadoAnd: 0

Quarto binário a direita do 5: 0
Quarto binário a direita do 3: 0
0 && 0 = false && false = false = 0
Quarto binário a direita do resultadoAnd: 0

Binário do resultadoAnd: 0001 = 1
*/

console.log(resultadoAnd); // 1

const resultadoOr = num1 | num2;  // 0111

console.log(resultadoOr); // 7

const resultadoXor = num1 ^ num2;  // 0110

console.log(resultadoXor); // 6

const resultadoNot = ~num1;

console.log(resultadoNot); // -6

const resultadoLeftShift = num1 << 2;

console.log(resultadoLeftShift); // 20

const resultadoRightShift = num1 >> 2;

console.log(resultadoRightShift); // 1
`,

  '09':
`// estruturaCondicional ? valorSeVerdadeiro : valorSeFalso
// Se a estruturaCondicional for true retorna valorSeVerdadeiro senão retorna valorSeFalso
const idadeJoao = 20;
const maioridadeJoao = idadeJoao >= 18 ? 'Maior de idade' : 'Menor de idade';

console.log(maioridadeJoao); // Maior de idade

const idadePedro = 16;
const maioridadePedro = idadePedro >= 18 ? 'Maior de idade' : 'Menor de idade';

console.log(maioridadePedro); // Menor de idade
`,

  '10':
`const escolhido = {
  nome: 'Thomas',
  sobrenome: 'Anderson',
  apelido: 'Neo'
};

console.log(escolhido.apelido); // Neo
console.log(escolhido['nome']); // Thomas
console.log(escolhido.email); // undefined
console.log(escolhido['idade']); // undefined

// console.log(escolhido.email.toLowerCase());
// TypeError: Cannot read properties of undefined (reading 'toLowerCase')

console.log(escolhido.email?.toLowercase()); // undefined
`,

  '11':
`let num1 = 5, num2 = 10;

console.log(num1); // 5
console.log(num2); // 10

let num3 = 1, num4 = 2;
num3++, num4--;

console.log(num3); // 2
console.log(num4); // 1

let num5, num6, num7;

num7 = (num5 = 5, num6 = 10);

console.log(num5); // 5
console.log(num6); // 10
console.log(num7); // 10

let resultado = (5, 10 + 20);

console.log(resultado); // 30
`,

  '12':
`console.log(typeof 192); // number
console.log(typeof 'Olá, mundo!'); // string
console.log(typeof true); // boolean
console.log(typeof null); // object

class Carro {
  constructor(marca, cor) {
    this.marca = marca;
    this.cor = cor;
  }
}

const meuCarro = new Carro('Brasília', 'amarela');

console.log(meuCarro instanceof Carro); // true

const pessoa = { nome: 'José', idade: 28 };
delete pessoa.idade;

console.log(pessoa); // { nome: 'José' }

const numeros = [1, 2, 3, 4, 5];
delete numeros[2];

console.log(numeros); // [ 1, 2, <1 empty item>, 4, 5 ]
console.log(numeros[2]); // undefined
`,
};

export default operadores;
