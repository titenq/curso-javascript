import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import templateStrings from '../../../helpers/code/templateStrings';

const TemplateStrings = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        <span className={styles.code}>Template Strings</span> ou <span className={styles.code}>Template Literals</span> permitem a interpolação de variáveis e expressões em <span className={styles.code}>strings</span> usando a notação <span className={styles.code}>&#96;{`$`}{`{}`}&#96;</span>.
      </p>

      <p className={styles.p_container}>
        Note que não é utilizado aspas e sim o <span className={styles.code}>sinal grave</span> ou <span className={styles.code}>backticks</span> <span className={styles.code}>&#96;</span>.
      </p>

      <Code codeString={templateStrings["01"]} />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default TemplateStrings;
