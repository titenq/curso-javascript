import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import json from '../../../helpers/code/json';
import Alerta from '../../../components/Alerta';

const Json = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        JSON significa <span className="fst-italic">JavaScript Object Notation</span>. Ele é um formato de texto muito usado para trocar dados entre sistemas, APIs e aplicações.
      </p>

      <p className={styles.p_container}>
        O método <span className={styles.code}>JSON.stringify()</span> converte um objeto Javascript em string JSON.
      </p>

      <Code codeString={json['01']} />

      <p className={styles.p_container}>
        O método <span className={styles.code}>JSON.parse()</span> faz o processo inverso: converte uma string JSON em objeto Javascript.
      </p>

      <Code codeString={json['02']} />

      <Code codeString={json['03']} />

      <Alerta
        message="JSON parece muito com objeto Javascript, mas não é a mesma coisa. JSON é texto; objeto é estrutura de dados em memória."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Json;
