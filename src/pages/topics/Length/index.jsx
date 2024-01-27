import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import length from '../../../helpers/code/length';

const Length = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        <span className={styles.code}>length</span> é uma propriedade já existente em <span className={styles.code}>arrays</span> e <span className={styles.code}>strings</span>.
      </p>

      <p className={styles.p_container}>
        No <span className={styles.code}>array</span> o <span className={styles.code}>length</span> retorna o número de elementos.
      </p>

      <p className={styles.p_container}>
        Numa <span className={styles.code}>string</span> o <span className={styles.code}>length</span> retorna o número de caracteres, lembrando que o espaço também é um caractere.
      </p>

      <Code codeString={length["01"]} />

      <p className={styles.p_container}>
        Note que para acessar a propriedade <span className={styles.code}>length</span> usamos a notação de ponto, <span className="fst-italic">(dot notation)</span>, com o caractere <kbd>.</kbd>.
      </p>

      <p className={styles.p_container}>
        Nós podemos manipular os elementos de um <span className={styles.code}>array</span> para mais ou para menos com a propriedade <span className={styles.code}>length</span>.
      </p>

      <p className={styles.p_container}>
        Quando manipulado para mais é adicionado elementos <span className={styles.code}>undefined</span> e quando manipulado para menos, são removidos os elementos do final para o começo do <span className={styles.code}>array</span>.
      </p>

      <Code codeString={length["02"]} />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Length;
