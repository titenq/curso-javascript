const string = 'string com tamanho 21';
console.log(string.indexOf('')); // 0
console.log(string.indexOf('', 1)); // 1
console.log(string.indexOf('', 10)); // 10
console.log(string.indexOf('', 20)); // 20
console.log(string.indexOf('', 21)); // 21
console.log(string.indexOf('', 30)); // 21
console.log(string.indexOf('', 50)); // 21
