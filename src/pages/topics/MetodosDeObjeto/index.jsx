import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import metodosDeObjeto from '../../../helpers/code/metodosDeObjeto';
import Alerta from '../../../components/Alerta';

const MetodosDeObjeto = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Objetos também possuem métodos utilitários que ajudam a inspecionar, transformar e combinar propriedades. Muitos deles são usados através do objeto global <span className={styles.code}>Object</span>.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>Object.keys()</span> retorna um array com as chaves do objeto.
      </p>

      <Code codeString={metodosDeObjeto['01']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>Object.values()</span> retorna um array com os valores do objeto.
      </p>

      <Code codeString={metodosDeObjeto['02']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>Object.entries()</span> retorna um array de pares no formato <span className={styles.code}>[chave, valor]</span>.
      </p>

      <Code codeString={metodosDeObjeto['03']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>hasOwnProperty()</span> verifica se uma propriedade existe diretamente no objeto.
      </p>

      <Code codeString={metodosDeObjeto['04']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>Object.assign()</span> pode ser usado para juntar objetos ou criar cópias rasas.
      </p>

      <Code codeString={metodosDeObjeto['05']} />

      <Alerta
        message="Esses métodos aparecem bastante quando você precisa percorrer objetos, validar propriedades ou combinar configurações."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default MetodosDeObjeto;
