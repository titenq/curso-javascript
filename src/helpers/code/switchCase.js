const switchCase = {
  '01':
`const cor = 'amarelo';
let sinal;

switch (cor) {
  case 'verde':
    sinal = 'aberto';
    break;

  case 'amarelo':
    sinal = 'atenção';
    break;

  case 'vermelho':
    sinal = 'fechado';
    break;

  default:
    sinal = 'inexistente';
}

console.log(sinal); // atenção
`,

  '02':
`const cor = 'amarelo';
let sinal;

switch (cor) {
  case 'verde':
    sinal = 'aberto';

  case 'amarelo':
    sinal = 'atenção';

  case 'vermelho':
    sinal = 'fechado';

  default:
    sinal = 'inexistente';
}

console.log(sinal); // inexistente
`,

  '03':
`const dia = 'quinta-feira';
let diaUtil;

switch (dia) {
  case 'segunda-feira':
  case 'terça-feira':
  case 'quarta-feira':
  case 'quinta-feira':
  case 'sexta-feira':
    diaUtil = true;
    break;

  case 'sábado':
  case 'domingo':
    diaUtil = false;
    break;
}

console.log(diaUtil); // true
`,
};

export default switchCase;
