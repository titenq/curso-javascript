import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import forOf from '../../../helpers/code/forOf';

const ForOf = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        A instrução <span className={styles.code}>for of</span> é uma estrutura
        de repetição muito parecida com o <span className={styles.code}>for</span> mas a iteração é direta, não por índices. 
      </p>

      <Code codeString={forOf["01"]} />

      <p className={styles.p_container}>
        A variável <span className={styles.code}>fruta</span> poderia ter qualquer nome, normalmente nomeamos um <span className={styles.code}>array</span> no plural, mesmo tendo um ou nenhum elemento, e nomeamos a variável do <span className={styles.code}>for of</span> no singular do <span className={styles.code}>array</span>.
      </p>

      <Code codeString={forOf["02"]} />

      <p className={styles.p_container}>
        Acima um exemplo do <span className={styles.code}>for of</span> com <span className={styles.code}>string</span>, lembrando que o <span className={styles.code}>for of</span> pode ser utilizado também com <span className={styles.code}>Map</span> e <span className={styles.code}>Set</span>.
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default ForOf;
