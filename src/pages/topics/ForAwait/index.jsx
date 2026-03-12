import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import forAwait from '../../../helpers/code/forAwait';
import Alerta from '../../../components/Alerta';

const ForAwait = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        O <span className={styles.code}>for await...of</span> é usado para iterar sobre valores assíncronos, normalmente vindos de promises ou de iteradores assíncronos.
      </p>

      <p className={styles.p_container}>
        Ele só pode ser usado dentro de uma função <span className={styles.code}>async</span> ou em contextos que aceitem iteração assíncrona.
      </p>

      <Code codeString={forAwait['01']} />

      <p className={styles.p_container}>
        Também é possível usar <span className={styles.code}>for await...of</span> diretamente sobre um array de promises.
      </p>

      <Code codeString={forAwait['02']} />

      <p className={styles.p_container}>
        Um caso de uso comum é processar dados assíncronos em sequência, como páginas de API, streams ou lotes de informações.
      </p>

      <Code codeString={forAwait['03']} />

      <Alerta
        message="Use for await quando você realmente precisa consumir valores assíncronos um por um. Se o objetivo for executar tudo em paralelo, Promise.all() normalmente continua sendo mais adequado."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default ForAwait;
