import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import { comentarios01 } from '../../../helpers/code/comentarios';

const Comentarios = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Comentário é um texto para descrever e explicar o código, é como se fosse um recado para você mesmo ou para outros desenvolvedores.
      </p>

      <p className={styles.p_container}>
        Um comentário nunca é executado pelo Javascript, portanto não tem influência no código. Não é necessário comentar um código óbvio.
      </p>

      <p className={styles.p_container}>
        Para incluir um comentário de uma linha utilize 2 barras (//), para incluir um comentário de múltiplas linhas inicie com (/*) e termine com (*/).
      </p>

      <p className={styles.p_container}>
        Você pode aninhar um comentário de uma linha dentro de um comentário de múltiplas linhas mas não pode aninhar comentários de múltiplas linhas.
      </p>

      <Code codeString={comentarios01}  />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Comentarios;