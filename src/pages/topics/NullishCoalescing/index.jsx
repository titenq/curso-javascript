import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import nullishCoalescing from '../../../helpers/code/nullishCoalescing';
import Alerta from '../../../components/Alerta';

const NullishCoalescing = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        O operador <span className={styles.code}>??</span> é chamado de <span className="fst-italic">nullish coalescing</span>. Ele retorna o valor da direita somente quando o valor da esquerda é <span className={styles.code}>null</span> ou <span className={styles.code}>undefined</span>.
      </p>

      <Code codeString={nullishCoalescing['01']} />

      <p className={styles.p_container}>
        A principal diferença entre <span className={styles.code}>||</span> e <span className={styles.code}>??</span> é que o <span className={styles.code}>||</span> considera vários valores falsy, enquanto o <span className={styles.code}>??</span> considera apenas <span className={styles.code}>null</span> e <span className={styles.code}>undefined</span>.
      </p>

      <Code codeString={nullishCoalescing['02']} />

      <Code codeString={nullishCoalescing['03']} />

      <Alerta
        message="Quando zero, string vazia ou false são valores válidos, normalmente o operador ?? é mais seguro do que o operador ||."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default NullishCoalescing;
