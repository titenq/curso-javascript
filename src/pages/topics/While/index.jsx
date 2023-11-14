import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import doWhile from '../../../helpers/code/doWhile';
import Alerta from '../../../components/Alerta';

const While = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        A instrução <span className={styles.code}>while</span> é uma estrutura
        de repetição que é utilizada para executar um bloco de código repetidamente enquanto uma condição for <span className={styles.code}>true</span>. 
      </p>

      <Code codeString={doWhile["01"]} />

      <p className={styles.p_container}>
        No código acima, declaramos e inicializamos a variável contador com o valor 1, na linha 1, na declaração do <span className={styles.code}>while</span>, na linha 3, passamos a condição de parada que é enquanto o contador for menor ou igual a 5, no bloco de código a ser executado a cada repetição do <span className={styles.code}>while</span> irá imprimir a <span className={styles.code}>string</span> Contador: seguido do valor atual do contador, e por último, na linha 6, incrementamos o valor do contador em + 1, ou seja, na primeira passagem pelo <span className={styles.code}>while</span> o valor de contador é 1, e é incrementado em + 1, na segunda passagem o valor de contador é 2, e é incrementado em + 1, e assim é repetido até o contador ter o valor de 6, mas como <span className={styles.code}>6 {'<'}= 5</span> é <span className={styles.code}>false</span> o <span className={styles.code}>while</span> é interrompido. 
      </p>

      <Alerta
        message={
          <div
            dangerouslySetInnerHTML={{
              __html: `Se não tiver o incremento da variável contador a condição sempre será verdadeira e o <span class="${styles.code}">while</span> nunca será interrompido, gerando o tão famoso <span class="${styles.code}">loop infinito</span>.`
            }}
          />
        }
      />

      <p className={styles.p_container}>
        A instrução <span className={styles.code}>do while</span> é muito parecida com o <span className={styles.code}>while</span>, a diferença é que o bloco de código <span className={styles.code}>do</span> é sempre executado e depois é verificado se a condição é <span className={styles.code}>true</span>.
      </p>

      <Code codeString={doWhile["02"]} />

      <Alerta
        message={
          <div
            dangerouslySetInnerHTML={{
              __html: `A princípio o <span class="${styles.code}">while</span> e o <span class="${styles.code}">do while</span> parecem iguais mas o <span class="${styles.code}">while</span> só executa o código se a condição for <span class="${styles.code}">true</span> e o <span class="${styles.code}">do while</span> sempre executa o código na primeira vez e só repete se a condição for <span class="${styles.code}">true</span>.`
            }}
          />
        }
      />

      <Code codeString={doWhile["03"]} />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default While;
