import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import arrays from '../../../helpers/code/arrays';
import Alerta from '../../../components/Alerta';

const Arrays = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Array é uma estrutura usada para armazenar vários valores em uma única variável. Cada valor dentro do array é chamado de elemento.
      </p>

      <Code codeString={arrays['01']} />

      <p className={styles.p_container}>
        Cada elemento possui uma posição, chamada de índice. No Javascript, o primeiro índice de um array é sempre <span className={styles.code}>0</span>.
      </p>

      <Code codeString={arrays['02']} />

      <p className={styles.p_container}>
        Podemos alterar um valor específico informando o índice que desejamos modificar.
      </p>

      <Code codeString={arrays['03']} />

      <p className={styles.p_container}>
        Um array pode armazenar tipos diferentes de dados, embora, na prática, seja melhor manter uma estrutura consistente quando isso fizer sentido.
      </p>

      <Code codeString={arrays['04']} />

      <Alerta
        message="Arrays são muito usados em laços de repetição, métodos de array e renderização de listas. Vale a pena dominar bem esse tipo de dado."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Arrays;
