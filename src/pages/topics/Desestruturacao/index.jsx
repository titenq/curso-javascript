import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import desestruturacao from '../../../helpers/code/desestruturacao';

const Desestruturacao = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Desestruturação é uma forma mais prática de extrair valores de objetos e arrays, atribuindo esses valores diretamente a variáveis.
      </p>

      <p className={styles.p_container}>
        Em vez de acessar cada propriedade manualmente, podemos fazer isso de forma mais curta e legível.
      </p>

      <Code codeString={desestruturacao['01']} />

      <p className={styles.p_container}>
        A desestruturação também funciona com arrays, respeitando a posição dos elementos.
      </p>

      <Code codeString={desestruturacao['02']} />

      <p className={styles.p_container}>
        Também podemos renomear as variáveis durante a desestruturação.
      </p>

      <Code codeString={desestruturacao['03']} />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Desestruturacao;
