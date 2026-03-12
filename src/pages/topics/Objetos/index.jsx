import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import objetos from '../../../helpers/code/objetos';

const Objetos = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Objetos permitem agrupar informações relacionadas em pares de chave e valor. Eles são muito usados para representar entidades do mundo real, como pessoas, produtos e usuários.
      </p>

      <Code codeString={objetos['01']} />

      <p className={styles.p_container}>
        Podemos adicionar novas propriedades a um objeto mesmo depois de ele ter sido criado.
      </p>

      <Code codeString={objetos['02']} />

      <p className={styles.p_container}>
        Um objeto também pode conter outros objetos, formando estruturas mais complexas.
      </p>

      <Code codeString={objetos['03']} />

      <p className={styles.p_container}>
        Mais adiante, quando você estudar arrays, funções e métodos, vai perceber que objetos estão por toda parte no Javascript.
      </p>
    </>
  );

  return <CustomTopic content={content} />;
};

export default Objetos;
