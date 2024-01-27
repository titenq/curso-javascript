import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import forIn from '../../../helpers/code/forIn';

const ForIn = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        A instrução <span className={styles.code}>for in</span> é uma estrutura
        de repetição muito parecida com o <span className={styles.code}>for of</span> mas normalmente é usada para iterar as chaves de um objeto. 
      </p>

      <Code codeString={forIn["01"]} />

      <p className={styles.p_container}>
        O <span className={styles.code}>for in</span> também pode iterar um <span className={styles.code}>array</span> porque ele têm {'"'}chaves implícitas{'"'} que são os índices, que começa por 0.
      </p>

      <Code codeString={forIn["02"]} />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default ForIn;
