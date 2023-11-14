import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import forLoop from '../../../helpers/code/forLoop';

const For = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        A instrução <span className={styles.code}>for</span> é uma estrutura
        de repetição que é utilizada para executar um bloco de código repetidamente enquanto uma condição for <span className={styles.code}>true</span>. 
      </p>

      <Code codeString={forLoop["01"]} />

      <p className={styles.p_container}>
        No código acima podemos ler assim: para a variável i igual a 1, enquanto i for menor ou igual a 5, execute o bloco de código abaixo e incremente em + 1 a variável i, na segunda passagem do if o i vale 2 então é menor ou igual a 5, portanto vai executar o bloco de código, e o i que vale 2 vai passar a valer 3, e assim por diante até que i <span className={styles.code}>{'<'}= 5</span> seja <span className={styles.code}>false</span> e a execução do <span className={styles.code}>for</span> seja interrompida. 
      </p>

      <Code codeString={forLoop["02"]} />

      <p className={styles.p_container}>
        No código acima utilizamos o for para iterar no array frutas, e podemos ler assim: para a variável i igual a 0, enquanto i for menor que a quantidade de itens em frutas, execute o código abaixo e incremente em + 1 
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default For;
