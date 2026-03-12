import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import operadorTernario from '../../../helpers/code/operadorTernario';
import Alerta from '../../../components/Alerta';

const OperadorTernario = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        O operador ternário é uma forma curta de escrever uma decisão simples. Ele funciona como um <span className={styles.code}>if</span> resumido.
      </p>

      <p className={styles.p_container}>
        A sintaxe é: <span className={styles.code}>condicao ? valorSeTrue : valorSeFalse</span>.
      </p>

      <Code codeString={operadorTernario['01']} />

      <p className={styles.p_container}>
        Ele é útil quando você quer definir um valor ou exibir um resultado baseado em uma condição curta.
      </p>

      <Code codeString={operadorTernario['02']} />

      <Code codeString={operadorTernario['03']} />

      <Alerta
        message="Use o operador ternário para condições simples. Se a lógica começar a ficar grande ou difícil de ler, prefira usar if e else."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default OperadorTernario;
