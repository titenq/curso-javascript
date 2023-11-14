const doWhile = {
  '01':
`let contador = 1;

while (contador <= 5) {
  console.log('Contador: ' + contador);

  contador++;
}

/* 
Contador: 1
Contador: 2
Contador: 3
Contador: 4
Contador: 5
*/
`,

  '02':
`let contador = 1;

do {
  console.log('Contador: ' + contador);

  contador++;
} while (contador <= 5);

/* 
Contador: 1
Contador: 2
Contador: 3
Contador: 4
Contador: 5
*/
`,

  '03':
`let contador = 6;

while (contador <= 5) {
  console.log('Contador: ' + contador);

  contador++;
}
// Não imprime nada pois a condição é false

do {
  console.log('Contador: ' + contador);

  contador++;
} while (contador <= 5);
// Contador: 6
`,
};

export default doWhile;
