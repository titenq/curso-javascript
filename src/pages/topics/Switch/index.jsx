import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import switchCase from '../../../helpers/code/switchCase';
import Alerta from '../../../components/Alerta';

const Switch = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        A instrução <span className={styles.code}>switch</span> é uma estrutura
        condicional que é utilizada para executar um código diferente para cada valor específico. 
      </p>

      <Code codeString={switchCase["01"]} />

      <p className={styles.p_container}>
        O uso da palavra-chave <span className={styles.code}>default</span> é opcional e ele executa o código abaixo dele se nenhum dos <span className={styles.code}>case</span> for atendido.
      </p>

      <Alerta
        message={
          <div
            dangerouslySetInnerHTML={{
              __html: `O uso da palavra-chave <span class="${styles.code}">break</span> é obrigatório, ele para a execução do <span class="${styles.code}">switch</span> quando o <span class="${styles.code}">case</span> é atendido, sem ele o código abaixo do <span class="${styles.code}">case</span> seria executado.`
            }}
          />
        }
      />

      <p className={styles.p_container}>
        O mesmo código acima, sem a utilização do <span className={styles.code}>break</span>, retorna um valor que não é o esperado.
      </p>

      <Code codeString={switchCase["02"]} />

      <p className={styles.p_container}>
        Podemos ter múltiplos <span className={styles.code}>case</span> executando o mesmo bloco de código.
      </p>

      <Code codeString={switchCase["03"]} />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Switch;
