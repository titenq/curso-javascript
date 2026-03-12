import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import metodosDeArray from '../../../helpers/code/metodosDeArray';
import Alerta from '../../../components/Alerta';

const MetodosDeArray = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Métodos de array são funções prontas que facilitam muito o trabalho com listas de dados. Com eles você pode adicionar, remover, transformar e filtrar elementos.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>push()</span> adiciona um ou mais itens no final do array.
      </p>

      <Code codeString={metodosDeArray['01']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>pop()</span> remove o último elemento do array e retorna esse elemento.
      </p>

      <Code codeString={metodosDeArray['02']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>map()</span> cria um novo array a partir da transformação de cada item do array original.
      </p>

      <Code codeString={metodosDeArray['03']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>filter()</span> cria um novo array contendo apenas os elementos que passaram em uma condição.
      </p>

      <Code codeString={metodosDeArray['04']} />

      <Alerta
        message="Os métodos de array aparecem o tempo todo em Javascript moderno. Mesmo sem decorar todos, é importante entender bem os mais usados."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default MetodosDeArray;
