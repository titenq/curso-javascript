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
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default MetodosDeString;
