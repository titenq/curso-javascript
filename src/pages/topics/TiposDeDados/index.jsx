import { Table } from 'react-bootstrap';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import tiposDeDados from '../../../helpers/code/tiposDeDados';
import Alerta from '../../../components/Alerta';

const TiposDeDados = () => {
  const content = (
    <>
      <Table style={{ maxWidth: "600px" }} striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Valores Primitivos:</th>
            <th>Valores de Referência:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>string</td>
            <td>array</td>
          </tr>
          <tr>
            <td>number</td>
            <td>function</td>
          </tr>
          <tr>
            <td>boolean</td>
            <td>object</td>
          </tr>
          <tr>
            <td>bigint</td>
            <td></td>
          </tr>
          <tr>
            <td>symbol</td>
            <td></td>
          </tr>
          <tr>
            <td>null</td>
            <td></td>
          </tr>
          <tr>
            <td>undefined</td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <h2 className={styles.subtitle}>Valores Primitivos:</h2>

      <h3 className={styles.subtitle}>string</h3>
      <p className={styles.p_container}>
        String é uma sequência de caracteres, como letras, números, caracteres especiais e espaços, que é usada para representar texto, esses caracteres devem estar entre aspas simples ( &apos; ) ou aspas duplas( &quot; ). Uma string pode ter somente um caractere ou até nenhum caractere, chamada de string vazia.
      </p>

      <Code codeString={tiposDeDados['01']} />

      <Alerta
        message="Note que a variável apartamento recebe o valor &apos;1002&apos; string, que é diferente do valor 1002 number, sempre que um número estiver entre aspas simples ou duplas ele é uma string. Uma dica de quando usar number ou string para representar números é o seguinte, se você não precisar fazer operações matemáticas com esse número, use string, se precisar, use number."
      />

      <h3 className={styles.subtitle}>number</h3>
      <p className={styles.p_container}>
        O number é um tipo de dado que representa valores numéricos, esses valores podem ser inteiro (números inteiros - int) ou de ponto flutuante (números decimais - float), positivos ou negativos.
      </p>

      <Code codeString={tiposDeDados['02']} />

      <Alerta
        message="Note que o separador de decimal utilizado no number é o ponto (.), no Brasil o separador de decimal utilizado é a vírgula (,), se for utilizado a vírgula no number será gerado um erro."
      />

      <p className={styles.p_container}>
        Ao utilizarmos números muito grandes a leitura e legibilidade pode ficar difícil, nesse caso podemos utilizar o <span className="fst-italic">underscore (_)</span> para facilitar a leitura. O uso de <span className="fst-italic">underscores</span> para separar grupos de dígitos em números longos ajuda a melhorar a legibilidade e compreensão, tornando números grandes mais fáceis de ler e interpretar.
      </p>

      <Code codeString={tiposDeDados['03']} />

      <p className={styles.p_container}>
        Existem outras formas, chamadas de notações, de representar um número em Javascript mas essas notações raramente são usadas, vamos utilizá-las somente para que você as conheça.
      </p>

      <Code codeString={tiposDeDados['04']} />

      <p className={styles.p_container}>
        No JavaScript e em muitas outras linguagens de programação, números de ponto flutuante (float), como 0.1 e 0.2, são representados internamente em binário. Isso significa que a representação exata desses números pode ser afetada por imprecisões de arredondamento na conversão de decimal para binário.
      </p>

      <Code codeString={tiposDeDados['05']} />

      <Alerta
        message="Note que 0.1 + 0.2 não retornou exatamente 0.3, nesses casos podemos utilizar um 'hack' onde multiplicamos cada número por 10 e dividimos o resultado por 10. Nesse caso usamos o 10 porque os números só têm uma casa decimal, se fosse 0.18 usaríamos 100 e assim por diante."
      />

      <Code codeString={tiposDeDados['06']} />

      <p className={styles.p_container}>
        O tipo number é limitado a 64 bits de precisão, portanto ele tem a propriedade &apos;MAX_SAFE_INTEGER&apos; (Máximo Inteiro Seguro) e a propriedade &apos;MIN_SAFE_INTEGER&apos; (Mínimo Inteiro Seguro) que são o maior inteiro positivo e o menor inteiro negativo respectivamente.
      </p>

      <Code codeString={tiposDeDados['07']} />

      <Alerta
        message="Note que podemos somar 1 ao number maior que o 'Máximo Inteiro Seguro' que o valor será o mesmo e que podemos subtrair 1 ao number menor que o 'Mínimo Inteiro Seguro' que o valor também será o mesmo."
      />

      <h3 className={styles.subtitle}>boolean</h3>
      <p className={styles.p_container}>
        O boolean é um tipo de dado que pode ter apenas dois valores: <span className="fst-italic">true (verdadeiro)</span> ou <span className="fst-italic">false (falso)</span>. Os booleanos são usados para representar valores verdadeiros ou falsos em lógica de programação, eles são frequentemente usados em estruturas condicionais e loops, para tomar decisões com base em condições.
      </p>

      <Code codeString={tiposDeDados['08']} />

      <Alerta
        message="Note que mesmo sendo um texto, true e false não recebem aspas e como o Javascript é case-sensitive se escrever True ou False vai gerar um erro."
      />

      <p className={styles.p_container}>
        Toda expressão de comparação retorna um boolean, nos próximos tópicos veremos sobre operadores de comparação mas vamos deixar alguns exemplos.
      </p>

      <Code codeString={tiposDeDados['09']} />

      <Alerta
        message="Sobre valores booleanos ainda veremos sobre truthy, que são valores avaliados como true no contexto booleano, e sobre falsy, que são valores avaliados com false no contexto booleano. Veremos mais sobre truthy e falsy no tópico sobre Estruturas Condicionais com if"
      />

      <h3 className={styles.subtitle}>bigint</h3>
      <p className={styles.p_container}>
        O bigint é um tipo de dado que representa números inteiros que podem ser muito grandes, maior do que o inteiro maior suportado pelo tipo int, no entanto podemos utilizar valores menores como bigint.
      </p>

      <p className={styles.p_container}>
        Para designar um valor inteiro como bigint é só incluir o caractere (n) no final do número inteiro.
      </p>

      <p className={styles.p_container}>
        Uma operação aritmética não pode ser realizada entre um bigint e um number, o que vai gerar um erro, mas podemos realizar operações de comparação entre um bigint e um number.
      </p>

      <Code codeString={tiposDeDados['10']} />

      <h3 className={styles.subtitle}>symbol</h3>
      <p className={styles.p_container}>
        O symbol é um tipo de dado que representa um valor único e imutável, cada symbol é único, o que significa que dois symbol nunca serão iguais, mesmo que tenham o mesmo valor.
      </p>

      <Code codeString={tiposDeDados['11']} />

      <Alerta
        message="O symbol raramente é usado, principalmente por iniciantes, portanto não precisa utilizar muito tempo para aprender sobre o symbol."
      />

      <h3 className={styles.subtitle}>null</h3>
      <p className={styles.p_container}>
        O null é um tipo de dado que representa a ausência de valor em uma variável. Quando uma variável é inicializada com null, isso indica que nenhum valor válido foi atribuído a ela.
      </p>

      <Code codeString={tiposDeDados['12']} />

      <h3 className={styles.subtitle}>undefined</h3>
      <p className={styles.p_container}>
        O undefined é um tipo de dado que representa uma variável que foi declarada, mas ainda não recebeu um valor.
      </p>

      <p className={styles.p_container}>
        Apesar de podermos atribuir explicitamente o valor undefined a uma variável, não é recomendado.
      </p>

      <Code codeString={tiposDeDados['13']} />

      <h2 className={styles.subtitle}>Valores de Referência:</h2>

      <p className={styles.p_container}>
        Antes de iniciarmos com os valores de referência vamos ver a diferença entre valores primitivos e valores de referência.
      </p>

      <p className={styles.p_container}>
        Ao criar uma variável com valores primitivos esse valor é gravado na memória do computador e o Javascript usa esse valor.
      </p>

      <p className={styles.p_container}>
        Ao criar uma variável com valores de referência esse valor também é gravado na memória do computador mas o Javascript não usa esse valor, usa a referência na memória desse valor, ou seja, usa o endereço de memória onde está esse valor.
      </p>

      <p className={styles.p_container}>
        Por exemplo, quando você copia uma variável que contém um objeto, você está, na verdade, copiando a referência para esse objeto, não o objeto em si. Qualquer alteração feita em uma cópia da variável refletirá a mesma mudança no objeto original, pois ambas fazem referência à mesma área de memória.
      </p>

      <Code codeString={tiposDeDados['14']} />

      <h3 className={styles.subtitle}>array</h3>
      <p className={styles.p_container}>
        Array é uma coleção de valores, ou seja, numa mesma variável você pode ter nenhum valor, um valor ou vários valores.
      </p>

      <p className={styles.p_container}>
        Esses valores devem estar entre colchetes ([ ]) separados por vírgula (,).
      </p>

      <p className={styles.p_container}>
        Para acessar um valor específico no array, é utilizado o nome da variável seguida de colchetes e dentro do colchete o índice desse valor, lembrando que o array em Javascript começa com o índice 0, portanto se quiser acessar o primeiro valor do array é utilizado array[0]. Se usarmos um indice que não existe será retornado undefined.
      </p>

      <Code codeString={tiposDeDados['15']} />

      <p className={styles.p_container}>
        No Javascript um array pode ter elementos de tipos diferentes, como number, string, objetos, funções, booleanos e até mesmo outros arrays. E como já dito acima, essa coleção pode ter nenhum, um ou muitos elementos.
      </p>

      <Code codeString={tiposDeDados['16']} />

      <p className={styles.p_container}>
        Para acessar um elemento dentro de um array de arrays é só usar a notação de colchetes para indicar primeiro o índice do array do elemento seguido de outro colchete para indicar o índice do elemento.
      </p>

      <Code codeString={tiposDeDados['17']} />

      <p className={styles.p_container}>
        Um array também pode ter elementos undefined, o que não precisa nem ser declarados, somente com o uso da vírgula (,) sem nenhum valor já é atribuído o valor undefined para aquele índice.
      </p>

      <Code codeString={tiposDeDados['18']} />

      <h3 className={styles.subtitle}>function</h3>
      <p className={styles.p_container}>
        Uma função em Javascript é um bloco de código reutilizável que realiza uma tarefa específica. As funções podem aceitar argumentos, realizar cálculos, executar ações e retornar valores. Elas são essenciais para organizar e reutilizar o código em seus programas.
      </p>

      <Code codeString={tiposDeDados['19']} />

      <p className={styles.p_container}>
        Vamos entender a sintaxe da função acima:
      </p>

      <p className={styles.p_container}>
        <b>function:</b> é uma palavra-chave em Javascript que indica o início da definição de uma função. Existem outras formas de definirmos uma função, o que veremos nos próximos tópicos.
      </p>

      <p className={styles.p_container}>
        <b>soma:</b> é o identificador da função, usamos a mesma regra para os identificadores de variável. Você pode escolher qualquer nome que seja descritivo e único para sua função.
      </p>

      <p className={styles.p_container}>
        <b>(num1, num2):</b> dentro dos parênteses, temos os parâmetros da função. Neste caso, a função aceita dois parâmetros: num1 e num2. Os parâmetros são como variáveis que a função pode usar, e eles representam os valores que você fornecerá quando invocar a função. Uma função também pode não ter nenhum parâmetro, nesse caso é utilizado os parênteses vazios ();
      </p>

      <p className={styles.p_container}>
        <b>{'{'} &nbsp; {'}'}:</b> as chaves delimitam o bloco de código da função, onde as ações da função são definidas.
      </p>

      <p className={styles.p_container}>
        <b>return:</b> é outra palavra-chave em Javascript usada para especificar o valor que a função deve retornar. O valor após o return é o resultado da função. Uma função também pode não retornar nada, ela faz alguma ação sem retorno, nesse caso ela retorna undefined implicitamente.
      </p>

      <p className={styles.p_container}>
        <b>num1 + num2:</b> dentro do return temos uma expressão que realiza a operação de adição entre os parâmetros num1 e num2.
      </p>

      <Alerta
        message="A definição de uma função somente cria a função, para utilizar a função ela tem que ser invocada, soma(8, 10). Na definição da função podemos criar os parâmetros, nesse exemplo, num1 e num2, e ao invocar a função passamos os argumentos, nesse exemplo, 8 e 10."
      />

      <h3 className={styles.subtitle}>object</h3>
      <p className={styles.p_container}>
        Objeto é um tipo de dado que pode armazenar várias informações relacionadas, essas informações são organizadas em pares (chave: valor), onde cada chave é uma propriedade do objeto, como se fosse uma variável dentro do objeto, que recebe um valor que pode ser qualquer tipo de dado, inclusive outro objeto. 
      </p>

      <p className={styles.p_container}>
        Para recuperar o valor de uma propriedade podemos usar a notação de colchetes ([ &nbsp; ]) ou a notação de ponto ( . ).
      </p>

      <Code codeString={tiposDeDados['20']} />

      <Alerta
        message="Note que na notação de colchetes passamos o nome da propriedade como uma string, entre aspas, e na notação de ponto passamos o nome da propriedade sem aspas, como se fosse uma variável."
      />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default TiposDeDados;
