import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import fetchApi from '../../../helpers/code/fetchApi';
import Alerta from '../../../components/Alerta';

const FetchApi = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        A <span className={styles.code}>Fetch API</span> é usada para fazer requisições HTTP no navegador, como buscar dados de uma API ou enviar informações para um servidor.
      </p>

      <p className={styles.p_container}>
        O <span className={styles.code}>fetch()</span> retorna uma promise, por isso ele costuma ser usado com <span className={styles.code}>then()</span> ou <span className={styles.code}>async await</span>.
      </p>

      <Code codeString={fetchApi['01']} />

      <Code codeString={fetchApi['02']} />

      <p className={styles.p_container}>
        Também é possível enviar dados, por exemplo com o método <span className={styles.code}>POST</span>.
      </p>

      <Code codeString={fetchApi['03']} />

      <Alerta
        message="Para trabalhar bem com fetch, vale a pena já ter entendido JSON, promises e async await."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default FetchApi;
