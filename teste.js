const numeros = [1, 2, 3];
numeros.length = 5;

console.log(numeros); // [ 1, 2, 3, undefined, undefined ]

numeros.length = 2;

console.log(numeros); // [ 1, 2 ]