import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import optionalChaining from '../../../helpers/code/optionalChaining';
import Alerta from '../../../components/Alerta';

const OptionalChaining = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        O <span className={styles.code}>optional chaining</span> é o operador <span className={styles.code}>?.</span>. Ele permite acessar propriedades ou chamar métodos de forma segura quando um valor pode ser <span className={styles.code}>null</span> ou <span className={styles.code}>undefined</span>.
      </p>

      <p className={styles.p_container}>
        Sem ele, tentar acessar uma propriedade em um valor inexistente gera erro. Com o <span className={styles.code}>?.</span>, o Javascript interrompe o acesso e retorna <span className={styles.code}>undefined</span>.
      </p>

      <Code codeString={optionalChaining['01']} />

      <Code codeString={optionalChaining['02']} />

      <p className={styles.p_container}>
        O operador também pode ser usado para chamadas de função opcionais.
      </p>

      <Code codeString={optionalChaining['03']} />

      <Alerta
        message="O optional chaining evita erros de acesso em valores inexistentes, mas não substitui a necessidade de entender por que aquele valor pode estar ausente."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default OptionalChaining;
