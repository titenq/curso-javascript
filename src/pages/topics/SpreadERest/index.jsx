import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import spreadERest from '../../../helpers/code/spreadERest';
import Alerta from '../../../components/Alerta';

const SpreadERest = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Os operadores <span className={styles.code}>spread</span> e <span className={styles.code}>rest</span> usam a mesma sintaxe <span className={styles.code}>...</span>, mas têm finalidades diferentes dependendo do contexto.
      </p>

      <p className={styles.p_container}>
        O <span className={styles.code}>spread</span> espalha elementos de arrays ou propriedades de objetos. Isso é muito útil para fazer cópias e combinações.
      </p>

      <Code codeString={spreadERest['01']} />

      <Code codeString={spreadERest['02']} />

      <p className={styles.p_container}>
        O <span className={styles.code}>rest</span> faz o contrário: ele junta vários valores em um único array, normalmente em parâmetros de função.
      </p>

      <Code codeString={spreadERest['03']} />

      <Alerta
        message="Apesar de usarem a mesma sintaxe, pense assim: spread espalha, rest agrupa."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default SpreadERest;
