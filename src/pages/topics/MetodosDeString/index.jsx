import { useRef } from 'react';

import { Table } from 'react-bootstrap';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import scrollToRef from '../../../helpers/scrollToRef';
import metodosString from '../../../helpers/metodosString';
import TdRef from '../../../components/TdRef/index';
import Code from '../../../components/Code';
import metodosDeString from '../../../helpers/code/metodosDeString';
import Alerta from '../../../components/Alerta';

const MetodosDeString = () => {
  const atRef = useRef(null);
  const charAtRef = useRef(null);
  const charCodeAtRef = useRef(null);
  const codePointAtRef = useRef(null);
  const concatRef = useRef(null);
  const endsWithRef = useRef(null);
  const fromCharCodeRef = useRef(null);
  const fromCodePointRef = useRef(null);
  const includesRef = useRef(null);
  const indexOfRef = useRef(null);
  const lastIndexOfRef = useRef(null);
  const localeCompareRef = useRef(null);
  const matchRef = useRef(null);
  const matchAllRef = useRef(null);
  const normalizeRef = useRef(null);
  const padEndRef = useRef(null);
  const padStartRef = useRef(null);
  const rawRef = useRef(null);
  const repeatRef = useRef(null);
  const replaceRef = useRef(null);
  const replaceAllRef = useRef(null);
  const searchRef = useRef(null);
  const sliceRef = useRef(null);
  const splitRef = useRef(null);
  const startsWithRef = useRef(null);
  const substringRef = useRef(null);
  const toLocaleLowerCaseRef = useRef(null);
  const toLocaleUpperCaseRef = useRef(null);
  const toLowerCaseRef = useRef(null);
  const toStringRef = useRef(null);
  const toUpperCaseRef = useRef(null);
  const trimRef = useRef(null);
  const trimEndRef = useRef(null);
  const trimStartRef = useRef(null);
  const valueOfRef = useRef(null);

  const refs = {
    atRef,
    charAtRef,
    charCodeAtRef,
    codePointAtRef,
    concatRef,
    endsWithRef,
    fromCharCodeRef,
    fromCodePointRef,
    includesRef,
    indexOfRef,
    lastIndexOfRef,
    localeCompareRef,
    matchRef,
    matchAllRef,
    normalizeRef,
    padEndRef,
    padStartRef,
    rawRef,
    repeatRef,
    replaceRef,
    replaceAllRef,
    searchRef,
    sliceRef,
    splitRef,
    startsWithRef,
    substringRef,
    toLocaleLowerCaseRef,
    toLocaleUpperCaseRef,
    toLowerCaseRef,
    toStringRef,
    toUpperCaseRef,
    trimRef,
    trimEndRef,
    trimStartRef,
    valueOfRef
  };

  const content = (
    <>
      <p className={styles.p_container}>
        Os métodos de <span className={styles.code}>string</span> facilitam a manipulação e o processamento da mesma, podendo retornar uma nova <span className={styles.code}>string</span> ou retornar outros tipos de dados.
      </p>

      <Alerta
        message="Não perca tempo tentando gravar todos os métodos, se concentre em saber que eles existem e para que servem e estude por demanda, ou seja, quando precisar de uma solução que precise de um desses métodos, você pesquisa por eles."
      />

      <div style={
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          overflowX: "auto"
        }
      }>
        <Table style={{ maxWidth: "600px" }} striped bordered hover size="sm" variant="dark">
          <tbody>
            {metodosString.map((item, index) => (
              index % 5 === 0 ? (
                <tr key={`row-${index / 5}`}>
                  {[...Array(5)].map((_, innerIndex) => (
                    <TdRef
                      key={metodosString[index + innerIndex].text}
                      tdText={metodosString[index + innerIndex].text}
                      tdRef={refs[metodosString[index + innerIndex].ref]}
                      tdScroll={scrollToRef}
                    />
                  ))}
                </tr>
              ) : null
            ))}
          </tbody>
        </Table>
      </div>

      <h3 className={styles.subtitle} ref={atRef}>at()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>at()</span> recebe como argumento um número inteiro, positivo ou negativo, e retorna o caractere que está nesse índice na <span className={styles.code}>string</span>, se o número for negativo, o índice começa a ser contado do final da <span className={styles.code}>string</span> para o começo.
      </p>

      <p className={styles.p_container}>
        Se não for passado nenhum argumento para o <span className={styles.code}>at()</span> o valor padrão será 0 e se for passado como argumento um índice inexistente será retornado <span className={styles.code}>undefined</span>.
      </p>

      <Code codeString={metodosDeString["01"]} />

      <h3 className={styles.subtitle} ref={charAtRef}>charAt()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>charAt()</span> recebe como argumento um número inteiro, de <span className={styles.code}>0 a string.length - 1</span>, e retorna o caractere que está nesse índice na <span className={styles.code}>string</span>.
      </p>

      <p className={styles.p_container}>
        Se não for passado nenhum argumento para o <span className={styles.code}>charAt()</span> o valor padrão será 0 e se for passado como argumento um índice inexistente será retornado uma <span className={styles.code}>sting</span> vazia.
      </p>

      <Code codeString={metodosDeString["01"]} />

      <h3 className={styles.subtitle} ref={charCodeAtRef}>charCodeAt()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>charCodeAt()</span> recebe como argumento um número inteiro, de <span className={styles.code}>0 a string.length - 1</span>, e retorna um número inteiro entre 0 e 65535 que representa a unidade de código <span className={styles.code}>UTF-16</span> desse caractere.
      </p>

      <p className={styles.p_container}>
        Se não for passado nenhum argumento para o <span className={styles.code}>charCodeAt()</span> o valor padrão será 0 e se for passado como argumento um índice inexistente será retornado <span className={styles.code}>NaN</span>.
      </p>

      <Code codeString={metodosDeString["03"]} />

      <Alerta
        message="O charCodeAt() raramente é usado, principalmente por iniciantes, portanto não precisa utilizar muito tempo para aprendê-lo."
      />

      <h3 className={styles.subtitle} ref={codePointAtRef}>codePointAt()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>codePointAt()</span> recebe como argumento um número inteiro, de <span className={styles.code}>0 a string.length - 1</span>, e retorna um número inteiro entre 0 e 65535 que representa a unidade de código <span className={styles.code}>UTF-16</span> desse caractere.
      </p>

      <p className={styles.p_container}>
        Se não for passado nenhum argumento para o <span className={styles.code}>codePointAt()</span> o valor padrão será 0 e se for passado como argumento um índice inexistente será retornado <span className={styles.code}>NaN</span>.
      </p>

      <Code codeString={metodosDeString["04"]} />

      <Alerta
        message="O codePointAt() raramente é usado, principalmente por iniciantes, portanto não precisa utilizar muito tempo para aprendê-lo."
      />

      <h3 className={styles.subtitle} ref={concatRef}>concat()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>concat()</span> combina, junta, concatena, uma ou mais <span className={styles.code}>strings</span>, e retorna uma nova <span className={styles.code}>string</span> concatenada.
      </p>

      <Code codeString={metodosDeString["05"]} />

      <Alerta
        message="O concat() tem uma performance ruim em relação ao operador + e em relação a template strings."
      />

      <h3 className={styles.subtitle} ref={endsWithRef}>endsWith()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>endsWith()</span> verifica se uma <span className={styles.code}>string</span> termina com determinados caracteres, que são passados como parâmetro, retornando <span className={styles.code}>true</span> ou <span className={styles.code}>false</span>.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>endsWith()</span> pode receber um segundo parâmetro, opcional, que substitui o tamanho da <span className={styles.code}>string </span> original, somente para a verificação, para o valor passado como argumento.
      </p>

      <Code codeString={metodosDeString["06"]} />

      <h3 className={styles.subtitle} ref={fromCharCodeRef}>fromCharCode()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>fromCharCode()</span>, diferente dos métodos vistos anteriormente, é um método estático do objeto <span className={styles.code}>String</span>, portanto deve ser invocado a partir do objeto <span className={styles.code}>String</span>.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>fromCharCode()</span> recebe um ou mais argumentos, números de 0 a 65535, de até 16 bits, e retorna o caractere <span className={styles.code}>Unicode</span> correspondente.
      </p>

      <Code codeString={metodosDeString["07"]} />

      <Alerta
        message="O fromCharCode() raramente é usado, principalmente por iniciantes, portanto não precisa utilizar muito tempo para aprendê-lo."
      />

      <h3 className={styles.subtitle} ref={fromCodePointRef}>fromCodePoint()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>fromCodePoint()</span> também é um método estático do objeto <span className={styles.code}>String</span>, portanto deve ser invocado a partir do objeto <span className={styles.code}>String</span>.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>fromCodePoint()</span> tem o mesmo propósito do método <span className={styles.code}>fromCharCode()</span>, a diferença é que ele pode receber códigos <span className={styles.code}>Unicode</span> de até 32 bits.
      </p>

      <Code codeString={metodosDeString["08"]} />

      <Alerta
        message="O fromCodePoint() raramente é usado, principalmente por iniciantes, portanto não precisa utilizar muito tempo para aprendê-lo."
      />

      <h3 className={styles.subtitle} ref={includesRef}>includes()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>includes()</span> verifica se uma <span className={styles.code}>string</span> contém outra <span className={styles.code}>string</span>, ou seja, se uma <span className={styles.code}>string</span> pode ser encontrada dentro de outra <span className={styles.code}>string</span>.
      </p>

      <p className={styles.p_container}>
        Se a <span className={styles.code}>string</span> procurada for encontrada dentro da <span className={styles.code}>string</span> original, o método <span className={styles.code}>includes()</span> retorna <span className={styles.code}>true</span>, senão, retorna <span className={styles.code}>false</span>.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>includes()</span> recebe o primeiro argumento que é a <span className={styles.code}>string</span> a ser pesquisada, e pode receber um segundo argumento, opcional, que é o índice a partir do qual a busca deve ser iniciada na <span className={styles.code}>string</span> original, lembrando que o índice começa por 0 e que o método <span className={styles.code}>includes()</span> é <span className={styles.code}>case sensitive()</span>.
      </p>

      <Code codeString={metodosDeString["09"]} />

      <h3 className={styles.subtitle} ref={indexOfRef}>indexOf()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>indexOf()</span> retorna o índice da primeira ocorrência da <span className={styles.code}>string</span> passada como argumento na <span className={styles.code}>string</span> original, lembrando que o índice começa por 0. Se a <span className={styles.code}>string</span> não for encontrada, será retornado -1.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>indexOf()</span> pode receber um segundo argumento, opcional, que é um número inteiro representando o índice onde a busca deve começar.
      </p>

      <Code codeString={metodosDeString["10"]} />
      
      <p className={styles.p_container}>
        Se a <span className={styles.code}>string</span> passada como primeiro argumento for uma <span className={styles.code}>string</span> vazia, <span className={styles.code}>&apos;&apos;</span>, o valor retornado será 0, se o segundo argumento for menor que o tamanho da <span className={styles.code}>string</span> o retorno será o valor do segundo argumento e se o segundo argumento for igual ou maior que o tamanho da <span className={styles.code}>string</span>, o retorno será o tamanho da <span className={styles.code}>string</span>.
      </p>

      <Code codeString={metodosDeString["11"]} />

      <h3 className={styles.subtitle} ref={lastIndexOfRef}>lastIndexOf()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>lastIndexOf()</span> retorna o índice da última ocorrência da <span className={styles.code}>string</span> passada como argumento na <span className={styles.code}>string</span> original, lembrando que o índice começa por 0. Se a <span className={styles.code}>string</span> não for encontrada, será retornado -1.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>lastIndexOf()</span> pode receber um segundo argumento, opcional, que é um número inteiro representando o índice onde a busca deve começar mas nesse caso a busca é realizada do final para o início da string.
      </p>

      <Code codeString={metodosDeString["12"]} />

      <p className={styles.p_container}>
        Se a <span className={styles.code}>string</span> passada como primeiro argumento for uma <span className={styles.code}>string</span> vazia, <span className={styles.code}>&apos;&apos;</span>, o valor retornado será o tamanho da string, se o segundo argumento for menor que o tamanho da <span className={styles.code}>string</span> o retorno será o valor do segundo argumento e se o segundo argumento for igual ou maior que o tamanho da <span className={styles.code}>string</span>, o retorno será o tamanho da <span className={styles.code}>string</span>.
      </p>

      <Code codeString={metodosDeString["13"]} />

      <h3 className={styles.subtitle} ref={localeCompareRef}>localeCompare()</h3>

      <p className={styles.p_container}>
        O método <span className={styles.code}>localeCompare()</span> compara 2 <span className={styles.code}>strings</span> fazendo a ordenação por ordem alfabética, se a primeira <span className={styles.code}>string</span> for ordenada antes da segunda <span className={styles.code}>string</span> será retornado -1, caso contrário será retornado 1 e se as <span className={styles.code}>strings</span> forem iguais será retornado 0.
      </p>

      <Code codeString={metodosDeString["14"]} />

      <Alerta
        message="Em algumas implementações no lugar de -1 será retornado um número negativo e no lugar de 1 será retornado um número positivo."
      />

      <p className={styles.p_container}>
        Podemos passar um segundo argumento, opcional, que é o locale para fazer a comparação e um terceiro argumento, opcional, que é um objeto com a chave <span className={styles.code}>sensitivity</span> e com os valores <span className={styles.code}>base</span>, que ignora maiúsculas/minúsculas e acentos, <span className={styles.code}>case</span>, que considera maiúsculas/minúsculas e <span className={styles.code}>accent</span>, que considera acentos.
      </p>

      <Code codeString={metodosDeString["15"]} />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default MetodosDeString;
