import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import funcoes from '../../../helpers/code/funcoes';

const Funcoes = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Funções são blocos de código reutilizáveis. Elas permitem agrupar instruções para executar uma tarefa específica sempre que necessário.
      </p>

      <p className={styles.p_container}>
        Uma função pode receber valores de entrada, chamados de parâmetros, e pode retornar um valor usando a palavra-chave <span className={styles.code}>return</span>.
      </p>

      <Code codeString={funcoes['01']} />

      <p className={styles.p_container}>
        No exemplo abaixo a função recebe dois números, soma esses valores e devolve o resultado.
      </p>

      <Code codeString={funcoes['02']} />

      <p className={styles.p_container}>
        Também é possível criar funções e armazená-las em variáveis. Nesse caso temos uma <span className="fst-italic">function expression</span>.
      </p>

      <Code codeString={funcoes['03']} />

      <p className={styles.p_container}>
        Outra forma bastante usada atualmente é a <span className="fst-italic">arrow function</span>, uma sintaxe mais curta para declarar funções.
      </p>

      <Code codeString={funcoes['04']} />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Funcoes;
