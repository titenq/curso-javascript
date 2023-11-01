import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import ifElse from '../../../helpers/code/ifElse';
import Alerta from '../../../components/Alerta';

const If = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        A instrução <span className={styles.td_operadores}>if</span> é uma estrutura condicional que é utilizada para executar um bloco de código se uma condição for true. A sintaxe básica do <span className={styles.td_operadores}>if</span> é a seguinte:
      </p>

      <Code codeString={ifElse['01']} />

      <Code codeString={ifElse['02']} />

      <p className={styles.p_container}>
        A instrução <span className={styles.td_operadores}>else</span> pode ser utilizada em conjunto com o <span className={styles.td_operadores}>if</span>, o <span className={styles.td_operadores}>else</span> executa o seu bloco de código se a condição for false.
      </p>

      <Code codeString={ifElse['03']} />

      <p className={styles.p_container}>
        A instrução <span className={styles.td_operadores}>else if</span> pode ser utilizada em conjunto com o <span className={styles.td_operadores}>if</span> para testar várias condições em sequência, quando a primeira condição for true será executado o bloco de código correspondente e o código sairá do <span className={styles.td_operadores}>if</span>, ignorando as outras condições.
      </p>

      <Code codeString={ifElse['04']} />

      <p className={styles.p_container}>
        No código abaixo a condição só será true se a idade for maior ou igual a 18 e cnh for igual a true.
      </p>

      <Code codeString={ifElse['05']} />

      <p className={styles.p_container}>
        No código abaixo usamos a mesma condição mas utilizamos uma maneira mais concisa para comparar se uma variável é true ou false.
      </p>

      <Code codeString={ifElse['06']} />

      <p className={styles.p_container}>
        Agora vamos demonstrar os 2 erros mais recorrentes no uso do <span className={styles.td_operadores}>if</span> pelos novatos:
      </p>

      <Code codeString={ifElse['07']} />

      <Alerta
        message={
          <div dangerouslySetInnerHTML={{ __html: "Usar o operador de atribuição <span className={styles.td_operadores}>=</span>, na linha 3, no lugar do operador de comparação <span className={styles.td_operadores}>===</span>, na linha 11." }} />
        }
      />

      <Code codeString={ifElse['08']} />

      <Alerta
        message="Esquecer de referenciar a variável que será comparada, na linha 3, o correto é referenciar novamente a variável a cada comparação, na linha 9."
      />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default If;
