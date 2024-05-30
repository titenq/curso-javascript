const string = 'string com tamanho 21';

console.log(string.lastIndexOf('')); // 21
console.log(string.lastIndexOf('', 1)); // 1
console.log(string.lastIndexOf('', 10)); // 10
console.log(string.lastIndexOf('', 20)); // 20
console.log(string.lastIndexOf('', 21)); // 21
console.log(string.lastIndexOf('', 30)); // 21
console.log(string.lastIndexOf('', 50)); // 21
