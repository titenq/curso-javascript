import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import truthyEFalsy from '../../../helpers/code/truthyEFalsy';
import Alerta from '../../../components/Alerta';

const TruthyEFalsy = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        No Javascript, qualquer valor pode ser avaliado como <span className={styles.code}>true</span> ou <span className={styles.code}>false</span> em estruturas condicionais. Quando um valor se comporta como verdadeiro, chamamos de <span className="fst-italic">truthy</span>. Quando se comporta como falso, chamamos de <span className="fst-italic">falsy</span>.
      </p>

      <p className={styles.p_container}>
        Alguns exemplos de valores <span className="fst-italic">truthy</span> são: strings com conteúdo, números diferentes de zero, arrays e objetos.
      </p>

      <Code codeString={truthyEFalsy['01']} />

      <p className={styles.p_container}>
        Alguns exemplos de valores <span className="fst-italic">falsy</span> são: <span className={styles.code}>false</span>, <span className={styles.code}>0</span>, <span className={styles.code}>''</span>, <span className={styles.code}>null</span>, <span className={styles.code}>undefined</span> e <span className={styles.code}>NaN</span>.
      </p>

      <Code codeString={truthyEFalsy['02']} />

      <p className={styles.p_container}>
        Entender <span className="fst-italic">truthy</span> e <span className="fst-italic">falsy</span> ajuda bastante no uso de operadores lógicos, condicionais e definição de valores padrão.
      </p>

      <Code codeString={truthyEFalsy['03']} />

      <Alerta
        message="Apesar de ser útil, esse comportamento também pode esconder erros. Sempre confirme se você quer testar o valor em si ou se quer fazer uma comparação mais específica."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default TruthyEFalsy;
